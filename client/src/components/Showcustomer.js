import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { selectUser } from "../features/Customer/Customer";
function Showcustomer() {
  // const mystyle = {
  //   border: "5px solid black",
  //   "border-collapse": "collapse",
  // };
  const [records, setRecords] = useState([]);
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:8080/record/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const records = await response.json();
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);
  async function deletecustomer(id) {
    const newRecords = records.filter((el) => el._id !== id);
    setRecords(newRecords);
    await fetch(`http://localhost:8080/${id}`, {
      method: "DELETE",
    });
  }
  return (
    <>
      {records.length == 0 && window.alert("no customer")}
      {records.length > 0 && (
        <Container>
          <div>
            <table>
              <tr style={{ border: "5px solid black", background: "blue" }}>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Booking_id</th>
                <th>Location_id</th>
                <th>Droneshot_id</th>
                <th>Edit/Delete</th>
              </tr>

              {records.map((rec) => {
                return (
                  <>
                    <tr
                      style={{
                        border: "5px solid black",
                        background: "orange",
                      }}
                    >
                      <td>{rec.name}</td>
                      <td>{rec.email}</td>
                      <td>{rec.phone}</td>
                      <td>{rec.bookingid}</td>
                      <td>{rec.locationid}</td>
                      <td>{rec.droneshotid}</td>
                      <td>
                        <Link to={`/show/${rec._id}`}>
                          <button>Edit</button>
                        </Link>
                        <button
                          onClick={() => {
                            console.log(rec._id);
                            deletecustomer(rec._id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </table>
          </div>
        </Container>
      )}
    </>
  );
}

export default Showcustomer;
const Container = styled.div`
  width: 100vw;
  height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url("https://media.istockphoto.com/id/187347653/photo/hexacopter-drones-flying.jpg?s=612x612&w=0&k=20&c=qQhnIhwnnGXit7OvM_MDSSeh4V5Ftnd41Ft9XNYwdz8=");
  background-size: cover;
  background-repeat: no-repeat;
`;
