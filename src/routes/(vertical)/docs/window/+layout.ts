import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = () => ({
  sidebar: [
    {
      title: "Introduction",
      children: [
        {
          title: "Overview",
          href: "/docs/window",
        },
      ],
    },
    {
      title: "Functions",
      children: [
        { title: "messageSW", href: "/docs/window/message-sw" },
        { title: "Serwist", href: "/docs/window/serwist" },
      ],
    },
  ],
});
