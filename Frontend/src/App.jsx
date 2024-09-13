import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsCard from './NewsCard';
import Pagination from './Pagination';
import './App.css';

const App = () => {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('');
    const [country, setCountry] = useState('');

    useEffect(() => {
        const fetchNews = async () => {
            const response = await axios.get(`http://localhost:5000/news`, {
                params: { page, query, category, country }
            });
            setArticles(response.data.articles);
        };
        fetchNews();
    }, [page, query, category, country]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>ACONEWS</h1>
                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <select onChange={(e) => setCategory(e.target.value)}>
                    <option value="">All Categories</option>
                    <option value="technology">Technology</option>
                    <option value="sports">Sports</option>
                    <option value="business">Business</option>
                </select>
                <select onChange={(e) => setCountry(e.target.value)}>
                    <option value="">All Countries</option>
                    <option value="us">United States</option>
                    <option value="in">India</option>
                    <option value="gb">United Kingdom</option>
                </select>
            </header>
            <main>
                <div className="news-feed">
                    {articles.map((article, index) => (
                        <NewsCard key={index} article={article} />
                    ))}
                </div>
                <Pagination currentPage={page} onPageChange={setPage} />
            </main>
        </div>
    );
};

export default App;
