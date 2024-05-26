import React, { useState } from "react";
import { Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./global.styles.js";
import ThemeContext from "./contexts/theme.context";
import themeConfig from "./theme-config.styles";
import Header from "./components/header/header.component";
import Homepage from "./pages/homepage/homepage.component";
import Country from "./pages/country/country.component";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Routes } from "react-router-dom/dist/index.js";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000,
        },
    },
});

function App() {
    const [theme, setTheme] = useState(false);
    const value = { theme, setTheme };
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <ThemeContext.Provider value={value}>
                <ThemeProvider theme={themeConfig}>
                    <GlobalStyle darkTheme={theme} />
                    <Header />
                    <Routes>
                        <Route index element={<Homepage />} />
                        <Route
                            path={`/country/:countryDetails`}
                            element={<Country />}
                        />
                    </Routes>
                </ThemeProvider>
            </ThemeContext.Provider>
        </QueryClientProvider>
    );
}

export default App;
