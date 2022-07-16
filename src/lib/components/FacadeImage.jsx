import React, { useEffect, useRef, useState } from "react";
import { MediaContainer } from "./styles";

const originalMediaTypes = ["VIDEO", "EMBED", "IMAGE"];
const FacadeImage = ({
  videoSrc,
  embedLink,
  imgSrc,
  facadeImgSrc,
  dimensions = { height: 100, width: 200 },
}) => {
  const [isOrignalLoading, setIsOrignalLoading] = useState(true);
  const mediaContainer = useRef(null);
  useEffect(() => {
    if (!mediaContainer) return;

    const image = new Image();
    let playButton;
    image.src = facadeImgSrc;
    image.classList.add("occupy");
    if (!mediaContainer.current.hasChildNodes())
      mediaContainer.current.append(image);

    if (
      (embedLink || videoSrc) &&
      !mediaContainer.current.querySelector(".play-button")
    ) {
      console.log("i am here");
      playButton = new Image();
      playButton.classList.add("play-button");
      playButton.src =
        "https://cdn.pixabay.com/photo/2016/11/18/11/17/youtube-1834016__340.png";
      mediaContainer.current.append(playButton);
    }

    if (embedLink && playButton) {
      playButton.addEventListener("click", () => {
        const iframe = document.createElement("iframe");
        iframe.setAttribute("class", "iframe-el occupy");
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "");
        iframe.setAttribute("allowautoplay", "1");
        iframe.setAttribute("src", embedLink);

        mediaContainer.current.innerHTML = "";
        mediaContainer.current.appendChild(iframe);
      });
    }

    if (videoSrc && playButton) {
      playButton.addEventListener("click", () => {
        const video = document.createElement("video");
        video.src = videoSrc;
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.classList.add("occupy");

        mediaContainer.current.innerHTML = "";
        mediaContainer.current.appendChild(video);
      });
    }

    if (imgSrc) {
      const origImage = new Image();
      origImage.src = imgSrc;
      origImage.classList.add("occupy");
      origImage.addEventListener("load", () => {
        mediaContainer.current.innerHTML = "";
        mediaContainer.current.appendChild(origImage);
      });
    }
  }, []);
  return (
    <MediaContainer
      height={dimensions.height}
      width={dimensions.width}
      ref={mediaContainer}
    ></MediaContainer>
  );
};

export default FacadeImage;
