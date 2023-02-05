import newsImg from "./../images/newspaper.png";

export default function Response({news}) {

  return (
    <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1  w-full my-5 mx-2 overflow-auto h-screen">
      {Array.from(news).map((n) => {
        return (
          <div
            key={n.title}
            className="flex flex-col w-80 p-4 border-r border-b border-zinc-200 mx-2 xl:max-w-3xl xl:w-full lg:max-w-2xl"
          >
            <h3 className="text-gray-400 text-sm mb-2.5">{n.author}</h3>
            <h2 className="font-serif font-semibold text-xl text-slate-600 mb-2.5">
              {n.title}
            </h2>
            <p className="font-sans italic text-sm mb-2.5">{n.description}</p>
            <a href={n.url}>
              <img src={n.urlToImage != null ? n.urlToImage : newsImg}></img>
            </a>
            <p className="text-gray-400 text-xs my-2.5">{n.publishedAt}</p>
            <div className="font-sans text-lg mb-5">{n.content}</div>
            <a href={n.url} className="font-serif mt-auto font-semibold">
              Read more &#8594;
            </a>
          </div>
        );
      })}
    </div>
  );
}
