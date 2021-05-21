import { useState, useEffect, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import UserContext from "../contexts/UserContext" 
import Loader from "react-loader-spinner";

export default function LogIn({setBackgroundWhite}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);
    let history = useHistory();
    const { setUser } = useContext(UserContext);
    

    function sendInfo() {
        setDisabled(true);
        const request = axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login",
            {
                email,
                password,
            }
        );
        request.then((e) => {
            setUser(e.data);
            history.push("/hoje");
            console.log("consegui acessar - log in page");
        });
        request.catch(() => {
            alert("Erro ao se conectar");
            setDisabled(false);
        });

        setEmail("");
        setPassword("");
    }

    return (
        <>
            <Logo>TrackIt</Logo>

            <Inputs>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={disabled}
                />
                <input
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={disabled}
                />
            </Inputs>
            {!disabled?<Button onClick={sendInfo}>Entrar</Button>:<LoaderContainer><Loader type="ThreeDots" color="#00BFFF" background-color='#52b6ff' height={40} width={80} /></LoaderContainer>}
            <SignIn><Link to="/cadastro">Não tem uma conta? Cadastre-se!</Link></SignIn>
        </>
    );
}

const Logo = styled.div`
    width: fit-content;
    font-family: "Playball", cursive;
    font-size: 70px;
    margin: 0 auto;
    color: #126ba5;
    margin-top: 160px;
`;

const Inputs = styled.div`
    width: fit-content;
    margin: 0 auto;
    margin-top: 32px;
    input {
        width: 303px;
        height: 45px;
        background-color: #fff;
        border: 1px solid #d4d4d4;
        border-radius: 5px;
        color: black;
        display: flex;
        margin-bottom: 6px;
    }
    input::placeholder {
        font-family: "Lexend Deca", sans-serif;
    }
`;

const Button = styled.div`
    width: 120px;
    height: 40px;
    text-align: center;
    background-color: #52b6ff;
    color: #fff;
    margin: 0 auto;
    padding-top: 10px;
    display: block;
    border-radius: 5px;
    &:hover{
        cursor: pointer;
    }
`;

const SignIn = styled.div`
    width: fit-content;
    font-size: 14px;
    color: #52b6ff;
    margin: 0 auto;
    margin-top: 25px;

    &:hover{
        cursor: pointer;
    }
`;

const LoaderContainer= styled.div`
    width:fit-content;
    height: 40px;
    margin: 0 auto;

`
