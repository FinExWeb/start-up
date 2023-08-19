import Main from "./Main/Main";
import Restorant from "./Restorant/Restorant";

const HeaderElement = () => {
  return (
    <div className="header-main">
      <Main />
      <hr />
      <h2
        className="my-5 text-center"
        style={{
          textTransform: "uppercase",
          fontFamily: "sans-serif",
          fontWeight: "600",
        }}
      >
        ovqatlar menyusi
      </h2>
      <div className="cards my-3">
        <Restorant />
        <Restorant />
      </div>
    </div>
  );
};

export default HeaderElement;
