import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [loginError, setLoginError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const _name = e.currentTarget.name;
    const _value = e.currentTarget.value;

    setUserData((prev) => {
      return { ...prev, [_name]: _value };
    });
  };

  const signIn = (e: any) => {
    e.preventDefault();

    signInWithEmailAndPassword(getAuth(), userData.email, userData.password)
      .then((cred: any) => {
        setUserData(cred.user.email);
        toast("Successfully logged in!");
        window.localStorage.setItem("currentUser", `${cred.user.email}`);
        navigate("/quote");
      })
      .catch(() => {
        setLoginError("An error occured, please check credentials");
      });
  };

  return (
    <>
      <div className="container-lg ">
        <div className="login-page">
          <div className="row align-items-center justify-content-around">
            <div className="col-12 col-lg-6 col-sm-6">
              <div className="text-center h3">Welcome Back!</div>
              <div className="text-center h4 pb-4">
                Login in by entering the information below
              </div>
              {!loginError ? (
                ""
              ) : (
                <div style={{ color: "#FF0000", marginBottom: "1rem" }}>
                  {loginError}
                </div>
              )}
              <form onSubmit={signIn}>
                <label htmlFor="email">Email</label>

                <div className="form-group">
                  <input
                    type="email"
                    className="form-control-input mt-2"
                    placeholder="Email"
                    required
                    name="email"
                    onChange={handleChange}
                  />
                </div>

                <label htmlFor="from">Password</label>

                <div className="form-group">
                  <input
                    type="password"
                    className="form-control-input mt-2"
                    placeholder="password"
                    required
                    name="password"
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group text-center">
                  <button type="submit" className="form-control-submit-button">
                    login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
