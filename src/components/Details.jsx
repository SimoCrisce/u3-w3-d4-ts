import { useNavigate, useParams } from "react-router-dom";

const Details = function () {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
};

export default Details;
