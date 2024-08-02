import React, { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function AdminUpdate() {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const params = useParams();
  console.log("params single user: ", params);
  const { authorizationToken } = useAuth();
  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      console.log(`users single data : ${data}`);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  // to update the data dynamically
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );
      if (response.ok) {
        toast.success("updated successfully");
      } else {
        toast.error("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className="main-heading">Update User Data</h1>
      </div>
      <div className="container grid grid-two-cols">
        {/* contact form*/}
        <section className="section-form">
          <form action="" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                placeholder="username"
                id="username"
                required
                autoComplete="off"
                value={data.username}
                onChange={handleInput}
              />
            </div>

            <div>
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                placeholder="enter your email"
                id="email"
                required
                autoComplete="off"
                value={data.email}
                onChange={handleInput}
              />
            </div>

            <div>
              <label htmlFor="message">Mobile</label>
              <input
                type="phone"
                name="phone"
                id="phone"
                autoComplete="off"
                value={data.phone}
                onChange={handleInput}
                required
              ></input>
            </div>

            <br />

            <button type="submit" className="btn btn-submit">
              Update
            </button>
          </form>
        </section>
      </div>
    </section>
  );
}

export default AdminUpdate;
