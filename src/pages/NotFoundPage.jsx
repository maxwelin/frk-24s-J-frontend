import { Link } from "react-router";
import { BackgroundBanner } from "@masewe/components";

const NotFoundPage = () => {
  return (
    <>
      <BackgroundBanner text="404" />
      <Link to={"/"}>Home</Link>
    </>
  );
};

export default NotFoundPage;
