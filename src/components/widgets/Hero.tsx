import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";
import { LuGithub, LuLinkedin} from "@qwikest/icons/lucide";


const coverImage = "images/96075407.jpeg";
const getYearsOfExperience = () => {
  const startDate = new Date("2022-08-01"); 
  const now = new Date();

  const months =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());

  const yearsByTenMonth = Math.floor(months / 10);
  return yearsByTenMonth;
};

export default component$(() => {
  const experienceYears = getYearsOfExperience();
  return (
    <section class="not-prose relative">
      <div class="pointer-events-none absolute inset-0" aria-hidden="true"></div>
      <div class="relative mx-auto px-4 sm:px-6">
        <div class="flex flex-col py-8 lg:items-center lg:justify-center m-auto">
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
            <div class="w-full text-center pb-10 mt-6 px-4 rounded-lg">
              <h1 class="font-heading text-4xl md:text-5xl font-bold dark:text-gray-200 leading-none tracking-normal">
                <span class="text-[#e5d066]">Tauqeer Ahmed</span>
                {/* <br /> */}
              </h1>
                <h2 class="text-base italic mt-2 leading-tight text-gray-800 dark:text-white">
                  {experienceYears}+ years of experience
                </h2>
                <h2 class=" text-lg mt-2 leading-tight text-gray-800 dark:text-white">
                  Master's Degree in Computer Applications
                </h2>
                

              <h6 class="italic mt-10 mb-6 text-lg text-base text-gray-500">
                Ask to get your perfect website tailor-made by a passionate expert.
              </h6>

              {/* <h2 class="text-sm italic mt-2 leading-tight text-gray-700 dark:text-gray-300">
  {experienceYears}+ years of experience
</h2>
<p class="text-base mt-1 leading-snug text-gray-800 dark:text-white">
  Master's Degree in Computer Applications
</p>
<p class="italic mt-6 mb-4 text-base leading-relaxed text-gray-500">
  Ask to get your perfect website tailor-made by a passionate expert.
</p> */}


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
                    <LuGithub class="h-10 w-10 text-purple-500 dark:hover:text-white" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tauqeerahmed100/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="linkedin"
                  >
                    <LuLinkedin class="h-10 w-10 text-blue-500 hover:text-blue-700" />
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
