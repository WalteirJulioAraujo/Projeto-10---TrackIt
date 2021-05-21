import styled from "styled-components";

export default function Header({ image }) {
    return (
        <Container>
            <Logo>TrackIt</Logo>

            <img
                src={image}
                alt="user image"
            />
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #126ba5;
    position: fixed;
    left: 0px;
    top: 0px;

    img {
        width: 51px;
        height: 51px;
        border-radius: 100px;
        margin-right: 18px;
    }
`;

const Logo = styled.div`
    width: fit-content;
    font-family: "Playball", cursive;
    font-size: 39px;
    color: #fff;
    margin-left: 18px;
`;
