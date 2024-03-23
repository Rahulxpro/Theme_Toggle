Theme Toggler React
Easy
Given Structure and Required Functionality:
You are given two components:
ThemeProvider.It is a parent component that wraps its children with the ThemeContext.Provider. It manages the current theme state and provides the toggleTheme function to its children.
Inside ThemeProvider, add a state which stores the current theme.
You can Create a function toggleTheme which toggles the state theme between light and dark.
The body's className should have dark-theme when the theme is dark and light-theme when the theme is light
ThemeButton. It is a child component that consumes the theme and toggleTheme function from the ThemeContext using useContext(ThemeContext).
It renders a button with a dynamic class name based on the current theme. Clicking the button calls the function which toggles the theme.
This button should have class: theme-button and class: dark or light depending on the theme in ThemeProvider
Hints:
You can use useContext inside ThemeButton
You can return the context from ThemeProvider in the following manner.
return (

        

            {children}

        

    );
You can also use useEffect to change the className of body when statetheme changes.
Test Cases
1.
should render the app correctly
2.
should initially have light theme styles
3.
should toggle to dark theme when the button is clicked
4.
should toggle back to light theme when the button is clicked twice
