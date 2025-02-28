import "./news.scss"

const NewsCard = () => {
    return (
        <>
            <div className="news-card">
                <div className="news-card_img">
                    <img src="./imgs/news.png" alt="News img" />
                </div>
                <div className="news-card_title">
                    <h4>
                        С 1 мая будут введены социальные нормы и изменены тарифы на электроэнергию и природный газ
                    </h4>
                    <p>
                        Согласно постановлению, определены новые цены на топливно-энергетические ресурсы, которые поэтапно будут меняться в ...
                    </p>
                    <hr />
                    <div className="news-card_date">
                        Jan 16, 2025
                    </div>
                </div>
            </div>
        </>
    )
};
export default NewsCard;
