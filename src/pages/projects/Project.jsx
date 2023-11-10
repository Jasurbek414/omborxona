import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";

function Project() {
  const [show, setShow] = useState(false);
  const [data, setData] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newRecord = {
      name: event.target.name.value,
      address: event.target.address.value,
      sana: event.target.sana.value,
      soni: event.target.soni.value,
    };

    try {
      await axios.post("/api/records", newRecord);
      const updatedData = await fetchData();
      setData(updatedData);
      handleClose();
    } catch (error) {
      console.error(error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/records");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchDataAndSetData = async () => {
      const result = await fetchData();
      setData(result);
    };
    fetchDataAndSetData();
  }, []);

  return (
    <div className="container">
      <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
        <div className="row">
          <div className="col-sm-3 mt-5 mb-4 text-gred">
            <div className="search">
              <form className="form-inline">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
          <div
            className="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
            style={{ color: "green" }}
          >
            <h2>
              <b>Ombor Details</b>
            </h2>
          </div>
          <div className="col-sm-3 offset-sm-1 mt-5 mb-4 text-gred">
            <Button variant="primary" onClick={handleShow}>
              Add New
            </Button>
          </div>
        </div>

        <div className="row">
          <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Sana</th>
                  <th>Soni</th>
                  <th>tahrirlash</th>
                </tr>
              </thead>
              <tbody>
                {data?.map?.((record) => (
                  <tr key={record.id}>
                    <td>{record.id}</td>
                    <td>{record.name}</td>
                    <td>{record.address}</td>
                    <td>{record.sana}</td>
                    <td>{record.soni}</td>
                    <td className="d-flex justify-content-around">
                      <a
                        href="#"
                        className="view"
                        title="View"
                        data-toggle="tooltip"
                        style={{ color: "#10ab80" }}
                      >
                        <i className="material-icons">&#xE417;</i>
                      </a>
                      <a href="#" className="edit" title="Edit" data-toggle="tooltip">
                        <i className="material-icons">&#xE254;</i>
                      </a>
                      <a
                        href="#"
                        className="delete"
                        title="Delete"
                        data-toggle="tooltip"
                        style={{ color: "red" }}
                      >
                        <i className="material-icons">&#xE872;</i>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Model Box */}
      <div className="model_box">
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add Record</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  placeholder="Enter Address"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  name="sana"
                  className="form-control"
                  placeholder="Enter Sana"
                />
              </div>
              <div className="form-group mt-3">
                <input
                  type="text"
                  name="soni"
                  className="form-control"
                  placeholder="Enter Soni"
                />
              </div>

              <button type="submit" className="btn btn-success mt-4">
                Add New
              </button>
            </form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Yopish
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}

export default Project;
