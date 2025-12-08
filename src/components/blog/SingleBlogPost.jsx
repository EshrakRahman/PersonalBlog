import React from "react";
import articles from "../../../data.json";
import { ArticleRenderer } from "../common";

export default function BlogPost() {
  const article = articles[2];

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
