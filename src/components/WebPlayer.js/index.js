import React from "react";
import styled from "styled-components";
import { styled as materialStyled } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import PlayerControls from "./PlayerControls";
 

const MyButton = materialStyled(Button)({
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
});

const StyledButton = styled.button`
  background-color: red;
  color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px;
  &:hover {
    background-color: #5469d4;
  }
`;

const PlayerWrapper = styled.div`
  display: grid;
  grid-auto-columns: 25fr 75fr;
  grid-template-columns: 15fr 85fr;
  grid-template-rows: 1;
  background-color: #ababab;
  color: white;
  padding: 15px;
  height: 275px;
  width: 95vw;
  grid-gap: 16px;
  justify-content: start;
`;

const EpisodeThumbnail = styled.img`
  background-color: #ababab;
  color: white;
  height: 275px;
  border-radius: 5px;
`;
const ThumbnailWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const ControlWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const WebPlayer = ({audioFile, thumbnail}) => {
  return (
    <div>
      <PlayerWrapper>
        <ThumbnailWrapper>
          <EpisodeThumbnail src={thumbnail} />
        </ThumbnailWrapper>
        <ControlWrapper>
          <PlayerControls audioFile={audioFile} />
        </ControlWrapper>
      </PlayerWrapper>
    </div>
  );
};

export default WebPlayer;
