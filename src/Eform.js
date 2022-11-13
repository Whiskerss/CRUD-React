import React from "react";
import { Form } from "react-bootstrap";

const genderList = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" },
];

export default function Eform(props) {
  const { formData, setFormData } = props;

  const handleChange = (e) => {
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...formData };
    newFormData[fieldName] = fieldValue;
    setFormData(newFormData);
  };

  return (
    <div>
      <form className="row g-3">
        <div className="col-md-6">
          <label className="form-label" id="lableName">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="inputName"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            id="inputAddress"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label" id="labelDOB">
            Date of Birth
          </label>
          <Form.Control
            type="date"
            name="dob"
            id="inputDate"
            placeholder="Date of Birth"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6 mt-5">
          <label className="form-label">Gender</label>
          {genderList.map((x, i) => (
            <label className="form-check form-check-inline mx-4" key={i}>
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id={i}
                value={x.value}
                checked={formData.gender === x.value}
                onChange={handleChange}
              />{" "}
              {x.label}
            </label>
          ))}
        </div>
        <div className="col-md-6">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="inputEmail"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Phone Number</label>
          <input
            type="int"
            className="form-control"
            name="phone"
            id="inputPhone"
            value={formData.phone}
            onChange={handleChange}
            
          />
        </div>
      </form>
    </div>
  );
}
