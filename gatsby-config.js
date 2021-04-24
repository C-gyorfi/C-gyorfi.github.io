module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-simple-blog",
      options: {
        basePath: "/blog",
        tagsPath: "/tags",
        contentPath: "", // content url for posts"/content/posts"
        assetPath: "", //  assets url "/content/assets"
      },
    },
    `gatsby-plugin-sass`,
  ],
  siteMetadata: {
    url: "https://localhost:8000",
    title: "Csaba Gyõrfi",
    author: "Csaba Gyõrfi",
    description: "My personal website and blog",
    aboutMe: [
      "Hi, my name is Csaba Gyõrfi",
      "I'm a software engineer 👨‍💻",
      "I like lemon tea 🍵",
    ],
    locale: "en",
    socialLinks: [
      {
        text: "Twitter",
        link: "https://twitter.com/c_gyorfi_audio",
      },
      {
        text: "GitHub",
        link: "https://github.com/C-gyorfi",
      },
      {
        text: "LinkedIn",
        link: "https://www.linkedin.com/",
      },
    ],
    navLinks: [
      {
        text: "Blog",
        link: "/blog",
      },
      {
        text: "About",
        link: "/",
      },
    ],
    themeConfig: {
      themeSwitcher: true, // enable theme switcher
      showNavLinks: true, // show links from navLinks array in navbar
      loadMorePosts: false, // enable load more posts
      postsPerPage: 10, // posts to display per page
      postsIncrementBy: 5, // posts increment value
    },
  },
}
