import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
import InputsSingIn from "./InputsSingIn";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [disabled, setDisabled] = useState(false);
    let history = useHistory();

    function sendInfo() {
        setDisabled(true);
        const request = axios.post(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
            {
                email,
                name,
                image,
                password,
            }
        );
        request.then(() => {
            history.push("/");
            console.log("Consegui enviar os dados - sign in page");
        });
        request.catch(() => {
            setDisabled(false);
            alert("Erro ao enviar cadastro");
        });
    }

    return (
        <>
            <Logo>TrackIt</Logo>

            <InputsSingIn
                name={name}
                setName={setName}
                password={password}
                setPassword={setPassword}
                email={email}
                setEmail={setEmail}
                image={image}
                setImage={setImage}
                disabled={disabled}
            />

            <Button onClick={sendInfo}>Cadastrar</Button>
            <LogIn>
                <Link to="/">ja tem conta?faça login</Link>
            </LogIn>
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
    &:hover {
        cursor: pointer;
    }
`;

const LogIn = styled.div`
    width: fit-content;
    font-size: 14px;
    color: #52b6ff;
    margin: 0 auto;
    margin-top: 25px;

    &:hover {
        cursor: pointer;
    }
`;
