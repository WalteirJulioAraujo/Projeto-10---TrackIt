import Header from "./Header"
import Footer from "./Footer"
import { useContext } from "react"
import UserContext from "../contexts/UserContext"
import styled from 'styled-components'

export default function History(){
    const { user } = useContext(UserContext);

    return(
        <>
        <Header image={ user.image }/>
        <Title>Histórico</Title>
        <Container>Em breve você poderá ver o histórico dos seus hábitos aqui!</Container>
        <Footer />
        </>
    )
}

const Title = styled.div`
    color:#126BA5;
    font-size: 23px;
    width: 90%;
    margin: 110px auto 17px auto;

`;

const Container = styled.div`
    font-size: 18px;
    color:#666666;
    width: 90%;
    margin:0 auto;
`;