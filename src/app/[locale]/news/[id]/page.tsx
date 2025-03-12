import { Locale } from '../../../../../i18n.configs';
import Image from 'next/image';

const newsData = [
  {
    id: '1',
    imgSrc: '/imgs/news.png',
    title: 'С 1 мая будут введены социальные нормы и изменены тарифы',
    description: '1. Согласно постановлению, определены новые цены на топливно-энергетические ресурсы, которые поэтапно будут меняться в  description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore, velit possimus tempore cum iusto quasi reiciendis molestiae asperiores sint. Laborum a doloremque veritatis incidunt illo perferendis cum rem quae ullam pariatur, itaque corporis atque iusto eveniet libero eos, asperiores quam animi, sunt est molestias dolorem autem repellendus dolores. Saepe assumenda repudiandae deleniti! Minus, illum explicabo! Hic iste suscipit qui debitis provident corrupti itaque blanditiis fuga repellat libero porro, aspernatur est ducimus magnam laudantium modi vel, error tempore explicabo non iure. Illo quis libero placeat esse at exercitationem eius iure! Modi laborum facilis nemo explicabo consequatur debitis delectus neque minima ',
    date: 'Jan 16, 2025',
  },
  {
    id: '2',
    imgSrc: '/imgs/news.png',
    title: 'Yangilik 2',
    description: '2.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore, velit possimus tempore cum iusto quasi reiciendis molestiae asperiores sint. Laborum a doloremque veritatis incidunt illo perferendis cum rem quae ullam pariatur, itaque corporis atque iusto eveniet libero eos, asperiores quam animi, sunt est molestias dolorem autem repellendus dolores. Saepe assumenda repudiandae deleniti! Minus, illum explicabo! Hic iste suscipit qui debitis provident corrupti itaque blanditiis fuga repellat libero porro, aspernatur est ducimus magnam laudantium modi vel, error tempore explicabo non iure. Illo quis libero placeat esse at exercitationem eius iure! Modi laborum facilis nemo explicabo consequatur debitis delectus neque minima.',
    date: 'Jan 17, 2025',
  },
  {
    id: '3',
    imgSrc: '/imgs/news.png',
    title: 'Yangilik 3',
    description: '3.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum labore, velit possimus tempore cum iusto quasi reiciendis molestiae asperiores sint. Laborum a doloremque veritatis incidunt illo perferendis cum rem quae ullam pariatur, itaque corporis atque iusto eveniet libero eos, asperiores quam animi, sunt est molestias dolorem autem repellendus dolores. Saepe assumenda repudiandae deleniti! Minus, illum explicabo! Hic iste suscipit qui debitis provident corrupti itaque blanditiis fuga repellat libero porro, aspernatur est ducimus magnam laudantium modi vel, error tempore explicabo non iure. Illo quis libero placeat esse at exercitationem eius iure! Modi laborum facilis nemo explicabo consequatur debitis delectus neque minima.',
    date: 'Jan 18, 2025',
  },
];

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; id: string }>;
}) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  const news = newsData.find((item) => item.id === id);

  if (!news) {
    return <p className="text-center text-gray-500 mt-10">Yangilik topilmadi</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl mt-20 mb-5 font-bold text-gray-800 mb-6 text-center">
        {news.title}
      </h1>
      <div className="w-full max-w-4xl mx-auto">
        <Image
          src={news.imgSrc}
          alt={news.title}
          width={800}
          height={400}
          className="w-full h-auto object-cover rounded-lg shadow-md md:max-h-[500px] lg:max-h-[500px]"
        />
      </div>
      <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
        {news.description}
      </p>
      <p className="mt-4 text-gray-500 text-sm md:text-base">
        <strong>Sana:</strong> {news.date}
      </p>
    </div>
  );
}