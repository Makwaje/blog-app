import Link from "next/link";
import styles from "./categoryList.module.css";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "force-cache",
  });

  if (!res.ok) throw new Error("Failed fetching categories data");

  return res.json();
}

type CategoryType = {
  id: string;
  slug: string;
  title: string;
  img: string;
};

async function CategoryList() {
  const { categories } = await getData();
  console.log(categories);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categories?.map?.((category: CategoryType) => {
          return (
            <Link
              href={"/blog?cat=style"}
              className={`${styles.category} ${styles[category.slug]}`}
              key={category.id}
            >
              {category.img && (
                <Image
                  src={category.img}
                  alt="category image"
                  width={32}
                  height={32}
                  className={styles.image}
                />
              )}
              {category.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryList;
