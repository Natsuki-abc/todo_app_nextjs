import { Geist } from "next/font/google";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Next.js and Supabase Todo App",
  description: "Next.js and Supabase Todo App to Study",
};

const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
});

/**
 * アプリケーション全体のレイアウトを定義し、子コンテンツを日本語設定のHTML構造でラップします。
 *
 * @param children - レイアウト内に表示するReactノード。
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={geistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
          <main className="min-h-screen flex flex-col items-center">
              <div className="flex flex-col p-5">
                {children}
              </div>
          </main>
      </body>
    </html>
  );
}
