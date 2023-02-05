import { useEffect, useState } from "react";
import axios from "axios";
import {generalUSA} from '../../../API'
import Response from "../../Response";

export default function GeneralUSA() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`${generalUSA}`)
      .then((resp) => {
        setNews(resp.data.articles);
      });
  }, []);

  return (
    <Response news={news}/>
  );
}


