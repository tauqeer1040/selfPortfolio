import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import IconTwitter from "~/components/icons/IconTwitter";
// import IconInstagram from "~/components/icons/IconInstagram";
import IconGithub from "../icons/IconGithub";

export default component$(() => {
  // const links = [
  //   {
  //     title: "Product",
  //     items: [
  //       { title: "Features", href: "#" },
  //       { title: "Security", href: "#" },
  //       { title: "Team", href: "#" },
  //       { title: "Enterprise", href: "#" },
  //       { title: "Customer stories", href: "#" },
  //       { title: "Pricing", href: "#" },
  //       { title: "Resources", href: "#" },
  //     ],
  //   },
  //   {
  //     title: "Platform",
  //     items: [
  //       { title: "Developer API", href: "#" },
  //       { title: "Partners", href: "#" },
  //       { title: "Atom", href: "#" },
  //       { title: "Electron", href: "#" },
  //       { title: "Qwind Desktop", href: "#" },
  //     ],
  //   },
  //   {
  //     title: "Support",
  //     items: [
  //       { title: "Docs", href: "#" },
  //       { title: "Community Forum", href: "#" },
  //       { title: "Professional Services", href: "#" },
  //       { title: "Skills", href: "#" },
  //       { title: "Status", href: "#" },
  //     ],
  //   },
  //   {
  //     title: "Company",
  //     items: [
  //       { title: "About", href: "#" },
  //       { title: "Blog", href: "#" },
  //       { title: "Careers", href: "#" },
  //       { title: "Press", href: "#" },
  //       { title: "Inclusion", href: "#" },
  //       { title: "Social Impact", href: "#" },
  //       { title: "Shop", href: "#" },
  //     ],
  //   },
  // ];

  const social = [
    { label: "Twitter", icon: IconTwitter, href: "https://x.com/KatKawPose" },
    // { label: "Instagram", icon: IconInstagram, href: "https://www.instagram.com/Tauqeer Ahmed_/" },
    // { label: "Facebook", icon: IconFacebook, href: "#" },
    {
      label: "Github",
      icon: IconGithub,
      href: "https://github.com/tauqeer1040",
    },
  ];

  return (
    <footer class="border-t border-gray-200 dark:border-slate-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6">
        <div class="grid grid-cols-12 gap-4 gap-y-8 py-8 sm:gap-8 md:py-12">
          <div class="col-span-12 pr-8 lg:col-span-4"></div>
        </div>
        <div class="py-6 md:flex md:items-center md:justify-between md:py-8">
          <ul class="-ml-2 mb-4 flex md:order-1 md:mb-0 md:ml-4">
            {social.map(({ label, href, icon: Icon }, index) => (
              <li key={index}>
                <Link
                  class="inline-flex items-center rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  aria-label={label}
                  title={label}
                  href={href}
                >
                  {typeof Icon !== "undefined" && <Icon />}
                </Link>
              </li>
            ))}
          </ul>

          <div class="mr-4 text-sm text-gray-700 dark:text-slate-400">
            ©{" "}
            <span class="text-secondary-800 underline dark:text-gray-200">
              Tauqeer Ahmed
            </span>
            · All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
});
