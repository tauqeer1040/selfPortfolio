import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { LuGithub, LuTwitter } from "@qwikest/icons/lucide";

// const coverImage =
//   "https://images.unsplash.com/photo-1590767950092-42b8362368da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80";

const coverImage = "images/96075407.jpeg";

export default component$(() => {
  return (
    <section class="not-prose relative md:-mt-[76px]">
      <div
        class="pointer-events-none absolute inset-0"
        aria-hidden="true"
      ></div>
      <div class="relative mx-auto px-4 sm:px-6">
        <div class="pointer-events-none pt-0 md:pt-[76px]"></div>
        <div class="lg:align-center flex flex-col py-12 md:py-2 lg:items-center lg:justify-center m-auto">
  <div class="flex flex-col items-center justify-center w-full max-w-3xl px-4">
    {/* Image */}
    <Image
      src={coverImage}
      layout="constrained"
      width={300}
      height={300}
      alt="Hero Image"
      class="mx-auto w-full max-w-[300px] rounded-full drop-shadow-2xl"
      priority={true}
      breakpoints={[320, 480, 640, 768, 1024]}
    />

    {/* Green Section */}
    <div class="w-full text-center pb-10 md:pb-16 mt-8 px-4 rounded-lg">
      <h1 class="leading-tighter font-heading mb-4 text-5xl font-bold leading-[1.2] tracking-tighter dark:text-gray-200 md:text-6xl">
        <span class="text-[#e5d066]">Tauqeer Ahmed</span>
        <br />
        <span class="text-3xl italic tracking-tight">3+ years of experience</span>
      </h1>

      <p class="text-muted mb-6 text-xl dark:text-slate-300">
        Ask to get your perfect website tailor-made by a passionate expert.
      </p>

      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <a
          class="btn bg-[#e5d066] text-[#111827] dark:text-[#111827]"
          href="/resume/Tauqeer%20Ahmed%20Resume.pdf"
          download="Tauqeer_Ahmed_Resume.pdf"
        >
          <p class="font-semibold">Download Resume</p>
        </a>

        <div class="flex items-center justify-center gap-6">
          <a
            href="https://github.com/tauqeer1040"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <LuGithub class="h-12 w-12 text-purple-500 dark:hover:text-white" />
          </a>
          <a
            href="https://x.com/KatKawPose"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <LuTwitter class="h-12 w-12 text-blue-500 hover:text-blue-700" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </section>
  );
});
