import { useContext } from "react";

import { ArticleContext } from "../../context/Articlecontext";
import { formatDate } from "../utils/dateFormater";
import { Divider, SingleLineDashed } from "../common";

export default function MyArticlesContent() {
  const { articles } = useContext(ArticleContext);

  return (
    <>
      <div className="heading">
        <SingleLineDashed text="My Articles" />
        <p className="tp-7 text-neutral-600 pb-6">
          Below are all my recent blog posts. Click on any title to read the
          full article.
        </p>
      </div>
      <div className="">
        {articles.map((article, index) => (
          <div key={index} className="mt-8 mb-6">
            <h3 className="tp-5 mb-1 text-neutral-700">{article.title}</h3>
            <p className="tp-8-italic text-neutral-600">
              {formatDate(article.publishedAt)}
            </p>
            <p className="tp-7 my-3 text-neutral-600">{article.description}</p>
            <Divider />
          </div>
        ))}
      </div>
    </>
  );
}
