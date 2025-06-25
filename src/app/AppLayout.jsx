import { AuthContextProvider } from "../components/auth-context/auth-context-provider";
import Cart from "../components/cart/cart";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import { Providers } from "../components/Providers/Providers";
import { ThemeContextProvider } from "../components/theme-context/theme-context-provider";

const AppLayout = ({ children }) => {
  return (
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
  );
};

export default AppLayout;
