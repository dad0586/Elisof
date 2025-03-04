import { useTranslations } from "next-intl";
import NewsCard from "./news-card";
import "./news.scss"

const NewsPage = () => {
  const t = useTranslations("News");

  return (
    <>
      <section>
        <div id="news">
          <div className="myContainer">
            <h3 className="news-cards-title"> {t("title")}  </h3>
            <div className="news-cards">
              <NewsCard />
              <NewsCard />
              <NewsCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default NewsPage;
