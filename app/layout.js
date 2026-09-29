import "./globals.css";

export const metadata = {
  title: {
    default: "Danderhall Miners Football Club",
    template: "%s | Danderhall Miners FC",
  },
  description:
    "Danderhall Miners Football Club - a community football club providing opportunities for players, coaches, volunteers and the wider Danderhall community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
