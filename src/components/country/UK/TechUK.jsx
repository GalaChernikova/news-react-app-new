import { useEffect, useState } from "react";
import axios from "axios";
import {techUK} from '../../../API'
import Response from "../../Response";

export default function TechUK() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`${techUK}`)
      .then((resp) => {
        setNews(resp.data.articles);
      });
  }, []);

  return (
    <Response news={news}/>
  );
}


