import Image from "next/image";
import styles from "./featured.module.css";

function Featured() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <strong>Hey, Makwaje here!</strong>, discover my stories and creative
        ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image
            src="/p1.jpeg"
            alt="header"
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className={styles.postDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            deserunt ab eaque omnis labore illum molestiae debitis soluta
            recusandae numquam, nemo blanditiis, eius iusto voluptates. Vel
            dicta neque dolorem sed?
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
}

export default Featured;
