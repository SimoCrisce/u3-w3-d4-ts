import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Result } from "../interfaces/ArticleInterface";
import Container from "react-bootstrap/Container";

const Details = function () {
  const [article, setArticle] = useState<Result>();

  const params = useParams();
  const fetchArticle = function () {
    fetch("https://api.spaceflightnewsapi.net/v4/articles/" + params.articleId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel reperimento dei dati richiesti");
        }
      })
      .then((fetchedArticle: Result) => {
        console.log(fetchedArticle);
        setArticle(fetchedArticle);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    fetchArticle();
  }, []);
  return (
    <Container>
      <Row>
        <Col className="d-flex justify-content-center">
          {article && (
            <Card className="my-2" style={{ width: "400px" }}>
              <Card.Img variant="top" src={article.image_url} />
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>{article.summary}</Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
