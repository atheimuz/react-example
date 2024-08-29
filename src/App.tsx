import { ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@emotion/react";
import * as theme from "@/styles/theme";
import FunnelPage from "./pages/Funnel";
import FormPage from "./pages/Form";
import ErrorPage from "./pages/Error";

const queryClient = new QueryClient();

const App = (): ReactNode => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/error" element={<ErrorPage />} />
                        <Route path="/funnel/*" element={<FunnelPage />} />
                        <Route path="/form/*" element={<FormPage />} />
                    </Routes>
                </BrowserRouter>
                <ReactQueryDevtools />
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default App;
