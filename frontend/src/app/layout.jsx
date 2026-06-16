import "@/index.css";
import AppProvider from "@/components/providers/AppProvider";

export const metadata = {
  title: "Thunder Chat",
  description:
    "Real-time messaging application built with Next.js, Node.js, MongoDB, and Socket.io.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}