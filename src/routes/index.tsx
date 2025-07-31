import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
import Steps from "~/components/widgets/Steps";
import FAQs from "~/components/widgets/FAQs";
import Stats from "~/components/widgets/Stats";
import CallToAction from "~/components/widgets/CallToAction";

// const manualList = [
//   { name: "Start Here: Bigger Leaner Stronger for Indian Lifters",url:"/blog/blsIndia/", },
//   { name: "Gym Looks Scary? It’s Actually Super Friendly for Newbies", url: "/blog/nojudging/", },
//   { name: "This High-Protein Sandwich Tastes Like Dessert But Builds Muscle (Desi-Style)", url: "/blog/peanutbutterbananasandwich/", },
//   { name: "Do Your Parents Think Protein Powder = Steroids?", url: "/blog/parents/",  },
//   // { name: "The Importance of Sleep and Recovery", url: "/blog/sleepRecovery/", excerpt: "Why sleep and recovery are crucial for progress." },
// ];

const projectList = [
  {
    name: "Desilifter.pro – Fitness Blog Built for Speed",
    url: "http://desilifter.pro",
  },
  {
    name: "Fresno Art Museum Web App",
    url: "http://fam-redesign.netlify.app/",
  },
  {
    name: "MauJo: Cross-Platform Cafe & Hostel App",
    url: "https://maujo.netlify.app/",
  },
  {
    name: "Fontella Cosmetics – Shopify Site Optimized for Conversions",
    url: "https://fontellacosmetics.com/",
  },
  {
    name: "GitHub: 500+ Commits, 40+ Repos, & Projects on Numerous Tech Stacks",
    url: "https://github.com/tauqeer1040",
  },
];

{
  /* <Suggestions links={manualList} /> */
}

import { Suggestions } from "~/components/widgets/Suggestions";

import { qwikSerialized } from "~/utils/qwikSerialized";

const IconBrandTailwind = qwikSerialized(
  () => import("../components/icons/IconBrandTailwind"),
);
const IconApps = qwikSerialized(() => import("../components/icons/IconApps"));
const IconRocket = qwikSerialized(
  () => import("../components/icons/IconRocket"),
);
// const IconBrandGoogle = qwikSerialized(() => import("../components/icons/IconBrandGoogle"));
// const IconBulb = qwikSerialized(() => import("../components/icons/IconBulb"));

import { SITE } from "~/config.mjs";
// import { Suggestions } from "~/components/widgets/Suggestions";

export default component$(() => {
  return (
    <div class="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8 lg:py-20">
      <Hero />
      {/* <Features
        highlight="Why?"
        title="The Value You Get"
        subtitle=""
        items={[
          {
            title: "India-Specific Natural Bodybuilding Advice",
            description:
              "Tips tailored for Indian diets (dal, roti, rice, paneer) and affordable supplements.",
            icon: IconBrandTailwind,
          },
          {
            title: "Quick Daily Tips for Busy People",
            description:
              "Short, practical reminders that take under 2 minutes to read. Perfect for working professionals or students who want results without wasting time.",
            icon: IconApps,
          },
          {
            title: "Proven 3-2-1 Training Method",
            description:
              "Based on time-tested strength training (3 heavy, 2 moderate, 1 pump).Backed by science and the “Bigger Leaner Stronger” approach, adapted for Indian bodies.",
          },
          {
            title: "Realistic, Sustainable Progress",
            description:
              "No “get shredded in 30 days” nonsense — just real, trackable gains. Weekly updates, notes, and motivation to help you stay on track.",
            icon: IconRocket,
          },
          // {
          //   title: "Search Engine Optimization (SEO)",
          //   description:
          //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
          //   icon: IconBrandGoogle,
          // },
          // {
          //   title: "Open to new ideas and contributions",
          //   description:
          //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
          //   icon: IconBulb
          // },
        ]}
      /> */}
      <Features
        highlight="Why Me?"
        title="What I Bring to the Table"
        subtitle="You’re not just hiring a dev, you're bringing on a growth engine."
        items={[
          {
            title: "Battle-Tested Full-Stack Experience",
            description:
              "From React frontends to MongoDB backends, I’ve delivered scalable solutions for U.S. startups and Indian SMBs alike. Fast, clean, and maintainable.",
            icon: IconApps,
          },
          {
            title: "UI/UX That Converts",
            description:
              "Design isn't just about looks — it's about flow. I build interfaces users love and businesses profit from. Speed indices and conversion-focused layouts guaranteed.",
            icon: IconRocket,
          },
          {
            title: "Cross-Platform & API-Driven",
            description:
              "Whether it's Google Maps integrations, Twitch extensions, or REST/GraphQL APIs — I wire up the modern web like a pro.",
            icon: IconBrandTailwind,
          },
          {
            title: "SEO, Speed, and Scalability",
            description:
              "Sites I build load fast, rank well, and scale gracefully. Ask my clients — they’ve made over $50K with the sites I delivered.",
          },
        ]}
      />

      <FAQs
        title="Recruiter FAQs"
        subtitle=""
        highlight="FAQs"
        items={[
          {
            title: "🧑‍💻 What’s your tech stack?",
            description:
              "Mainly MERN (MongoDB, Express, React, Node.js), plus Tailwind, TypeScript, GraphQL, Flutter, Firebase, Docker, and more. I adapt to what the project needs.",
          },
          {
            title: "🌍 Do you work remotely?",
            description:
              "Yes! I’ve worked with teams in Los Angeles, Europe, and India. Comfortable with async workflows, SCRUM, and timezone overlap.",
          },
          {
            title: "⚙️ Do you build full-stack apps solo?",
            description:
              "Absolutely. From the backend architecture to the frontend design and deployment — I’ve delivered dozens of full-stack apps end to end.",
          },
          {
            title: "🚀 Can you optimize existing sites?",
            description:
              "Yes. I improve load times, SEO, mobile responsiveness, and UI polish. Many clients saw direct sales and engagement boosts post-optimization.",
          },
          {
            title: "🎓 Are you open to collaboration?",
            description:
              "100%. Whether it’s contract work, startup gigs, or open-source collabs — I’m all ears. Let’s build something amazing.",
          },
        ]}
      />

      <Stats />
      <Suggestions links={projectList} title="My Portfolio" highlight="Work" />
      <Steps />

      <CallToAction />
    </div>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
