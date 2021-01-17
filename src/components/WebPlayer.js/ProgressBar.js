import React from "react";
import { styled as materialStyled } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import styled from "styled-components";

const EpisodeProgress = materialStyled(LinearProgress)({
  height: 16,
  borderRadius: 5,
  width: "60%",
});

const ProgressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  height: 100%;
  width: 100%;
  padding: 16px;
`;

const Spacing = styled.div`
  padding: 8px;
`;

const ProgressBar = ({currentTime, endTime}) => {
  return (
    <ProgressWrapper>
        <EpisodeProgress variant="determinate" value={(currentTime/endTime)*100} />
      <Spacing />
      <Typography variant="body2" color="textSecondary">{`${Math.round(currentTime)}/ ${endTime}`}</Typography>
    </ProgressWrapper>
  );
};

export default ProgressBar;
  