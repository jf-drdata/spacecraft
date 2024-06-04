module.exports = {
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
  expo: {
    owner: "jfswain",
    name: "spacecraft",
    slug: "spacecraft",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.test.spacecraft",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.test.spacecraft",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "8787d4b7-2699-447c-b073-4b190ed51e0b",
      },
    },
  },
};
