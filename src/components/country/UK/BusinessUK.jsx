import { useEffect, useState } from "react";
import axios from "axios";
import {businessUK} from '../../../API'
import Response from "../../Response";

export default function BusinessUK() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`${businessUK}`)
      .then((resp) => {
        setNews(resp.data.articles);
      });
  }, []);

  return (
    <Response news={news}/>
  );
}


