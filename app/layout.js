import "./globals.css";

export const metadata = {
  title: "Planetfall",
  description: "Explore planets in hopes of a better future",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
