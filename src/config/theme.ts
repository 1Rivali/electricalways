// src/theme.ts
import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const theme = extendTheme({
    config,
    colors: {
        brand: {
            50: "#e7edf7",
            100: "#c3d1e8",
            200: "#9eb5d9",
            300: "#7999c9",
            400: "#557dbb",
            500: "#31639e", // Primary color
            600: "#285385", // A darker shade for hover effects
            700: "#1f426c",
            800: "#163253",
            900: "#0d223b",
        },
        secondary: {
            50: "#f7fafe",
            100: "#ebf2fc",
            200: "#d7e6f5", // Secondary color
            300: "#bfd2e8",
            400: "#a8bddc",
            500: "#91a8cf",
            600: "#7992c1",
            700: "#617bb3",
            800: "#4964a5",
            900: "#314e97",
        },
        navbar: {
            light: "#d7e6f5", // Using secondary color
            dark: "#000000", // Navy blueish color for dark theme
        },

        background: {
            light: "#d7e6f5", // Using secondary color
            dark: "#000000", // Navy blueish background for dark theme
        },
        text: {
            light: "#000000",
            dark: "#FFFFFF",
        },

    },
    styles: {
        global: (props: any) => ({
            body: {
                bg: props.colorMode === 'dark' ? 'background.dark' : 'background.light',
                color: props.colorMode === 'dark' ? 'text.dark' : 'text.light',
            },
            '.navbar': {
                bg: props.colorMode === 'dark' ? 'navbar.dark' : 'navbar.light',
                color: props.colorMode === 'dark' ? 'text.dark' : 'text.light',
            },
            a: {
                color: props.colorMode === 'dark' ? 'brand.500' : 'brand.500', // Adjust link color if needed
            },
        }),
    },
    components: {
        Link: {
            baseStyle: {
                _hover: {
                    textDecoration: 'none',
                    color: 'brand.600', // Hover color for links using the darker primary color
                },
            },
        },
        Button: {
            baseStyle: {
                bg: 'brand.500', // Primary color for buttons
                _hover: {
                    bg: 'brand.600', // Darker primary color on hover
                },
            },
        },
    },
});

export default theme;
