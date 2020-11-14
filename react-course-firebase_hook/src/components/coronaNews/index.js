import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../services/firebase';
import Cards from '../cards';
import 'firebase/database';
import './style.css';

const convertDate = (date) => {
  const dateLocal = new Date(date).toLocaleString('id-ID', {
    dateStyle: 'full',
  });
  return dateLocal;
};

const CoronaNews = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [visible, setVisible] = useState(6);
  useEffect(() => {
    setIsLoading(true);
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      setNews(firebaseNews.data);
      setIsLoading(false);
    });
  }, []);

  console.log(news);
  const showMoreItems = () => {
    setVisible((prevValue) => {
      return prevValue + 6;
    });
  };
  return (
    <div>
      <h2>data corona</h2>
      {isLoading ? <p>loading...</p> : <p>data</p>}

      <div className="container">
        {news.slice(0, visible).map((newsItem) => {
          return (
            <div className="card">
              <Link to={`/infoCorona/${newsItem.date}`}>
                <h3>{newsItem.date}</h3>
              </Link>
              <h1 style={{ marginTop: '1em', marginBottom: '1em' }}>
                {convertDate(newsItem.date)}
              </h1>
              <div>
                {newsItem.activity.map((activityItem) => {
                  return (
                    <a href={activityItem.url} target="_blank" rel="noreferrer">
                      <Cards>
                        <h4>{activityItem.title}</h4>
                        <p>{activityItem.desc}</p>
                      </Cards>
                    </a>
                  );
                })}
              </div>
            </div>
          );
        })}
        <button type="button" onClick={showMoreItems}>
          LOAD MORE
        </button>
      </div>
    </div>
  );
};

export default CoronaNews;
