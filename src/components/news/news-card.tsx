'use client';

import Image from 'next/image';
import './news.scss';
import Link from 'next/link';
import { useLocale } from 'next-intl';

interface NewsCardProps {
  imgSrc?: string;
  title?: string;
  description?: string;
  date?: string;
  id?: string;
}

const NewsCard = ({
  imgSrc = '/imgs/news.png',
  title = 'С 1 мая будут введены социальные нормы и изменены тарифы на электроэнергию и природный газ',
  description = '1.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore, velit possimus tempore cum iusto quasi reiciendis molestiae asperiores sint. Laborum a doloremque veritatis incidunt illo perferendis cum rem quae ullam pariatur, itaque corporis atque iusto eveniet libero eos, asperiores quam animi, sunt est molestias dolorem autem repellendus dolores. Saepe assumenda repudiandae deleniti! Minus, illum explicabo! Hic iste suscipit qui debitis provident corrupti itaque blanditiis fuga repellat libero porro, aspernatur est ducimus magnam laudantium modi vel, error tempore explicabo non iure. Illo quis libero placeat esse at exercitationem eius iure! Modi laborum facilis nemo explicabo consequatur debitis delectus neque minima.',
  date = 'Jan 16, 2025',
  id,
}: NewsCardProps) => {
  const locale = useLocale();


  const truncateDescription = (text: string, maxSentences: number = 8) => {
    const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
    if (sentences.length <= maxSentences) return text;
    return sentences.slice(0, maxSentences).join(' ') + '...';
  };

  const truncatedDescription = truncateDescription(description);

  return (
    <div className="news-card">
      <Link href={`/${locale}/news/${id}`} passHref>
        <div className="news-card_img">
          <Image
            src={imgSrc}
            alt={title}
            width={500}
            height={300}
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="news-card_title">
          <h4>{title}</h4>
          <p>{truncatedDescription}</p>
          <hr />
          <div className="news-card_date">{date}</div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;