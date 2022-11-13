import React, { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Eform from "./Eform";
import EduForm from "./EduForm";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function EmployeeRegis() {
  const navigate = useNavigate();
  const current = new Date();
  const date = `${current.getFullYear()}-${current.getMonth() + 1
    }-${current.getDate()}`;
  const location = useLocation();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    address: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    isUpdated: true,
  });

  const handleValidation = (e) => {
    e.preventDefault();
    const validateEmpty =
      formData.name &&
        formData.address &&
        formData.dob &&
        formData.gender &&
        formData.email &&
        formData.phone
        ? true
        : false;
    const validateEmail = formData.email.match(
      /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i
    );
    const validateDate = formData.dob < date;

    if (validateEmpty === false) {
      toast.error("Fill all the fields in the form.");
    } else if (validateEmail === null) {
      toast.error("Invalid Email.");
      e.target.inputEmail.classList.add("text-danger");
    } else if (validateDate === false) {
      toast.error("Invalid Date!");
      e.target.inputDate.classList.add("text-danger");
    } else {
      handleSubmit(
        formData.id,
        formData.isUpdated ? "post" : "put",
        formData.isUpdated ? "added." : "updated."
      );
    }
  };

  useEffect(() => {
    if (location.state?.locnData) setFormData(location.state?.locnData);
  }, [location]);

  const handleSubmit = async (id, method, type) => {
    const promise = toast.loading("Uploading Data...");
    axios({
      method: method,
      url: `https://634d2e67f5d2cc648e9eb0da.mockapi.io/hrdata/${id}`,
      timeout: 10000,
      data: {
        name: formData.name,
        address: formData.address,
        dob: formData.dob,
        gender: formData.gender,
        email: formData.email,
        phone: formData.phone,
      },
    })
      .then((response) => {
        toast.update(promise, {
          render: "Employee details " + type,
          type: "success",
          isLoading: false,
          autoClose: 1000,
        });
        console.log("success", response.status);
        setFormData({
          id: "",
          name: "",
          address: "",
          dob: "",
          gender: "",
          email: "",
          phone: "",
          isUpdated: true,
        });
      })
      .catch((error) => {
        toast.update(promise, {
          render: "Could not" + type + "employee details!",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
        if (error.response) {
          console.log(error.response.status, "status");
        } else if (error.request) {
          console.log(error.request, "request");
        } else {
          console.log("Error", error.message, "message");
        }
      });
  };

  return (
    <div className="employeeDash">
      <div className="title text-center">
        <h2>Employee Registration Form</h2>
      </div>
      <div className="container mt-5">
        <div
          className="btn border btn-light mb-3"
          onClick={() => navigate("/")}
        >
          Back
        </div>
        <Eform formData={formData} setFormData={setFormData} />
        <EduForm />
        <button className="btn btn-primary" onClick={handleValidation}>
          Submit
        </button>
      </div>
    </div>
  );
}