import { useEffect, useState } from "react";
import axios from "axios";
import {scienceUK} from '../../../API'
import Response from "../../Response";

export default function ScienceUK() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`${scienceUK}`)
      .then((resp) => {
        setNews(resp.data.articles);
      });
  }, []);

  return (
    <Response news={news}/>
  );
}


