import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import AuthLink from "../authLinks/AuthLink";
import ThemeToggle from "../themeToggle/ThemeToggle";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src="/facebook.png" width={24} height={24} alt="facebook" />
        <Image src="/instagram.png" width={24} height={24} alt="instagram" />
        <Image src="/tiktok.png" width={24} height={24} alt="tiktok" />
        <Image src="/youtube.png" width={24} height={24} alt="youtube" />
      </div>
      <div className={styles.logo}>MakwajeBlog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link className={styles.link} href="/">
          Homepage
        </Link>
        <Link className={styles.link} href="/">
          contact
        </Link>
        <Link className={styles.link} href="/">
          about
        </Link>
        <AuthLink />
      </div>
    </div>
  );
}

export default Navbar;
