import { createContext, useContext } from "react";

const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme : () => {},
    lightTheme : () => {}
})

export const ThemeProvider = ThemeContext.Provider;
export { ThemeContext };

export default function useTheme() {
    return useContext(ThemeContext)
}