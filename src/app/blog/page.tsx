import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/menu/Menu";

function page() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Style blog</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </main>
  );
}

export default page;
