import { Link } from "react-router-dom";
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../../App";
import { useLoaderData } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const QuoteDetail = () => {
  const userData: any = useLoaderData();
  const { slug }: any = useParams();
  const navigate = useNavigate();

  const delHandler = async () => {
    await deleteDoc(doc(db, `${process.env.REACT_APP_COLLECTION}`, slug));
    toast("Quote deleted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigate("/quote");
  };

  return (
    <>
      <div className="detail-page">
        <div>
          <div className="text-center my-3">
            <Link className="btn btn-outline-info" to="/quote">
              Quotes
            </Link>
          </div>
          <div className="detail-card">
            <div className="row-item">
              <h2>Name:</h2>
              <div className="value">{userData.name}</div>
            </div>
            <div className="divider"></div>
            <div className="row-item">
              <h2>Email:</h2>
              <div className="value">{userData.email}</div>
            </div>

            <div className="divider"></div>
            <div className="row-item">
              <h2>Phone No:</h2>
              <div className="value">
                {!userData.phone_no ? "N/A" : userData.phone_no}
              </div>
            </div>

            <div className="divider"></div>
            <div className="row-item">
              <h2>Company:</h2>
              <div className="value">
                {!userData.company_name ? "N/A" : userData.company_name}
              </div>
            </div>

            <div className="divider"></div>
            <div className="row-item">
              <h2>Message:</h2>
              <div className="value">
                {!userData.message ? "Message not available" : userData.message}
              </div>
            </div>

            <div className="divider"></div>
            <div className="row-item">
              <h2>Services:</h2>
              <div className="value">
                {userData.services.map((data: any, index: number) => (
                  <div className="items" key={index}>
                    {data.name}
                  </div>
                ))}
              </div>
            </div>

            <div className="divider"></div>

            <button onClick={delHandler}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuoteDetail;

export const fetchSingleQuote = async ({ params }: any) => {
  const docRef = doc(db, `${process.env.REACT_APP_COLLECTION}`, params.slug);
  const postSnapshot = getDoc(docRef);

  try {
    const val = postSnapshot.then((doc) => {
      const res = doc.data();
      return res;
    });
    return val;
  } catch (error: any) {
    throw Error(error.Message);
  }
};
