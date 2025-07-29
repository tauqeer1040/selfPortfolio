import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="px-4 py-8 md:py-16 sm:px-6 mx-auto md:px-24 lg:px-8 lg:py-20 max-w-7xl">
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div class="text-center md:border-r dark:md:border-slate-500 mb-10 md:mb-0">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-gold font-heading">
            50K+
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Average Revenue Generated
          </p>
        </div>
        <div class="text-center md:border-r dark:md:border-slate-500 mb-10 md:mb-0">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-gold font-heading">
            500+
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Github Contributions
          </p>
        </div>
        <div class="text-center md:border-r dark:md:border-slate-500 font-heading">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-gold">
            40+
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Full-stack projects
          </p>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-gold font-heading">
            5+
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Tech Stacks Mastered
          </p>
        </div>
      </div>
    </div>
  );
});
