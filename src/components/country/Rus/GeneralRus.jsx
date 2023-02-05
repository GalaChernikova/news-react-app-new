import { useEffect, useState } from "react";
import axios from "axios";
import {generalRUS} from '../../../API'
import Response from "../../Response";

export default function GeneralRus() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`${generalRUS}`)
      .then((resp) => {
        setNews(resp.data.articles);
      });
  }, []);

  return (
    <Response news={news}/>
  );
}


