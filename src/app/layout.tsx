import Sidebar from "../components/Sidebar/Sidebar";
import TopBar from "../components/TopBar/TopBar";
import Counter from "../components/Counter/Counter";
import styles from "../Layout.module.css";
import "./globals.css";

export const metadata = {
  title: "My Next.js App",
  description: "An example app using App Router with TypeScript",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <TopBar />
          <Counter />
          <div className={styles.mainContent}>
            <Sidebar />
            <div className={styles.content}>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
