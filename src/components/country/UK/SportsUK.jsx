import { useEffect, useState } from "react";
import axios from "axios";
import {sportsUK} from '../../../API'
import Response from "../../Response";

export default function SportsUK() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`${sportsUK}`)
      .then((resp) => {
        setNews(resp.data.articles);
      });
  }, []);

  return (
    <Response news={news}/>
  );
}


