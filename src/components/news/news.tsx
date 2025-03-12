'use client';

import { useTranslations } from 'next-intl';
import NewsCard from './news-card';
import './news.scss';

const newsData = [
  {
    id: '1',
    imgSrc: '/imgs/news.png',
    title: 'С 1 мая будут введены социальные нормы и изменены тарифы',
    description:
      'Согласно постановлению, определены новые цены на топливно-энергетические ресурсы. Они поэтапно будут меняться в течение года. Bu birinchi gap. Bu ikkinchi gap. Bu uchinchi gap. Bu to‘rtinchi gap. Bu beshinchi gap. Bu oltinchi gap. Bu yettinchi gap. Bu sakkizinchi gap. Bu to‘qqizinchi gap. Bu o‘ninchi gap. Bu o‘n birinchi gap. Bu o‘n ikkinchi gap. Bu o‘n uchinchi gap. Bu o‘n to‘rtinchi gap. Bu o‘n beshinchi gap. Bu o‘n oltinchi gap. Bu o‘n yettinchi gap. Bu o‘n sakkizinchi gap.',
    date: 'Jan 16, 2025',
  },
  {
    id: '2',
    imgSrc: '/imgs/news.png',
    title: 'Yangilik 2 Gaz haqida yangiliklar va ularning tariflari togrisida yangilik cardi 2',
    description:
     'Согласно постановлению, определены новые цены на топливно-энергетические ресурсы. Они поэтапно будут меняться в течение года. Bu birinchi gap. Bu ikkinchi gap. Bu uchinchi gap. Bu to‘rtinchi gap. Bu beshinchi gap. Bu oltinchi gap. Bu yettinchi gap. Bu sakkizinchi gap. Bu to‘qqizinchi gap. Bu o‘ninchi gap. Bu o‘n birinchi gap. Bu o‘n ikkinchi gap. Bu o‘n uchinchi gap. Bu o‘n to‘rtinchi gap. Bu o‘n beshinchi gap. Bu o‘n oltinchi gap. Bu o‘n yettinchi gap. Bu o‘n sakkizinchi gap.',
    date: 'Jan 17, 2025',
  },
  {
    id: '3',
    imgSrc: '/imgs/news.png',
    title: 'Yangilik 3 Gaz haqida yangiliklar va ularning tariflari togrisida yangilik cardi 3',
    description: 
    'Согласно постановлению, определены новые цены на топливно-энергетические ресурсы. Они поэтапно будут меняться в течение года. Bu birinchi gap. Bu ikkinchi gap. Bu uchinchi gap. Bu to‘rtinchi gap. Bu beshinchi gap. Bu oltinchi gap. Bu yettinchi gap. Bu sakkizinchi gap. Bu to‘qqizinchi gap. Bu o‘ninchi gap. Bu o‘n birinchi gap. Bu o‘n ikkinchi gap. Bu o‘n uchinchi gap. Bu o‘n to‘rtinchi gap. Bu o‘n beshinchi gap. Bu o‘n oltinchi gap. Bu o‘n yettinchi gap. Bu o‘n sakkizinchi gap.',
    date: 'Jan 18, 2025',
  },
];


const truncateDescription = (text: string, maxSentences: number = 8) => {
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  if (sentences.length <= maxSentences) return text;
  return sentences.slice(0, maxSentences).join(' ') + '...';
};

const NewsPage = () => {
  const t = useTranslations('News');

  return (
    <section>
      <div id="news">
        <div className="myContainer">
          <h3 className="news-cards-title">{t('title')}</h3>
          <div className="news-cards">
            {newsData.map((news) => (
              <NewsCard
                key={news.id}
                id={news.id}
                imgSrc={news.imgSrc}
                title={news.title}
                description={truncateDescription(news.description)}
                date={news.date}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsPage;