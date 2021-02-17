// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
  },
  plugins: [
    /* ... */
  ],
  packageOptions: {
    env: {
      SNOWPACK_PUBLIC_YOLO: "yolo",
      YOLO: "yolo2"
    }
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
