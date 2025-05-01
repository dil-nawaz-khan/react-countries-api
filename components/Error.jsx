import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  return (
    <div className="error-container">
      <h2>Oops! {error.status}</h2>
      <h4>{error.data}</h4>
    </div>
  );
}
