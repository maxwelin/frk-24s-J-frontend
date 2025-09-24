import { Link } from "react-router"

const NotFoundPage = () => {
  return (
    <>
      <h1>404</h1>
      <Link to={"/"}>Home</Link>
    </>
  )
}

export default NotFoundPage