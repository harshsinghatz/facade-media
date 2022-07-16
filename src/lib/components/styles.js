import styled from "styled-components";

export const MediaContainer = styled.div`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  position: relative;

  .occupy {
    height: 100%;
    width: 100%;
  }

  .play-button {
    position: absolute;
    height: 5rem;
    width: auto;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
`;
