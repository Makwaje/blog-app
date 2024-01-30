import CardList from "@/components/cardList/CardList";
import styles from "./blogPage.module.css";
import Menu from "@/components/menu/Menu";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

function BlogPage({ searchParams }: { searchParams: Params }) {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams || "";

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{cat} blog</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </main>
  );
}

export default BlogPage;
