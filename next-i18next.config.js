// next-i18next.config.js
module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "vi"], // add more languages here
  },
  reloadOnPrerender: process.env.NODE_ENV === "development", // auto reload in dev
};
