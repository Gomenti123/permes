import { useState, CSSProperties } from "react";
import { BeatLoader, BounceLoader, CircleLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "flex",
  margin: "0 auto",
  borderColor: "red",
};

function Spinner() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#fff");

  return (
    <div className="sweet-loading">
      
    <BeatLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;