import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const _name = e.currentTarget.name;
    const _value = e.currentTarget.value;

    setUserData((prev) => {
      return { ...prev, [_name]: _value };
    });
  };

  const registerUser = (e: any) => {
    e.preventDefault();

    try {
      createUserWithEmailAndPassword(
        getAuth(),
        userData.email,
        userData.password
      ).then((cred: any) => {
        setUserData(cred.user.email);
        toast("Successfully registered!");
        window.localStorage.setItem("currentUser", `${cred.user.email}`);
        navigate("/quote");
      });
    } catch (error: any) {
      throw Error(error.Message);
    }
  };

  return (
    <>
      <div className="container-lg ">
        <div className="login-page">
          <div className="row align-items-center justify-content-around">
            <div className="col-12 col-lg-6 col-sm-6">
              {/* <div className="text-center h3">Register!</div> */}
              <div className="text-center h4 pb-4">
                Register by entering the information below
              </div>
              <form onSubmit={registerUser}>
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
                    Register
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

export default Register;
