import { useContext } from "react";
import { ArticleContext } from "../../context/Articlecontext";
import { formatDate } from "../utils/dateFormater";
import { Divider, SingleLineDashed } from "../common/index";

export default function LatestArticle() {
  const { articles } = useContext(ArticleContext);
  return (
    <>
      <div className="">
        <SingleLineDashed text="Latest Articles" />
        {articles.slice(0, 5).map((article, index) => (
          <div key={index} className="mt-8 mb-6">
            <h3 className="tp-5 mb-2 text-neutral-700">{article.title}</h3>
            <p className="tp-8-italic text-neutral-600">
              {formatDate(article.publishedAt)}
            </p>
          </div>
        ))}
        <div className="my-8">
          <a
            className="tp-6 text-neutral-700 border-b-3 border-blue-500"
            href=""
          >
            View all articles
          </a>
        </div>
        <Divider />
      </div>
    </>
  );
}
