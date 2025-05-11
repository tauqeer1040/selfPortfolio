import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead, StaticGenerateHandler } from "@builder.io/qwik-city";
import type { Post } from "~/types";
import md from "markdown-it";
import { fetchPosts, findPostBySlug } from "~/utils/posts";
import { Suggestions } from "~/components/widgets/Suggestions";
import { getRelatedPosts } from "~/utils/suggestions";

// Initialize markdown-it once outside components
const markdownRenderer = md({
  html: true,
  linkify: true,
  typographer: true
});

export const useGetPostBySlug = routeLoader$(async ({ params, status }): Promise<Post | null> => {
  try {
    const post = await findPostBySlug(params.slug);
    if (!post) {
      status(404);
      return null;
    }
    return post;
  } catch (error) {
    status(500);
    return null;
  }
});

export const useRelatedPosts = routeLoader$(async (requestEvent) => {
  const currentPost = await requestEvent.resolveValue(useGetPostBySlug);
  if (!currentPost) return [];
  
  const allPosts = await fetchPosts();
  return getRelatedPosts(allPosts, currentPost.slug);
});

export default component$(() => {
  const postSignal = useGetPostBySlug();
  const relatedPosts = useRelatedPosts();

  if (!postSignal.value) {
    return (
      <section class="mx-auto py-8 sm:py-16 lg:py-20">
        <div class="container mx-auto max-w-3xl px-6 text-center">
          <h1 class="text-4xl font-bold text-center">Post not found</h1>
        </div>
      </section>
    );
  }

  const post = postSignal.value;
  const renderedContent = markdownRenderer.render(post.content);

  return (
    <section class="mx-auto py-8 sm:py-16 lg:py-20">
      <article>
        <header class={post.image ? "text-center" : ""}>
          <p class="mx-auto max-w-3xl px-4 sm:px-6">
            <time dateTime={post.publishDate.toISOString()}>
              {post.publishDate.toLocaleDateString("en-us", {
                year: "numeric",
                month: "short",
                day: "numeric",
                timeZone: "UTC",
              })}
            </time>
          </p>
          <h1 class="leading-tighter font-heading mx-auto mb-8 max-w-3xl px-4 text-4xl font-bold tracking-tighter sm:px-6 md:text-5xl">
            {post.title}
          </h1>
          {post.image ? (
            <img
              src={post.image}
              class="mx-auto mt-4 mb-6 max-w-full bg-gray-400 dark:bg-slate-700 sm:rounded-md lg:max-w-6xl"
              sizes="(max-width: 900px) 400px, 900px"
              alt={post.excerpt}
              loading="eager"
              width={900}
              height={480}
            />
          ) : (
            <div class="mx-auto max-w-3xl px-4 sm:px-6">
              <div class="border-t dark:border-slate-700" />
            </div>
          )}
        </header>
        <div
          class="prose-md prose-headings:font-heading prose-headings:leading-tighter container prose prose-lg mx-auto mt-8 max-w-3xl px-6 prose-headings:font-bold prose-headings:tracking-tighter prose-a:text-primary-600 prose-img:rounded-md prose-img:shadow-lg dark:prose-invert dark:prose-headings:text-slate-300 dark:prose-a:text-primary-400 sm:px-6 lg:prose-xl"
          dangerouslySetInnerHTML={renderedContent}
        />
        {relatedPosts.value.length > 0 && <Suggestions links={relatedPosts.value} />}
      </article>
    </section>
  );
});

export const onStaticGenerate: StaticGenerateHandler = async () => {
  const posts = await fetchPosts();
  const validPosts = posts.filter(post => !post.draft);
  // Filter out draft posts if needed
  const publishedPosts = validPosts.filter(post => !post.draft);

  return {
    params: publishedPosts.map(({ slug }) => ({ slug })),
  };
};

export const head: DocumentHead = ({ resolveValue }) => {
  const post = resolveValue(useGetPostBySlug);
  
  if (!post) {
    return {
      title: "Post Not Found - Desilifter",
    };
  }

  return {
    title: `${post.title} — Desilifter`,
    meta: [
      {
        name: "description",
        content: post.excerpt,
      },
      // Open Graph meta tags for better sharing
      {
        property: "og:title",
        content: post.title,
      },
      {
        property: "og:description",
        content: post.excerpt,
      },
      ...(post.image ? [{
        property: "og:image",
        content: post.image,
      }] : []),
    ],
  };
};