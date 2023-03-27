import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
function Edit() {
  const [user, setUse] = useState({});
  const [people, setPeople] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [book, setBooking] = useState({});
  const [bookingss, setBookingss] = useState({
    bookingid: "",
    droneshotid: "",
    locationid: "",
    id: "",
  });
  const [istrue, setTrue] = useState(false);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name == "name" || name == "email" || name == "phone") {
      setUse({ ...user, [name]: value });
    } else {
      setBooking({ ...book, [name]: value });
    }
  };
  let { id } = useParams();

  async function handleSubmit(e) {
    e.preventDefault();
    const newPerson = { ...user, ...book };
    await fetch(`http://localhost:8080/update/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPerson),
    }).catch((error) => {
      // window.alert(error);
      // return;
    });
    const { name, email, phone } = newPerson;
    const newBook = { ...book };
    const { bookingid, locationid, droneshotid } = newBook;
    setPeople({
      ...people,
      name: [name],
      email: [email],
      phone: [phone],
    });
    setBookingss({
      ...bookingss,
      newBook,
    });
    setUse({ name: "", email: "", phone: "" });
    setBooking({ name: "", email: "", phone: "" });
    const x = { bookingid: "", locationid: "", droneshotid: "" };
    setTrue(true);
  }

  return (
    <Container>
      <Minic>
        <form onSubmit={(e) => handleSubmit(e)}>
          <fieldset>
            <legend>Personal Info</legend>

            <Div>
              <div>
                <label htmlFor="name">Name :</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="phone">Phone :</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{11}"
                  value={user.phone}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="email">Email :</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="bookingid">Booking_id :</label>
                <input
                  type="bookingid"
                  id="bookingid"
                  name="bookingid"
                  value={book.bookingid}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="locationid">Location_id :</label>
                <input
                  type="locationid"
                  id="locationid"
                  name="locationid"
                  value={book.locationid}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <div>
                <label htmlFor="droneshotid">Droneshot_id :</label>
                <input
                  type="droneshotid"
                  id="droneshotid"
                  name="droneshotid"
                  value={book.droneshotid}
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <button type="submit">Submit</button>
            </Div>
          </fieldset>
        </form>
      </Minic>
    </Container>
  );
}

export default Edit;
const Container = styled.div`
  display: flex;
  width: 100vw;
  height: calc(100vh - 70px);
  align-items: center;
  justify-content: center;
  background-image: url("https://media.istockphoto.com/id/187347653/photo/hexacopter-drones-flying.jpg?s=612x612&w=0&k=20&c=qQhnIhwnnGXit7OvM_MDSSeh4V5Ftnd41Ft9XNYwdz8=");
  background-size: cover;
  background-repeat: no-repeat;
`;
const Minic = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
  align-items: center;
  justify-content: center;

  form {
    width: 100%;
    height: 100%;
    fieldset {
      border-radius: 40px;
      background-color: blue;
      max-width: 500px;
      padding: 16px;
    }
    legend {
      background-color: gray;
      color: white;
      padding: 5px 10px;
    }
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  align-items: center;
  gap: 20px;
  justify-content: center;
  div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    label {
      width: 25%;
      color: white;
      font-weight: bold;
    }
    input {
    }
  }
`;
