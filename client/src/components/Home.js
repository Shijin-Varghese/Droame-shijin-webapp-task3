import React from "react";
import styled from "styled-components";
function Home() {
  let mystyle = {
    display: "block",
    width: "300px",
    height: "1995px",
  };
  return (
    <Container>
      <Leftcontainer></Leftcontainer>
      <App>
        <Lapp>
          <img src="https://www.droame.com/static/media/mockupOnboarding.d518ff8c0135136a88a4.png"></img>
        </Lapp>
        <Rapp>
          <div>
            <p>One App for your Special Memories</p>
          </div>
          <div>
            <p>
              Revisit your favourite moments in life, the way you lived them!
            </p>
          </div>
        </Rapp>
      </App>
      <Presence>
        <div>
          <p>Our Presence</p>
        </div>

        <Divc>
          <div>
            <img src="https://www.droame.com/static/media/jaipurLogo.6b91e78750374f74f4e6.jpeg"></img>
          </div>
          <div>
            <img src="https://www.droame.com/static/media/mumbaiLogo.a4e44f7c411a18be0244.webp"></img>
          </div>
          <div>
            <img src="https://www.droame.com/static/media/bangaloreLogo.0dc5cd9ab7afd7ae961c.jpeg"></img>
          </div>
          <div>
            <img src="https://www.droame.com/static/media/udaipurLogo.8c0341fb077359b73615.png"></img>
          </div>
        </Divc>
      </Presence>
      <Howitwork>
        <Lc>
          <Lcd>
            <img src="https://www.droame.com/static/media/3phones.5c62732565fc3354bbce.jpeg"></img>
          </Lcd>
        </Lc>
        <Rc>
          <Div>
            <div>
              <p>Download our app</p>
            </div>
            <div>
              <p>Visit your favourite location</p>
            </div>
            <div>
              <p>Select the location</p>
            </div>
            <div>
              <p>Choose your shot</p>
            </div>
            <div>
              <p>Watch your drone fly to you</p>
            </div>
          </Div>
        </Rc>
      </Howitwork>
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: calc(100vh - 70px);
  width: 100vw;
  display: flex;
  // flex-direction: column;
  justify-content: center;

  align-items: center;
  position: sticky;
  background: pink;
  //   overflow-y: visible;
`;
const Leftcontainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  top: 0px;
  background-image: url("https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJvbmV8ZW58MHx8MHx8&w=1000&q=80");
  object-fit: contain;
  background-repeat: no-repeat;
  background-size: cover;
  height: 700px;
  width: 100vw;
  align-items: center;
`;
const Text = styled.div`
  height: 50%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    height: 100%;
    width: 100%;
    font-size: 30px;
    color: white;
    font-weight: bold;
  }
`;
const App = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: 700px;
  height: 700px;
  width: 100vw;
  background: white;
`;
const Lapp = styled.div`
  width: 30vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Rapp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  position: relative;
  div:nth-of-type(1) {
    max-height: 50%;
    position: absolute;
    top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      width: 55%;
      height: 80%;
      align-self: center;
      font-weight: 900;
      color: black;
      font-size: 70px;
    }
  }
  div:nth-of-type(2) {
    position: absolute;
    top: 500px;
    max-height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      height: 50%;
      align-self: center;
      color: blue;
      font-size: 20px;
    }
  }
`;
const Presence = styled.div`
  border: 2px solid black;
  overflow-y: hidden;
  position: absolute;
  top: 1410px;
  width: 100vw;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: blue;
  div {
    p {
      color: white;
      font-size: 40px;
      height: 60%;
    }
  }
`;
const Divc = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto;
  gap: 10px;
  width: 50vw;
  padding-bottom: 0;

  border: 2px solid blue;
  div {
    width: 85%;
    height: 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      background: white;
    }
  }
`;
const Howitwork = styled.div`
  display: flex;
  position: absolute;
  top: 2100px;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 100vw;
  z-index: 2000;
`;
const Lc = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Rc = styled.div`
  border-left: 2px solid black;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Lcd = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
`;
// const Rightcontainer = styled.div`
//   min-width: 300px;
//   width: 40vw;
//   height: 50vh;
//   div {
//     position: relative;
//     width: 100%;
//     height: 300vh;
//     overflow: hidden;
//     pointer-events: auto;
//     z-index: 100;
//     div {
//       width: 100%;
//       height: 100%;
//     }
//   }
// `;
