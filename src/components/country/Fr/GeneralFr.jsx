import { useEffect, useState } from "react";
import axios from "axios";
import {generalFR} from '../../../API'
import Response from "../../Response";

export default function GeneralFr() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`${generalFR}`)
      .then((resp) => {
        setNews(resp.data.articles);
      });
  }, []);

  return (
    <Response news={news}/>
  );
}


