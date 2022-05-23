const isDev = process.env.ELEVENTY_ENV === "devleopment";
const baseUrl = isDev ? `localhost:8080` : `https://rainyday.media/`;
const socialProfile = "edheltzel"

const site = {
  title: "Your site Title",
  description: "Your site descriptoin",
  authorName: "Ed Heltzel",
  social: {
    twitter: socialProfile,
    github: socialProfile,
    facebook: socialProfile,
    instagram: socialProfile,
    linkedin: socialProfile,
  },
  baseUrl,
};

module.exports = site;
