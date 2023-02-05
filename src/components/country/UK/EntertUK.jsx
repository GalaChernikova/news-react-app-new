import { useEffect, useState } from "react";
import axios from "axios";
import {entertUK} from '../../../API'
import Response from "../../Response";

export default function EntertUK() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`${entertUK}`)
      .then((resp) => {
        setNews(resp.data.articles);
      });
  }, []);

  return (
    <Response news={news}/>
  );
}


