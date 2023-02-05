//API request url
export const baseAll = "https://saurav.tech/NewsAPI/everything";
export const baseCategory =
  "https://saurav.tech/NewsAPI/top-headlines/category";

//news source
export const CNN = "/cnn.json";
export const FoxNews = "/fox-news.json";
export const BBC = "/bbc-news.json";

//category
export const general = "/general/";
export const business = "/business/";
export const entert = "/entertainment/";
export const health = "/health/";
export const science = "/science/";
export const sports = "/science/";
export const tech = "/technology/";

//country
export const ind = '/in.json'
export const gb = '/gb.json'
export const usa = '/us.json'
export const au = '/au.json'
export const rus = '/ru.json'
export const fr = '/fr.json'


//all news
export const allCNN = `${baseAll}${CNN}`;
export const allFoxNews = `${baseAll}${FoxNews}`;
export const allBBC = `${baseAll}${BBC}`;

//UK
export const generalUK = `${baseCategory}${general}${gb}`;
export const businessUK = `${baseCategory}${business}${gb}`;
export const entertUK = `${baseCategory}${entert}${gb}`;
export const healthUK = `${baseCategory}${health}${gb}`;
export const scienceUK = `${baseCategory}${science}${gb}`;
export const sportsUK = `${baseCategory}${sports}${gb}`;
export const techUK = `${baseCategory}${tech}${gb}`;

//India
export const generalIN = `${baseCategory}${general}${ind}`;
export const businessIN = `${baseCategory}${business}${ind}`;
export const entertIN = `${baseCategory}${entert}${ind}`;
export const healthIN = `${baseCategory}${health}${ind}`;
export const scienceIN = `${baseCategory}${science}${ind}`;
export const sportsIN = `${baseCategory}${sports}${ind}`;
export const techIN = `${baseCategory}${tech}${ind}`;

//USA
export const generalUSA = `${baseCategory}${general}${usa}`;
export const businessUSA = `${baseCategory}${business}${usa}`;
export const entertUSA = `${baseCategory}${entert}${usa}`;
export const healthUSA = `${baseCategory}${health}${usa}`;
export const scienceUSA = `${baseCategory}${science}${usa}`;
export const sportsUSA = `${baseCategory}${sports}${usa}`;
export const techUSA = `${baseCategory}${tech}${usa}`;

//Australia
export const generalAUS = `${baseCategory}${general}${au}`;
export const businessAUS = `${baseCategory}${business}${au}`;
export const entertAUS = `${baseCategory}${entert}${au}`;
export const healthAUS= `${baseCategory}${health}${au}`;
export const scienceAUS = `${baseCategory}${science}${au}`;
export const sportsAUS = `${baseCategory}${sports}${au}`;
export const techAUS = `${baseCategory}${tech}${au}`;

//Russia
export const generalRUS = `${baseCategory}${general}${rus}`;
export const businessRUS = `${baseCategory}${business}${rus}`;
export const entertRUS = `${baseCategory}${entert}${rus}`;
export const healthRUS= `${baseCategory}${health}${rus}`;
export const scienceRUS = `${baseCategory}${science}${rus}`;
export const sportsRUS = `${baseCategory}${sports}${rus}`;
export const techRUS = `${baseCategory}${tech}${rus}`;

//France
export const generalFR = `${baseCategory}${general}${fr}`;
export const businessFR = `${baseCategory}${business}${fr}`;
export const entertFR = `${baseCategory}${entert}${fr}`;
export const healthFR = `${baseCategory}${health}${fr}`;
export const scienceFR = `${baseCategory}${science}${fr}`;
export const sportsFR = `${baseCategory}${sports}${fr}`;
export const techFR = `${baseCategory}${tech}${fr}`;
