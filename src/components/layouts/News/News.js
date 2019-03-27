import React, {Component} from "react";
import Footer from "../../Footer";
import NewsCard from "../../NewsCard";
import data from "../../../data/news";

import "./style.css";

console.log(data.length)
class News extends Component {
    
    state = {
        page: 1,
        count: 10,
    }

  render(){
    return (
        <div className="news-page">
        <h2 className="news-page-title">Новини</h2>
        {Object.entries(data).map(
            ([key, value]) => {
                return <NewsCard 
                            key={value.id}
                            title={value.title}
                            photo={value.imageUrl}
                            text={value.text}
                            id={value.idNews}
                            />
            })
        }
        </div>
    );
}
};

export default News;
