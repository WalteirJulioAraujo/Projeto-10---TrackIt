import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Footer(){
    return(
        <Container>
            <span><Link to="/habitos">Hábitos</Link></span>
            <span><Link to="/hoje">Hoje</Link></span>
            <span><Link to="/historico">Histórico</Link></span>
        </Container>
    );
}

const Container = styled.div`
    width:100%;
    height: 70px;
    position: fixed;
    left: 0px;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #126ba5;

    span{
        font-size: 18px;
        color: #FFF;
    }

`