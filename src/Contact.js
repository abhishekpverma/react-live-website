import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fname: "",
    phone: "",
    email: "",
    message: ""
  });

  const inputEvent = (event) => {
    const {name, value} = event.target;
    setData((allVal) => {
      return {
        ...allVal,
        [name] : value,
      }
    })
  }

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My name is ${data.fname}, my phone number is ${data.phone}, my email is ${data.email}, I want to say is ${data.message}`
    )
  };



  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container cotact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">

            <form onSubmit={formSubmit}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                name="fname"
                value={data.fname}
                onChange={inputEvent}
                placeholder="Enter your name"
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Phone
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                name="phone"
                value={data.phone}
                onChange={inputEvent}
                placeholder="Mobile number"
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                name="email"
                value={data.email}
                onChange={inputEvent}
                placeholder="name@example.com"
              />
            </div>

            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Your Message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="message"
                value={data.message}
                onChange={inputEvent}
              ></textarea>
            </div>

            <div class="col-auto">
              <button type="submit" class="btn btn-outline-primary mb-3">
                Submit form
              </button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
