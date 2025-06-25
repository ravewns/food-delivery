import AppLayout from "./AppLayout";

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
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
};

export default RootLayout;
