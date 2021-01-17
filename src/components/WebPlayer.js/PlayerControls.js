import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PauseIcon from "../../Icons/PauseIcon";
import PlayIcon from "../../Icons/PlayIcon";
import LinearProgress from "@material-ui/core/LinearProgress";
import ProgressBar from "./ProgressBar";
 


const EpisodeInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const ControlsWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  height: 100%;
  width: 100%;
`;

const EpisodeHeader = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  color: #000000;
  padding-bottom: 8px;
`;

const EpisodeTitle = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  color: #000000;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding-left: 16px;
`;

const PlayControlsWrapper = styled.div`
  cursor: pointer;
`;

const Player = styled.audio`
  cursor: pointer;
  border: none;
  color: #000000;
  background-color: #000000;
`;


const playAudio = async (episodeAudio) => {
  try{
    await episodeAudio.play();
  }
  catch(error){
    console.log(error);
  }
}

const pauseAudio = async (episodeAudio) => {
  try{
    await episodeAudio.pause();
  }
  catch(error){
    console.log(error);
  }
}



const PlayerControls = ({audioFile}) => {
  const [Playing, setPlaying] = useState(false);
  const [episodeAudio] = useState(new Audio(audioFile));
  const [endTime, setEndTime] = useState(1)
  const [currentTime, setCurrentTime] = useState(0)

  // const [audioFile, setAudioFile] = useState(null)

  const togglePlay = () => {
    setPlaying(!Playing);
    playAudio(episodeAudio)
  };

  function str_pad_left(string,pad,length) {
    return (new Array(length+1).join(pad)+string).slice(-length);
}


  useEffect(() => {
    if (Playing){
      playAudio(episodeAudio)
      setEndTime(Math.floor(episodeAudio.duration))
      // setCurrentTime(episodeAudio.currentTime)
      setTimeout(setCurrentTime(episodeAudio.currentTime+.5), 500);
    }
    else{
      pauseAudio(episodeAudio)
    }
  }, [Playing])

  useEffect(() => {
    episodeAudio.load()
  }, [episodeAudio])

  // useEffect(() => {
  //   if (Playing){
  //     setInterval(() => {
  //       setCurrentTime(episodeAudio.currentTime + .5)
  //       if( currentTime >= endTime){
  //         clearInterval()
  //       }
  //     }, 500);
  //   }
  // }, [currentTime])

  useEffect(() => {
    const updateProgress = () => setCurrentTime(currentTime + .1)
    if (currentTime < 3 && Playing) {
      setTimeout(updateProgress, 125)
    }
  }, [currentTime])


  return (
    <EpisodeInfoWrapper>
      <TitleWrapper>
        <EpisodeHeader>Mindset Mastery | S1:EP21 </EpisodeHeader>
        <EpisodeTitle>Episode Title #12</EpisodeTitle>
      </TitleWrapper>

      <ControlsWrapper>
        <PlayControlsWrapper onClick={() => togglePlay()}>
          {Playing ? <PauseIcon /> : <PlayIcon />}
        </PlayControlsWrapper>
        <ProgressBar currentTime={currentTime} endTime={endTime} />
      </ControlsWrapper>
    </EpisodeInfoWrapper>
  );
};

export default PlayerControls;
