const isDev = process.env.ELEVENTY_ENV === "development";
const baseUrl = isDev ? `localhost:8080` : `https://rainyday.media`;
const socialProfile = "edheltzel";

const site = {
  baseUrl,
  title: "The Flightdeck Foundation",
  description: "Your site descriptoin",
  authorName: "Ed Heltzel",
  social: [
    { name: "Twitter", profile: socialProfile },
    { name: "Github", profile: socialProfile },
    { name: "Facebook", profile: socialProfile },
    { name: "LinkedIn", profile: socialProfile },
    { name: "Instagram", profile: socialProfile },
  ],
};

module.exports = site;
