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

##### problems adding emotionjs with storybook.

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

Now I have to add react-router-dom to storybook, by adding a decorator with the MemoryROuter from react-router-dom, into the .storybook/preview.js file.

    import { MemoryRouter } from "react-router";

        addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

---

---

#### Header component

For this Project we will build a very simple Header components.
The Header component has 3 main components.
Menu, Hamburger, Logo

This can be previewed using storybook.

The logo Components is just a placehoder for now,
The Hamburger button has animations.
Menu is set as a column with a different font-size, color and background-color for the mobile view.

---

---

### Oct 21.

- Signup Page
- Server Signup logic
- Confirmation Page
- Signin Page
- Server Signin logic

---

In order to maintain users authentication state, Im using Context to pass they current user authentication to the Header Component, to the Signin and Signup Components, and to the Future Private Component.
