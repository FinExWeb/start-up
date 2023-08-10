
import Card from "./Card/Card"
import Main from "./Main/Main"



const HeaderElement =()=>{
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
            <Card />
            <Card />
          </div>
        </div>
    )
}

export default HeaderElement