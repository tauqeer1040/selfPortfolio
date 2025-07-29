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
      <div class="relative mx-auto w-screen px-4 sm:px-6">
        <div class="pointer-events-none pt-0 md:pt-[76px]"></div>
        <div class="lg:align-center flex flex-col py-12 md:py-20 lg:items-center lg:justify-center lg:gap-8">
          <div class="block text-center">
            <Image
              src={coverImage}
              layout="constrained"
              width={300}
              height={300}
              alt="Hero Image"
              class="mx-auto w-full rounded-full drop-shadow-2xl lg:mr-0"
              priority={true}
              breakpoints={[320, 480, 640, 768, 1024]}
            />
            {/* <p>🔖 Bookmark the site now!</p> */}
          </div>

          <div class="max-w-screen mx-auto flex-none pb-10 text-center sm:w-[90vw] md:pb-16 lg:w-[90vw]">
            {/* md:ml-28 */}

            {/* <h1 class="text-5xl md:text-6xl font-bold leading-tighter tracking-tighter mb-4 font-heading dark:text-gray-200">
            Welcome to the<br class="hidden" />{" "}
            <br />
            <span class="text-[#e5d066]">Tauqeer Ahmed</span>{" "}
            <br />
            <span class="sm:whitespace-nowrap ">Blog</span> */}
            <h1 class="max-w-screen leading-tighter font-heading mb-4 w-full text-5xl font-bold leading-[1.2] tracking-tighter dark:text-gray-200 md:text-6xl">
              {/* Welcome to the */}
              {/* <br class="sm:block lg:hidden"/> */}
              <span class="text-[#e5d066]">Tauqeer Ahmed</span>
              <br class="sm:block lg:block" />

              <span class="text-3xl italic tracking-tight">
                3+ years of experience
              </span>
            </h1>
            <div class="mx-auto max-w-3xl lg:max-w-none">
              <p class="text-muted mb-6 text-xl dark:text-slate-300">
                {/* <span class="font-semibold underline decoration-wavy decoration-1 decoration-secondary-600 underline-offset-2">
                  Qwind
                </span>{" "} */}
                Ask to get your perfect website tailor-made by a passionate
                expert.
              </p>

              <div class="m-auto flex max-w-xs flex-col flex-wrap gap-4 sm:max-w-md sm:flex-row sm:justify-center lg:m-0 lg:max-w-[100vw]">
                <div class="flex w-full text-[#111827] sm:w-auto">
                  <a
                    class="btn w-full bg-[#e5d066] text-[#111827] dark:text-[#111827] sm:mb-0"
                    href="/resume/Tauqeer%20Ahmed%20Resume.pdf"
                    download="Tauqeer_Ahmed_Resume.pdf"
                  >
                    <strong>
                      <p class="text-[#111827]">Download Resume</p>
                    </strong>
                  </a>
                </div>

                <div class="mt-2 flex w-full items-center justify-center gap-8 sm:w-auto sm:gap-4">
                  <a
                    href="https://github.com/tauqeer1040"
                    target="_blank"
                    aria-label="Visit Tauqeer on Github"
                    title="Visit Tauqeer on Github"
                    rel="noopener noreferrer"
                  >
                    {/* <LuInstagram class=" w-12 h-12 text-pink-500 hover:text-pink-700" /> */}
                    <LuGithub class="h-12 w-12 text-purple-500 dark:hover:text-white" />
                  </a>
                  <a
                    href="https://x.com/KatKawPose"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Visit Tauqeer on Twitter"
                    title="Visit Tauqeer on Twitter"
                  >
                    <LuTwitter class="h-12 w-12 text-blue-500 hover:text-blue-700" />
                  </a>
                </div>
              </div>
              {/* <div class="mt-4">
                <p>🔖 Bookmark the site now!</p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
