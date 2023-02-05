import { useEffect, useState } from "react";
import axios from "axios";
import {generalAUS} from '../../../API'
import Response from "../../Response";

export default function GeneralAus() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`${generalAUS}`)
      .then((resp) => {
        setNews(resp.data.articles);
      });
  }, []);

  return (
    <Response news={news}/>
  );
}


