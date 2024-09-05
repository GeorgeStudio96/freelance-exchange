import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "src/app/components/Navigation/Header";
import "@/styles/global.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freelance Exchange",
  description: "The best nextjs freelance exchange",
  openGraph: {
    images: [
      "https://images.unsplash.com/photo-1639815188498-e23242c9c796?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <div className="global-padding">
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
