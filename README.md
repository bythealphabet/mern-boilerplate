# mern-boilerplate

---

## Main Goal of this Project

This boilerplate project was built with **MERN STACK**.
The main goal is to have a basic template to work on with user authentication.
Ready to start other bigger projects.

### Main packages

REACT, NODE, EXPRESS and, MongoDB.

### Packages

Webpack 5, Emotion storybook react-router-dom

---

---

### Oct 21.

- started the project.
- added basic folders and files.
- added storybook

#### Storybook setup

    npx sb init
    yarn storybook

---

##### problems adding emotionjs with storybook.

In order to add Emotion to the project and make it work correctly with Storybook,
we need to modify the Storybook Webpack configuration by adding a webpackFinal Method to the object that is being returned by the main.js file in the .storybook folder.

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

after making these configurations we can add the decorator to the .storybook/preview.js

    +   import { addDecorator } from "@storybook/react";
    +   import EmotionThemeProvider from "./decorator";

    +   addDecorator(EmotionThemeProvider);

    // rest of file....

Now I have to add react-router-dom to Storybook, by adding a decorator with the MemoryROuter from react-router-dom, into the .storybook/preview.js file.

    import { MemoryRouter } from "react-router";

        addDecorator(story => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);

---

---

#### Header component

For this project, we will build a very simple Header component.
The Header component has 3 main components.
Menu, Hamburger, Logo

This can be previewed using Storybook.

The logo Components is just a placeholder for now,
The Hamburger button has animations.
The menu is set as a column with different font sizes, colors, and background colors for the mobile view.

---

---

### Oct 23.

- Signup Page
- Server Signup logic
- Confirmation Page
- Sign in Page
- Server Sign in logic
- Signout client and server Logic

---

In order to maintain users' authentication state, Im using Context to pass the current user authentication to the Header Component, to the Sign in and Signup Components, and to the Future Private Component.

The authentication data is saved in the browser cookie and in the browser's local storage.
the auth-helpers file. has the methods to add the data to the local storage and cookies and also to get the data, and delete the data when the user signs out of the app.

---

They in order to create an account you will have to verify your email. this is done with Sendgrid api.
in order to make this functionality work you have to make a .env file with the SendGrid key

    SENDGRID_API_KEY=<Key>

---

---

### Oct 24

- User Avatar
- User Profile read page
- User Profile update page
- User Delete Profile logic

Finished with this part of the project.

---

---

### Oct 25

Boiler plate is Completed, I will be updating and refactoring code from this boilerplate project.
