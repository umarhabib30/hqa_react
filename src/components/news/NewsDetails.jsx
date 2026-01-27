import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoreNews from "./MoreNews";

export default function NewsDetails() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const newsId = parseInt(id);

  useEffect(() => {
    fetch(`https://hquranacademy.com/api/news/${newsId}`)
      .then((res) => res.json())
      .then((json) => {
        if (json.status) {
          setNews(json.data);
        }
      })
      .catch((err) => console.error("News Detail API Error:", err));
  }, [newsId]);

  if (!news) {
    return <p className="p-6 text-center">Loading...</p>;
  }

  return (
    <>
      <div className="px-4 sm:px-6 lg:px-16 py-8 md:py-12 font-serif overflow-hidden">
        <h1 className="h1 text-[#00285E] mb-8 break-words">{news.title}</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/2 text-gray-800 space-y-4 p break-words min-w-0">
            <p>{news.description}</p>
          </div>

          <div className="lg:w-1/2 min-w-0">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-auto max-h-[600px] object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>

      <MoreNews excludeId={newsId} />
    </>
  );
}
