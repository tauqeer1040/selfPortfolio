import { component$ } from "@builder.io/qwik";

// @ts-ignore
// import logoSrc from "~/assets/images/flexed-biceps.svg?width=64&height=64&png";
import logoTwo from "~/assets/images/man-technologist_1f468-200d-1f4bb.webp";

export default component$(() => (
  <span class="ml-2 flex items-center self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white md:text-xl">
    {/* <img
      src={logoSrc}
      class="inline-block mr-1"
      width={32}
      height={32}
      alt="Tauqeer Ahmed logo"
      loading="lazy"
    /> */}
    <img
      src={logoTwo}
      class="mr-1 inline-block"
      width={32}
      height={32}
      alt="Tauqeer Ahmed logo"
      loading="lazy"
    />
    Tao-kh-ir
  </span>
));
