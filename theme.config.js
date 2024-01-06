// theme.config.jsx

const YEAR = new Date().getFullYear();

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  footer: (
    <div className="my-24  border-t-2  mx-auto flex items-center sm:flex-row flex-col">
      <p className="text-sm text-gray-500">
        <time>{YEAR}</time> © By Abbassi Zied -
        <a
          href="mailto:abbassizied@outlook.fr"
          className="text-gray-600"
          rel="noopener noreferrer"
        >
          @abbassizied
        </a>
      </p>
    </div>
  ),
  navs: [
    {
      url: "/feed.xml",
      name: "RSS",
    },
    {
      url: "https://github.com/abbassizied/abbassizied.github.io",
      name: "Github",
    },
  ],
  readMore: "Read More →",
  darkMode: true,
};
