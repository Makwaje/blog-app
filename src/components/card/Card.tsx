import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

function Card() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="post picture" fill className={styles.img} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>21/9/2007 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            earum.
          </h2>
        </Link>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
          explicabo suscipit laborum pariatur voluptatem ullam hic perferendis
          quidem cupiditate, harum expedita eaque ratione minima maxime libero.
          Similique esse a quae.
        </p>
        <Link className={styles.link} href="/">
          Read More
        </Link>
      </div>
    </div>
  );
}

export default Card;
