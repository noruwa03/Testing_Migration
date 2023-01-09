import { useEffect, useState } from "react";
import { serverTimestamp, addDoc } from "firebase/firestore";

import { colRef } from "../App";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const Contact = () => {
  // Services Type
  interface ServiceType {
    name: string;
    checked: boolean;
  }

  // Services Array
  const allServices: ServiceType[] = [
    {
      name: "Development",
      checked: false,
    },
    {
      name: "Web Design",
      checked: false,
    },
    {
      name: "Marketing",
      checked: false,
    },
    {
      name: "Branding",
      checked: false,
    },
    {
      name: "SEO",
      checked: false,
    },
  ];

  const fields = {
    fullname: "",
    email: "",
    phone_no: "",
    message: "",
  };

  const [detail, setDetail] = useState(fields);
  let [services, setServices] = useState(allServices);
  const [finalSelectedService, setFinalSelectedService] = useState<
    any | null
  >();

  // Services Checkbox Handler
  const servicesHandler = (index: any) => {
    setServices(
      services.map((serv, currentIndex) =>
        currentIndex === index ? { ...serv, checked: !serv.checked } : serv
      )
    );
  };

  // useEffect function from React to set updated services array
  useEffect(() => {
    const realChecked = services.filter((data) => data.checked === true);
    setFinalSelectedService(realChecked);
  }, [services]);

  const handleChange = (e: any) => {
    const _name = e.currentTarget.name;
    const _value = e.currentTarget.value;

    setDetail((prev) => {
      return { ...prev, [_name]: _value };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Get Collection Data
    addDoc(colRef, {
      name: detail.fullname,
      email: detail.email,
      phone_no: detail.phone_no,
      message: detail.message,
      services: finalSelectedService,
      createdAt: serverTimestamp(),
    })
      .then(() => {
        toast.info("Quote submitted successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setTimeout(() => {
          window.location.reload();
        }, 5000);
      })
      .catch((err) => {
        throw Error(err.Message);
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="contact-page">
        <div className="row align-items-start justify-content-between">
          <div className="col-lg-6">
            <div className="contact-us">Contact us</div>
            <h2>Lets chat!</h2>
            <div className="box-content">
              <p className="text-lead">
                Please fill the form below to receive a quote for your project.
                Feel free to add as much detail as needed.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="login">
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Your name</label>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control-input "
                    placeholder="Enter name here..."
                    required
                    id="name"
                    onChange={handleChange}
                    name="fullname"
                  />
                </div>

                <label htmlFor="email" className="mt-4">
                  Email
                </label>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control-input"
                    placeholder="Enter your email here..."
                    required
                    id="email"
                    onChange={handleChange}
                    name="email"
                  />
                </div>

                <label htmlFor="phone_number" className="mt-4">
                  Phone No
                </label>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control-input"
                    placeholder="(Optional)"
                    id="phone_number"
                    onChange={handleChange}
                    name="phone_no"
                  />
                </div>

                <div className="services">
                  <label htmlFor="services" className="mt-4">
                    What services do you need help with?
                  </label>
                  <div className="service-list">
                    {services.map((service, index) => (
                      <div className="form-item" key={service.name}>
                        <input
                          type="checkbox"
                          id={`checkbox-${index}`}
                          className="form-input"
                          value={service.name}
                          name="services"
                          onChange={() => servicesHandler(index)}
                        />
                        <label
                          htmlFor={`checkbox-${index}`}
                          className="form-label"
                        >
                          <div className="form-content">
                            <span className="form-name">{service.name}</span>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <label htmlFor="message" className="mt-4">
                  What can we help you with
                </label>
                <div className="form-group">
                  <textarea
                    onChange={handleChange}
                    name="message"
                    className="form-control-textarea "
                    id="message"
                    placeholder="Enter message here..."
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="form-control-submit-button">
                    Submit
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

export default Contact;
