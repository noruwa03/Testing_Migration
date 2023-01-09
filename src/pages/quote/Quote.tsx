import { useState, useEffect } from "react";
import { Link, Navigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { getDocs } from "firebase/firestore";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

import { q } from "../../App";

const Quote = () => {
  const [quotes, setQuotes] = useState<any>([]);

  useEffect(() => {
    const getPost = async () => {
      const postSnapshot = await getDocs(q);
      const postList = postSnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // Set the result to the useState.
      setQuotes(postList);
    };
    // Call the async function.
    getPost().catch(console.error);
  }, []);

  if (!window.localStorage.getItem("currentUser")) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <>
      <section className="card-table">
        <ToastContainer />
        <div className="custom-container pt-1 pb-3">
          <div className="row align-items-center justify-content-sm-between pt-4">
            <div className="col-sm-8 col-12">
              <div className="h2">Admin Dashboard</div>
              <p className="fw-normal">
                Quotes from potenial clients. Please delete items after you have
                contacted the client to free up space
              </p>
            </div>
            <div className="col-sm-4 col-12 text-end">
              <div
                className="btn btn-outline-danger"
                onClick={() =>
                  signOut(getAuth())
                    .then(() => {
                      toast("Successfully logged out!");
                      window.localStorage.removeItem("currentUser");
                      window.location.href = "/";
                    })
                    .catch((err) => {
                      console.log(err.message);
                    })
                }
              >
                Logout
              </div>
            </div>
          </div>
        </div>

        <div className="header-container">
          <div className="text-lead">Qoute Service</div>
          <div className="row">
            <div className="col-1">
              <div className="header">Name</div>
            </div>
            <div className="col-2">
              <div className="header">Phone no</div>
            </div>
            <div className="col-3">
              <div className="header">Email</div>
            </div>
            <div className="col-4">
              <div className="header">Service</div>
            </div>
            <div className="col-5">
              <div className="header">Message</div>
            </div>
          </div>
        </div>
        {quotes.length === 0 ? (
          <div className="text-center mt-3 lead">Not data available</div>
        ) : (
          quotes.map((data: any) => (
            <div className="sub-container" key={data.id}>
              <Link to={`/quote/${data.id}`}>
                <div className="row">
                  <div className="col-1">
                    <div className="sub-text">
                      {data.name} {data.length}
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="sub-text">
                      {!data.phone_no ? "N/A" : data.phone_no}
                    </div>
                  </div>
                  <div className="col-3">
                    <div className="sub-text">{data.email}</div>
                  </div>
                  <div className="col-4">
                    <div className="sub-text loop-items">
                      {data.services.map((item: any, index: number) => (
                        <div className="items" key={index}>
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-5">
                    <div className="sub-text">
                      {!data.message
                        ? "Message not availabe"
                        : data.message.substring(0, 40)}{" "}
                      {data.message.length >= 20 && "..."}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </section>
    </>
  );
};

export default Quote;
