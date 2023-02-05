import { useEffect, useState } from "react";
import axios from "axios";
import Response from "../Response";
import {allCNN} from '../../API'

export default function CNN(){
    const [news, setNews] = useState([]);

    useEffect(() => {
      axios
        .get(`${allCNN}`)
        .then((resp) => {
          setNews(resp.data.articles);
        });
    }, []);

    return (
        <Response news={news} />
      );
}