import { useEffect, useState } from "react";

function Posts() {
    const [news, setNews] = useState(null);
    const [count, setCount] = useState(1);

    const fetchNewsData = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${count}`);
        const newsData = await response.json();
        setNews(newsData);
    };

    useEffect(() => {
        const timerId = setInterval(() => {
            fetchNewsData();
            setCount(prevCount => prevCount+1);
        }, 3000);
        console.log("a " + count);
        return () => {
            clearInterval(timerId);
            // setNews(null);
        };
    }, []);
    console.log("b "+ count);

    return (
        <div>
            {news ? (
                <div>
                    <h1>{news.title}</h1>
                    <p>{news.body}</p>
                </div>
            ) : (
                <p>Carregando Notícia!</p>
            )}
        </div>
    );

}

export default Posts