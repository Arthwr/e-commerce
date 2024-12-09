import { useRouteError } from "react-router-dom";
import styles from "./ErrorElement.module.css";

export default function ErrorElement() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={styles.errorPage}>
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexepcted error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
