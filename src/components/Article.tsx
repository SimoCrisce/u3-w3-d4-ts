import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Result } from "../interfaces/ArticleInterface";
import { Link } from "react-router-dom";

interface ArticleProps {
  articleDetails: Result;
}

// const Article = function ({articleDetails}: ArticleProps) si può fare anche così
const Article = function (props: ArticleProps) {
  const date = new Date(props.articleDetails.published_at);
  return (
    <Col sm={3}>
      <Link className="text-decoration-none" to={"/details/" + props.articleDetails.id}>
        <Card className="my-2">
          <Card.Img variant="top" src={props.articleDetails.image_url} style={{ height: "155px" }} />
          <Card.Body>
            <Card.Title>{props.articleDetails.title}</Card.Title>
            <Card.Text>{props.articleDetails.summary}</Card.Text>
            <Card.Text>
              Pubblicato il {date.toLocaleDateString()} alle
              {" " + date.toLocaleTimeString()}
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default Article;
