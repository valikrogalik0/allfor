import React, {Component} from "react";
import Footer from "../../components/Footer";
import NewsCard from "../../components/NewsCard";


import "./style.css";

class NewsPage extends Component {
    
    state = {
        news: this.props.data,
        page: 1,
    }

    getCurrentNewsPage() {
        const data = this.props;
        return this.state.page * 10;
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
        <div></div>
        </div>
    );
}
};

export default NewsPage;
