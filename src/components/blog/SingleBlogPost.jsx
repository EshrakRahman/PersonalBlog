import { useParams } from "react-router";
import { useContext } from "react";
import { ArticleRenderer } from "../common";
import { ArticleContext } from "../../context/Articlecontext";

export default function BlogPost() {
  const { slug } = useParams();
  const { articles } = useContext(ArticleContext);

  const article = articles.find((a) => a.slug === slug);

  if (!article) return <p>Article not found</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>

      <p className="text-sm text-neutral-500 mb-6">
        Published{" "}
        {new Date(article.publishedAt).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      <ArticleRenderer content={article.content} />
    </div>
  );
}
