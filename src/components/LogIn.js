import { useState } from 'react';
import styled from 'styled-components'

export default function LogIn(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    console.log(email);
    console.log(password);
    
    return (
        <>
        <Logo>
            TrackIt
        </Logo>
        <Inputs>
            <input type= "text" placeholder= "email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <input type= "password" placeholder= "senha" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </Inputs>
        </>
    )
}




const Logo = styled.div`
    width: fit-content;
    font-family: 'Playball', cursive;
    font-size: 70px;
    margin: 0 auto;
    color: #126BA5;
`;

const Inputs = styled.div`
    width: fit-content;
    margin: 0 auto;
    input{
        width: 303px;
        height: 45px;
        background-color: #fff;
        border: 1px solid #d4d4d4;
        border-radius: 5px;
        color: #DBDBDB;
        display: flex;
        margin-bottom: 6px;
    }
    input::placeholder{
        font-family: 'Lexend Deca', sans-serif;
    }
`;