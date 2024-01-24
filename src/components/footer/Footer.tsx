import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="makwaje logo" width={50} height={50} />
          <h2 className={styles.logoText}>Makwaje blog</h2>
        </div>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
          magnam velit, fugiat fuga quaerat molestiae nesciunt dolores. Ducimus
          minus dolore ad. Soluta reprehenderit omnis quos et ullam quae
          voluptatem nobis?
        </p>
        <div className={styles.icons}>
          <Image
            src="/facebook.png"
            alt="facebook logo"
            width={18}
            height={18}
          />
          <Image
            src="/instagram.png"
            alt="instagram logo"
            width={18}
            height={18}
          />
          <Image src="/tiktok.png" alt="tiktok logo" width={18} height={18} />
          <Image src="/youtube.png" alt="youtube logo" width={18} height={18} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
          <Link href="/">TikTok</Link>
          <Link href="/">YouTube</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
