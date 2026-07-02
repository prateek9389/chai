import "./globals.css";

export const metadata = {
  title: "Pizza. — A Slice of Perfection",
  description: "Hyperlocal wood-fired pizza, made fresh and delivered hot.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
