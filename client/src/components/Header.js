import React from "react";
import styled from "styled-components";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import HomeIcon from "@mui/icons-material/Home";
import PreviewIcon from "@mui/icons-material/Preview";
import { Link } from "react-router-dom";
function Header() {
  let mystyle = {
    color: "white",
    backgroundColor: "black",
    padding: "10px",
    fontFamily: "Arial",
  };
  let style = {
    "text-decoration": "none",
  };
  return (
    <Navcontainer>
      <Link to="/">
        <Logo>
          <img src="https://www.droame.com/assets/images/WhiteDroameLogoWithoutBG.png"></img>
        </Logo>
      </Link>
      <Form
        onClick={(e) => {
          console.log(e.target);
        }}
      >
        <Btn>
          <Link to="/">
            <div>
              <HomeIcon style={mystyle}></HomeIcon>
              <Span>
                <span>Home</span>
              </Span>
            </div>
          </Link>
        </Btn>
      </Form>
      <Form
        onClick={(e) => {
          console.log(e.target);
        }}
      >
        <Btn>
          <Link to="/detail">
            <div>
              <AddCircleOutlinedIcon style={mystyle}></AddCircleOutlinedIcon>
              <Span>
                <span>Add Customer</span>
              </Span>
            </div>
          </Link>
        </Btn>
      </Form>
      <Form
        onClick={(e) => {
          console.log(e.target);
        }}
      >
        <Btn>
          <Link to="show" style={style}>
            <div>
              <PreviewIcon style={mystyle}></PreviewIcon>
              <Span>
                <span>Show Customer</span>
              </Span>
            </div>
          </Link>
        </Btn>
      </Form>
    </Navcontainer>
  );
}

export default Header;
const Navcontainer = styled.div`
  background: black;
  height: 70px;
  display: flex;
  display: fixed;
`;
const Logo = styled.div`
  img {
    height: 55px;
  }
`;
const Btn = styled.div``;
const Form = styled.div`
  display: flex;
  align-items: center;
  justify-conttent: center;
  margin-left: 2%;
  div {
    display: flex;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
      object-fit: contain;
    }
  }
`;
const Span = styled.div`
  color: white;
`;
