import { useEffect, useState } from "react";
import axios from "axios";
import {baseCategory, generalUK} from './../API'
import Response from "./Response";

function General() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseCategory}${generalUK}`)
      .then((resp) => {
        setNews(resp.data.articles);
      });
  }, []);

  return (
    <Response news={news}/>
  );
}

export default General;
