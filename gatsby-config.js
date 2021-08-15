module.exports = {
    plugins: [
      "gatsby-plugin-typescript",
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: `4t43haqyv77h`,
          accessToken: `G1d-Wr0jL4ERKs12ZWcrHOh-MYJC837OCkIwFZMGHBs`,
        },
      },
    ],
  };