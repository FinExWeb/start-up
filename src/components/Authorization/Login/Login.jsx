import React from "react";
import "../authorization.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="container auth py-5">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="login">
              <h2 className="text-center">Ro’yhatdan o’ting</h2>
              <form action="#" className="my-5">
                <input type="email" placeholder="Emailingizni kiriting" />
                <input type="password" placeholder="Parolingizni kiriting" />
                <button>kirish</button>
              </form>
              <h5 className="text-center">
                Sizda account mavjudmi? <Link to="/register">Kirish</Link>
              </h5>

              <div className="copyright my-5 text-center">
                <div className="row">
                  <div className="col">
                    <p className="m-0">Barcha ma’lumotlar himoya qilinadi</p>
                    <p>Copyright 2023.FinEx</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
