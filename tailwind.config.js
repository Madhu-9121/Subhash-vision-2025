import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    heroui({
      layout: {
        dividerWeight: "1px", 
        disabledOpacity: 0.45, 
        fontSize: {
          tiny: "0.75rem",   // 12px
          small: "0.875rem", // 14px
          medium: "0.9375rem", // 15px
          large: "1.125rem", // 18px
        },
        lineHeight: {
          tiny: "1rem", 
          small: "1.25rem", 
          medium: "1.5rem", 
          large: "1.75rem", 
        },
        radius: {
          small: "8px", 
          medium: "12px", 
          large: "16px", 
        },
        borderWidth: {
          small: "1px", 
          medium: "1px", 
          large: "2px", 
        },
      },
      themes: {
        light: {
          colors: {
            background: {
              DEFAULT: "#FFFFFF"
            },
            content1: {
              DEFAULT: "#FFFFFF",
              foreground: "#11181C"
            },
            content2: {
              DEFAULT: "#f4f4f5",
              foreground: "#27272a"
            },
            content3: {
              DEFAULT: "#e4e4e7",
              foreground: "#3f3f46"
            },
            content4: {
              DEFAULT: "#d4d4d8",
              foreground: "#52525b"
            },
            divider: {
              DEFAULT: "rgba(17, 17, 17, 0.15)"
            },
            focus: {
              DEFAULT: "#FF5722"
            },
            foreground: {
              50: "#fafafa",
              100: "#f4f4f5",
              200: "#e4e4e7",
              300: "#d4d4d8",
              400: "#a1a1aa",
              500: "#71717a",
              600: "#52525b",
              700: "#3f3f46",
              800: "#27272a",
              900: "#18181b",
              DEFAULT: "#11181C"
            },
            overlay: {
              DEFAULT: "#000000"
            },
            danger: {
              50: "#fee7ef",
              100: "#fdd0df",
              200: "#faa0bf",
              300: "#f871a0",
              400: "#f54180",
              500: "#f31260",
              600: "#c20e4d",
              700: "#920b3a",
              800: "#610726",
              900: "#310413",
              DEFAULT: "#f31260",
              foreground: "#ffffff"
            },
            default: {
              50: "#fafafa",
              100: "#f4f4f5",
              200: "#e4e4e7",
              300: "#d4d4d8",
              400: "#a1a1aa",
              500: "#71717a",
              600: "#52525b",
              700: "#3f3f46",
              800: "#27272a",
              900: "#18181b",
              DEFAULT: "#d4d4d8",
              foreground: "#000"
            },
            primary: {
              50: "#FFF3E0",
              100: "#FFE0B2",
              200: "#FFCC80",
              300: "#FFB74D",
              400: "#FFA726",
              500: "#FF9800",
              600: "#FB8C00",
              700: "#F57C00",
              800: "#EF6C00",
              900: "#E65100",
              DEFAULT: "#FF9800",
              foreground: "#000"
            },
            secondary: {
              50: "#E3F2FD",
              100: "#BBDEFB",
              200: "#90CAF9",
              300: "#64B5F6",
              400: "#42A5F5",
              500: "#2196F3",
              600: "#1E88E5",
              700: "#1976D2",
              800: "#1565C0",
              900: "#0D47A1",
              DEFAULT: "#2196F3",
              foreground: "#fff"
            },
            success: {
              50: "#E8F5E9",
              100: "#C8E6C9",
              200: "#A5D6A7",
              300: "#81C784",
              400: "#66BB6A",
              500: "#4CAF50",
              600: "#43A047",
              700: "#388E3C",
              800: "#2E7D32",
              900: "#1B5E20",
              DEFAULT: "#4CAF50",
              foreground: "#000"
            },
            warning: {
              50: "#FFF8E1",
              100: "#FFECB3",
              200: "#FFE082",
              300: "#FFD54F",
              400: "#FFCA28",
              500: "#FFC107",
              600: "#FFB300",
              700: "#FFA000",
              800: "#FF8F00",
              900: "#FF6F00",
              DEFAULT: "#FFC107",
              foreground: "#000"
            }
          }
        },
        dark: {
          colors: {
            background: {
              DEFAULT: "#121212"
            },
            content1: {
              DEFAULT: "#1E1E1E",
              foreground: "#ECEDEE"
            },
            content2: {
              DEFAULT: "#2D2D2D",
              foreground: "#ECEDEE"
            },
            content3: {
              DEFAULT: "#3F3F46",
              foreground: "#ECEDEE"
            },
            content4: {
              DEFAULT: "#52525B",
              foreground: "#ECEDEE"
            },
            divider: {
              DEFAULT: "rgba(255, 255, 255, 0.15)"
            },
            focus: {
              DEFAULT: "#FF5722"
            },
            foreground: {
              50: "#18181B",
              100: "#27272A",
              200: "#3F3F46",
              300: "#52525B",
              400: "#71717A",
              500: "#A1A1AA",
              600: "#D4D4D8",
              700: "#E4E4E7",
              800: "#F4F4F5",
              900: "#FAFAFA",
              DEFAULT: "#ECEDEE"
            },
            overlay: {
              DEFAULT: "#000000"
            },
            danger: {
              50: "#310413",
              100: "#610726",
              200: "#920B3A",
              300: "#C20E4D",
              400: "#F31260",
              500: "#F54180",
              600: "#F871A0",
              700: "#FAA0BF",
              800: "#FDD0DF",
              900: "#FEE7EF",
              DEFAULT: "#F31260",
              foreground: "#FFFFFF"
            },
            default: {
              50: "#18181B",
              100: "#27272A",
              200: "#3F3F46",
              300: "#52525B",
              400: "#71717A",
              500: "#A1A1AA",
              600: "#D4D4D8",
              700: "#E4E4E7",
              800: "#F4F4F5",
              900: "#FAFAFA",
              DEFAULT: "#3F3F46",
              foreground: "#FFFFFF"
            },
            primary: {
              50: "#E65100",
              100: "#EF6C00",
              200: "#F57C00",
              300: "#FB8C00",
              400: "#FF9800",
              500: "#FFA726",
              600: "#FFB74D",
              700: "#FFCC80",
              800: "#FFE0B2",
              900: "#FFF3E0",
              DEFAULT: "#FF9800",
              foreground: "#000000"
            },
            secondary: {
              50: "#0D47A1",
              100: "#1565C0",
              200: "#1976D2",
              300: "#1E88E5",
              400: "#2196F3",
              500: "#42A5F5",
              600: "#64B5F6",
              700: "#90CAF9",
              800: "#BBDEFB",
              900: "#E3F2FD",
              DEFAULT: "#2196F3",
              foreground: "#FFFFFF"
            },
            success: {
              50: "#1B5E20",
              100: "#2E7D32",
              200: "#388E3C",
              300: "#43A047",
              400: "#4CAF50",
              500: "#66BB6A",
              600: "#81C784",
              700: "#A5D6A7",
              800: "#C8E6C9",
              900: "#E8F5E9",
              DEFAULT: "#4CAF50",
              foreground: "#000000"
            },
            warning: {
              50: "#FF6F00",
              100: "#FF8F00",
              200: "#FFA000",
              300: "#FFB300",
              400: "#FFC107",
              500: "#FFCA28",
              600: "#FFD54F",
              700: "#FFE082",
              800: "#FFECB3",
              900: "#FFF8E1",
              DEFAULT: "#FFC107",
              foreground: "#000000"
            }
          }
        }
      }
    })
  ]
}
