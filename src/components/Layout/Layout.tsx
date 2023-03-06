import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LayoutProps } from "./Layout.types";

import styles from './Layout.module.scss'

export default function Layout({ children } :LayoutProps) {
  return (
    <>
      <div className={styles.Root}>
        <Navbar />
        <main>{children}</main>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
