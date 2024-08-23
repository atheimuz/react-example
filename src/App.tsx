import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import * as theme from "@/styles/theme";

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes></Routes>
                </BrowserRouter>
                <ReactQueryDevtools />
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
