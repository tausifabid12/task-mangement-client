import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "../Contexts/AuthProvider/AuthProvider";
const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
