# mern-boilerplate

---

## Main Goal of this Project

This is a boilerplate project build with **MERN STACK**.
The main goal is to have a basic template to work on with user authentication and, state handeling with Redux.
Ready to start other bigger projects.

### Main packages

REACT, NODE, EXPRESS, and, MongoDB.

### Packages

WEBPACK 5, Redux toolkit, Emotion storybook react-router-dom

---

### Oct 21.

- started project.
- added basic folders and files.
- added storybook

#### Storybook setup

    npx sb init
    yarn storybook

---

In order to add Emotion to the project and make it work corectly with Storybook
we need to modify the Storybook Webpack configuration by adding a webpackFinal Method to the object that is being return by the main.js file in the.storybook folder.

    -    module.exports = {
    -    stories: [
    -       "../stories/**/*.stories.mdx",
    -       "../stories/**/*.stories.@(js|jsx|ts|tsx)",
    -  ],
    -    addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
    +    webpackFinal: async (config, { configType }) => {
    +        config.module.rules[0].use[0].options.presets = [
    +        require.resolve("@babel/preset-react"),
    +        require.resolve("@babel/preset-env"),
    +        require.resolve("@emotion/babel-preset-css-prop"),
    +        ];

    +            return config;
    +    },
        };

ThemeProvider to work with Storybook we need to add a decorators.js file to
the .storybook folder. with the following code.

    import React from "react";
    import { jsx, css, ThemeProvider } from "@emotion/react";
    import { theme, GlobalStyles } from "../client/styles";


    const EmotionThemeProvider = (storyFn) => (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                    {storyFn()}
            </ThemeProvider>
        </>
    );

    export default EmotionThemeProvider;

after making thes to configurations we can add the decorator to the .storybook/preview.js

    +   import { addDecorator } from "@storybook/react";
    +   import EmotionThemeProvider from "./decorator";

    +   addDecorator(EmotionThemeProvider);

    // rest of file....
