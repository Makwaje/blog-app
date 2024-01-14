"use client";
import ArticlePage from "@/components/Pages/Dashboard/blogPage/ArticlePage";
import BlogPage from "@/components/Pages/Dashboard/blogPage/BlogPage";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useRouter } from "next/navigation";

function Article({ params }: { params?: Params }) {
  const router = useRouter();
  // if there is no id just navigate to /app/blog
  if (params?.id) return <ArticlePage params={params} />;
  else {
    router.push("/app/blog");
  }
}

export default Article;
