import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <>
      <div className="text-center my-5">Error!</div>
      <Link
        to="/"
        style={{
          display: "flex",
          justifyContent: "center",
          textDecoration: "none",
        }}
      >
        <button>Orqaga qaytish</button>
      </Link>
      {/* h1! */}
    </>
  );
}

export default Error;
