import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

import IconStar from "~/components/icons/IconStar";
const sideImg =
  "https://images.unsplash.com/photo-1610576661852-53017dc25144?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kZSUyMHB1cnBsZXxlbnwwfHwwfHx8MA%3D%3D";

export default component$(() => {
  // const stepsData = {
  //   title: "Workflow",
  //   items: [
  //     {
  //       title: "Step 1",
  //       description:
  //         "We begin with a 1-on-1 conversation. You walk me through your requirements, your vision, your goals, what you want your site to be and do. I ask questions to understand not just the 'what', but the 'why'.",
      
  //       icon: IconStar,
  //     },
  //     {
  //       title: "Step 2",
  //       description:
  //          "Next, I sketch out the user experience. You’ll see early wireframes or real-time design previews. We iterate together — your feedback shapes the layout, the flow, and even the tiniest interaction.",
  //       icon: IconStar,
  //     },
  //     {
  //       title: "Step 3",
  //       description:
  //         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mirisus tempus nulla, sed porttitor est nibh at nulla.",
  //       icon: IconStar,
  //     },
  //     {
  //       title: "Ready!",
  //       icon: IconStar,
  //     },
  //   ],
  //   image: {
  //     src: sideImg,
  //     alt: "Steps image",
  //   },
  // };
  const stepsData = {
  title: "Workflow",
  items: [
    {
      title: "Step 1: We Talk",
      description:
        "We begin with a 1-on-1 conversation. You walk me through your requirements, your vision, your goals — what you want your site to be and do. I ask the right questions to understand not just the 'what', but the 'why'.",
      icon: IconStar,
    },
    {
      title: "Step 2: We Co-Design the Experience",
      description:
        "Next, I sketch out the user experience. You’ll see early wireframes or real-time design previews. We iterate together — your feedback shapes the layout, the flow, and even the tiniest interaction.",
      icon: IconStar,
    },
    {
      title: "Step 3: Build, Review, Repeat",
      description:
        "I build the site using modern full-stack tools (React, Node, Tailwind, etc.). You get access to live previews and staging links throughout. We collaborate actively — reviewing features, testing functionality, and refining UI in real-time.",
      icon: IconStar,
    },
    {
      title: "Ready! Launch, Learn, Support",
      description:
        "We launch when you're ready — fast, SEO-optimized, and responsive across all devices. Post-launch, I stay available for feedback, tweaks, and improvements. It's not just delivery — it's partnership.",
      icon: IconStar,
    },
  ],
  image: {
    src: sideImg,
    alt: "Collaborative workflow image",
  },
};

  const { title, items, image } = stepsData;

  return (
    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          {title && <h2 class="font-heading mb-8 text-3xl font-bold lg:text-5xl text-center">{title}</h2>}
      <div class="row-gap-10 grid gap-6 md:grid-cols-2">
        <div class="mb-4 md:mb-0 md:py-4 md:pr-16">
          {Array.isArray(items) &&
            items.length &&
            items.map(({ title, description, icon: Icon }, index) => (
              <div key={`item-steps-${index}`} class="flex">
                <div class="mr-4 flex flex-col items-center">
                  <div>
                    {index !== items.length - 1 ? (
                      <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900">
                        {typeof Icon !== "undefined" ? (
                          <Icon class="h-6 w-6 text-primary-800 dark:text-slate-200" />
                        ) : (
                          <IconStar class="h-6 w-6 text-primary-800 dark:text-slate-200" />
                        )}
                      </div>
                    ) : (
                      <div class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-900 bg-primary-900">
                        {typeof Icon !== "undefined" ? (
                          <Icon class="h-6 w-6 text-white dark:text-slate-200" />
                        ) : (
                          <IconStar class="h-6 w-6 text-white dark:text-slate-200" />
                        )}
                      </div>
                    )}
                  </div>
                  {index !== items.length - 1 && <div class="h-full w-px bg-gray-300 dark:bg-slate-500"></div>}
                </div>
                <div class={`pt-1 ${index !== items.length - 1 ? "pb-8" : ""}`}>
                  {title && <p class="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">{title}</p>}
                  {description && <p class="text-gray-600 dark:text-slate-400">{description}</p>}
                </div>
              </div>
            ))}
        </div>
        {/* <div class="relative">
          {typeof image !== "undefined" && (
            <Image
              layout="constrained"
              src={image.src}
              width={532}
              height={532}
              alt={image.alt}
              class="w-full rounded-md bg-gray-500 object-cover shadow-lg dark:bg-slate-700 md:absolute md:h-full"
              breakpoints={[320, 480, 640, 1024]}
            />
          )}
        </div> */}
        <div class="relative flex items-center justify-center">
  {typeof image !== "undefined" && (
    <Image
      layout="constrained"
      src={image.src}
      width={532}
      height={532}
      alt={image.alt}
      class="w-full max-w-md rounded-md bg-gray-500 object-cover shadow-lg dark:bg-slate-700"
      breakpoints={[320, 480, 640, 1024]}
    />
  )}
</div>
      </div>
    </section>
  );
});
