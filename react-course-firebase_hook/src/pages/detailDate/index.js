import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import app from '../../services/firebase';
import 'firebase/database';

const NewsItem = ({ news }) => {
  const { date, activity } = news[0];
  console.log(news[0]);
  return (
    <div>
      <h3>{date}</h3>
      {activity.map((data) => {
        return (
          <div key={data.url}>
            <a href={data.url} target="blank">
              <h5>{data.title}</h5>
            </a>
            <p>{data.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

const DetailDate = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // const location = useLocation();
  const params = useParams();
  const { dateId } = params;
  // console.log(params);

  useEffect(() => {
    setIsLoading(true);
    const db = app.database().ref('news');
    db.on('value', (snapshot) => {
      const firebaseNews = snapshot.val();
      const filteredByDate = firebaseNews.data.filter((resp) => {
        // biar pas refresh halaman tetap dihalaman yg sama sesuai date
        return resp.date === dateId;
      });
      setNews(filteredByDate);
      setIsLoading(false);
    });
  }, [dateId]);

  console.log(news);
  return (
    <div>
      <h2>info Corona Detail</h2>
      {!isLoading && news.length > 0 ? (
        <NewsItem news={news} />
      ) : (
        <p>loading</p>
      )}
    </div>
  );
};

export default DetailDate;
