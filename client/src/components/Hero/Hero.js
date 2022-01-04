import { Container } from "react-bootstrap";
import styled from "styled-components"

const HeroComponent = styled.header`
    padding: 5rem 2rem;
    height: 93.1vh;
    width: 45vw;
    background-size: cover;
    background-position: bottom;
    background-image:
        radial-gradient(transparent, black),
        url("https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80");
    `;
const Heading = styled.h1`
    font-size: 3vw;
    margin: 0 0 10 0;
`

const Hero = ()=>{
    return (
        <HeroComponent>
            <Container className="text-white">
                    <Heading>
                        Register
                    </Heading>
            </Container>
            
        </HeroComponent>
    )
};

export default Hero;