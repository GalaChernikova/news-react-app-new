import { useEffect, useState } from "react";
import axios from "axios";
import Response from "../Response";
import {allFoxNews} from '../../API'

export default function FoxNews(){
    const [news, setNews] = useState([]);

    useEffect(() => {
      axios
        .get(`${allFoxNews}`)
        .then((resp) => {
          setNews(resp.data.articles);
        });
    }, []);

    return (
        <Response news={news} />
      );
}