import "@styles/globals.css";
import StoreProvider from "./store/StoreProvider";
export const metadata = {
  title: "Proposal Manager",
  description: "Created by Soft Enterprise",
};
export default function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <div className="main">
            <div className="gradient bg-white" />
          </div>
          <main className="app">{children}</main>
        </body>
      </html>
    </StoreProvider>
  );
}
