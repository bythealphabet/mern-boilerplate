import { addDecorator } from "@storybook/react";
import EmotionThemeProvider from "./decorator";
import { MemoryRouter } from "react-router-dom";

addDecorator((story) => (
  <MemoryRouter initialEntries={["/"]}>{story()}</MemoryRouter>
));
addDecorator(EmotionThemeProvider);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
