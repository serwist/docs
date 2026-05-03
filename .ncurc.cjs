// @ts-check
/** @type {string[]} */
const excludePackages = [];

/** @type {import("npm-check-updates").RunOptions} */
module.exports = {
  filter(packageName) {
    return !excludePackages.includes(packageName);
  },
  target(dep) {
    if (/^react(-dom)?$/.test(dep)) {
      return "@latest";
    }
    if (dep === "tailwindcss" || dep === "@tailwindcss/vite") {
      return "@next";
    }
    return "latest";
  },
};
