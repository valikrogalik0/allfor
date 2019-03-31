import React, {Component} from "react";
import Footer from "../../components/Footer";
import NewsCard from "../../components/NewsCard";


import "./style.css";

class NewsPage extends Component {
    
    state = {
        page: 1,
        count: 10,
    }

  render(){
      const { data } = this.props
    return (
        <div className="news-page">
        <h2 className="news-page-title">Новини</h2>
        {Object.entries(data).map(
            ([key, value]) => {
                return <NewsCard 
                            key={Math.random() * 10000}
                            title={value.title}
                            photoURL={value.imageUrl}
                            text={value.text}
                            id={value.idNews}
                            date={value.date}
                            />
            })
        }
        </div>
    );
}
};

export default NewsPage;
