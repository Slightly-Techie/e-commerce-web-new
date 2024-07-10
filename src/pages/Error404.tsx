import { Link } from "react-router-dom";
import Container from "../components/Container";

const Error404 = () => {
  return (
    <Container>
      <div className="mt-32 mx-4 xl:mx-0">
        <p>404 page</p>
        <Link to="/">Go home</Link>
      </div>
    </Container>
  );
};

export default Error404;
