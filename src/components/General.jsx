import { useEffect, useState } from "react";
import axios from "axios";
import newsImg from "./../images/newspaper.png";

function General() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("https://saurav.tech/NewsAPI/top-headlines/category/general/gb.json")
      .then((resp) => {
        setNews(resp.data.articles);
      });
  }, []);

  return (
    <div className="flex flex-wrap w-full">
      {Array.from(news).map((n) => {
        return (
          <div key={n.title} className="flex flex-col max-w-xs w-full p-4">
            <h3>{n.author}</h3>
            <h2>{n.title}</h2>
            <p>{n.description}</p>
            <a href={n.url}>
              <img src={n.urlToImage != null ? n.urlToImage : newsImg}></img>
            </a>
            <p>{n.publishedAt}</p>
            <div>{n.content}</div>
            <a href={n.url}>Read more &#8594;</a>
          </div>
        );
      })}
    </div>
  );
}

export default General;
