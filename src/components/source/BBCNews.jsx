import { useEffect, useState } from "react";
import axios from "axios";
import Response from "../Response";
import {allBBC} from '../../API'

export default function BBCNews(){
    const [news, setNews] = useState([]);

    useEffect(() => {
      axios
        .get(`${allBBC}`)
        .then((resp) => {
          setNews(resp.data.articles);
        });
    }, []);

    return (
        <Response news={news} />
      );
}