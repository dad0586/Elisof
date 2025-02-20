import NewsCard from "./news-card";
import "./news.scss"

const NewsPage = () => {

  return (
    <>
      <div className="myContainer">
        <h3 className="news-cards-title">
          News
        </h3>
        <div className="news-cards">
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </div>
      </div>
    </>
  );
};
export default NewsPage;
