import { Link, useParams } from "react-router-dom";


const Error = () => {
  const { slug } = useParams();
  return (
    <div className="container bg-sucess error-component">
      <h1>An error occured, Could not display quote with {slug } id</h1>
      <Link className="go-home" to="/">Go back home</Link>
    </div>
  );
};

export default Error;
