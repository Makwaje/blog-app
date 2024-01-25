import Menu from "@/components/menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

function SinglePage() {
  return (
    <main className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="post" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Makwaje Mh</span>
              <span className={styles.date}>24/12/2022</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="post" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desc}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              deserunt ut nisi excepturi facilis hic unde ex dolorem obcaecati.
              Quibusdam voluptate veniam aliquam accusantium beatae dolores
              cupiditate! Impedit, omnis corrupti.
            </p>
            <h5>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
              dolor ipsam perspiciatis fugiat nihil? Officia ab ullam
              consectetur dolores nisi, asperiores voluptatibus ad nobis
              adipisci debitis eligendi cumque maxime accusantium.
            </h5>
            <p>HEADER</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              deserunt ut nisi excepturi facilis hic unde ex dolorem obcaecati.
              Quibusdam voluptate veniam aliquam accusantium beatae dolores
              cupiditate! Impedit, omnis corrupti.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </main>
  );
}

export default SinglePage;
