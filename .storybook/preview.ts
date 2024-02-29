import type { Preview } from "@storybook/react";
import 'tailwindcss/tailwind.css'
import i18n from '../src/i18next'

i18n.on("languageChanged", (locale) => {
  let direction = i18n.dir(locale)
  document.dir= direction;
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    actions: { argTypesRegex: '^on.*' },
  },
};

export default preview;
