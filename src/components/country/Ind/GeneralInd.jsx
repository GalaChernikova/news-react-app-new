import { useEffect, useState } from "react";
import axios from "axios";
import {generalIN} from '../../../API'
import Response from "../../Response";

export default function GeneralInd() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`${generalIN}`)
      .then((resp) => {
        setNews(resp.data.articles);
      });
  }, []);

  return (
    <Response news={news}/>
  );
}


