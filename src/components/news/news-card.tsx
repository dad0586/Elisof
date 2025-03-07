import Image from "next/image";
import "./news.scss";


interface NewsCardProps {
  imgSrc?: string;
  title?: string;
  description?: string;
  date?: string;
}

const NewsCard = ({
  imgSrc = "/imgs/news.png", 
  title = "С 1 мая будут введены социальные нормы и изменены тарифы на электроэнергию и природный газ",
  description = "Согласно постановлению, определены новые цены на топливно-энергетические ресурсы, которые поэтапно будут меняться в ...",
  date = "Jan 16, 2025",
}: NewsCardProps) => {
  return (
    <div className="news-card">
      <div className="news-card_img">
        <Image
          src={imgSrc} 
          alt="News img"
          width={500}
          height={300} 
          style={{ objectFit: "cover" }} 
        />
      </div>
      <div className="news-card_title">
        <h4>{title}</h4>
        <p>{description}</p>
        <hr />
        <div className="news-card_date">{date}</div>
      </div>
    </div>
  );
};

export default NewsCard;