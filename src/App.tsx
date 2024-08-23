import { ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ThemeProvider } from "@emotion/react";
import * as theme from "@/styles/theme";
import FunnelPage from "./components/FunnelPage";

const queryClient = new QueryClient();

const App = (): ReactNode => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route path="/funnel/*" element={<FunnelPage />} />
                    </Routes>
                </BrowserRouter>
                <ReactQueryDevtools />
            </ThemeProvider>
        </QueryClientProvider>
    );
};

export default App;
