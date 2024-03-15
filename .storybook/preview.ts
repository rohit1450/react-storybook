import type { Preview } from "@storybook/react";
import "tailwindcss/tailwind.css";
import i18n from "../src/i18next";
import "../src/index.css";
// import { Renderer } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-themes";

i18n.on("languageChanged", (locale) => {
  let direction = i18n.dir(locale);
  document.dir = direction;
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: "^on.*" },
  },
  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
};

export default preview;
