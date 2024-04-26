import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig ={
    initialColorMode: 'dark'
};

const theme = extendTheme({
    config,
    colors: {
        orange: {
            50: "#fff6da",
            100: "#ffe4ad",
            200: "#ffd27d",
            300: "#ffc04b",
            400: "#ffae1a",
            500: "#e69500",
            600: "#b37300",
            700: "#815300",
            800: "#4e3200",
            900: "#1e1000"
        }
    },
    styles: {
        global: {
          body: {
            bg: "orange.500" // Set the background color of the entire page to orange 500
          }
        }
    }
})

export default theme;