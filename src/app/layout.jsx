import { AuthContextProvider } from "../components/auth-context/auth-context-provider";
import Cart from "../components/cart/cart";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import { Providers } from "../components/Providers/Providers";
import { ThemeContextProvider } from "../components/theme-context/theme-context-provider";

export const metadata = {
  title: "Food-Delivery Service",
  description: "Restaurants delivery service",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      </head>
      <body>
        <Providers>
          <ThemeContextProvider>
            <AuthContextProvider>
              <ProgressBar />
              <Header />
              {children}
              <Cart />
              <Footer />
            </AuthContextProvider>
          </ThemeContextProvider>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
