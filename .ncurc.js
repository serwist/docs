// @ts-check
/** @type {string[]} */
const excludePackages = [];

/** @type {import("npm-check-updates").RunOptions} */
module.exports = {
  filter(packageName) {
    return !excludePackages.includes(packageName);
  },
  target(dep) {
    if (/^react(-dom)?$/.test(dep) || dep === "vite-plugin-serwist") {
      return "@latest";
    }
    if (dep.includes("serwist")) {
      return "@preview";
    }
    if (dep === "tailwindcss" || dep === "@tailwindcss/vite") {
      return "@next";
    }
    return "latest";
  },
};
