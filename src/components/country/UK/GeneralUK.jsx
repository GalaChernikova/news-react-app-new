import { useEffect, useState } from "react";
import axios from "axios";
import {generalUK} from '../../../API'
import Response from "../../Response";

export default function GeneralUK() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`${generalUK}`)
      .then((resp) => {
        setNews(resp.data.articles);
      });
  }, []);

  return (
    <Response news={news}/>
  );
}


