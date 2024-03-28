import { Welcome, Result } from "../interfaces/ArticleInterface";
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Article from "./Article";

const FetchComponent = function () {
  const [articles, setArticles] = useState<Result[]>([]);

  const fetchArticle = () => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel reperimento dei dati richiesti");
        }
      })
      .then((articlesResults: Welcome) => {
        setArticles(articlesResults.results);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchArticle();
  }, []);
  return (
    <Container>
      <Row>
        {articles.map((a) => (
          <Article articleDetails={a} key={a.id} />
        ))}
      </Row>
    </Container>
  );
};

export default FetchComponent;
