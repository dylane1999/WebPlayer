import React from "react";
import WebPlayer from "./WebPlayer.js";
import styled from "styled-components";
import mindsetMastery from "../assets/mindsetMastery.jpg";

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

export const App = () => {
  return (
    <Root>
      <WebPlayer thumbnail={mindsetMastery} audioFile={"http://techslides.com/demos/samples/sample.mp3"} />
    </Root>
  );
};

export default App;
