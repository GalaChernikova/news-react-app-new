import { useEffect, useState } from "react";
import axios from "axios";
import {healthUK} from '../../../API'
import Response from "../../Response";

export default function HealthUK() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`${healthUK}`)
      .then((resp) => {
        setNews(resp.data.articles);
      });
  }, []);

  return (
    <Response news={news}/>
  );
}


