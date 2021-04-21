/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

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
  ],
  siteMetadata: {
    url: "https://localhost:8000",
    title: "Csaba Gyorfi",
    author: "Csaba Gyorfi",
    description: "My personal website and blog",
    locale: "en",
    socialLinks: [
      // links displayed in footer
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
      // links display in navbar
      {
        text: "Blog",
        link: "/blog",
      },
      {
        text: "Contact",
        link: "/contact",
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
