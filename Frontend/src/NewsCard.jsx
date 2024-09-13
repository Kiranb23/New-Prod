import React from 'react';
import './NewsCard.css';

const NewsCard = ({ article }) => {
    return (
        <div className="card">
            <img src={article.image} className="card-img-top" alt={article.title} />
            <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Read more</a>
            </div>
        </div>
    );
};

export default NewsCard;
