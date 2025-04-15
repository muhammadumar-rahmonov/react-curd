import Spinner from "react-bootstrap/Spinner";

function SiteSpinner() {
  return (
    <div className="d-flex justify-content-center align-item-center spinner">
      <Spinner className="m-auto" animation="grow" />
    </div>
  );
}

export default SiteSpinner;
