import styled from "styled-components";
import { Search } from "../Search/Search";

const Container = styled.div`
  position: relative;
  text-align: center;
  color: #000;
  width: 100%;
  height: 100%;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Text = styled.h1`
  font-size: calc(3rem + 6*(100vw - 375px)/1065);
  font-weight: 700;
  line-height: 1.1;
`;

const IF = styled.iframe`
    width: 100%;
    height: 100%;
    opacity: 0.9;
`;


const CallToAction = () => {
    return (
        <Container>
            <IF
                title="backgroundVideo"
                src="https://player.vimeo.com/video/760390068?h=b635209147&dnt=1&loop=1&background=1&app_id=122963"
                frameBorder="0"
                allowFullScreen>
            </IF>
            <TextContainer>
                <Text>Welcome to The Met API</Text>
                <Search />
            </TextContainer>
        </Container>
    )
}

export default CallToAction