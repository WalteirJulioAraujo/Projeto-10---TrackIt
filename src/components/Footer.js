import styled from "styled-components";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import { useContext } from "react";
import CompleteContext from "../contexts/CompleteContext";

export default function Footer({ todayHabits }) {

    const { completeTask } = useContext(CompleteContext);
    console.log(completeTask)
    return (
        <Container>
            <span>
                <Link to="/habitos">Hábitos</Link>
            </span>
            <div>
                <Link to="/hoje">
                    <CircularProgressbar
                        value={ (completeTask*100).toFixed(0) }
                        text={"Hoje"}
                        backgroundPadding={6}
                        background
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent",
                        })}
                    />
                </Link>
            </div>
            <span>
                <Link to="/historico">Histórico</Link>
            </span>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    left: 0px;
    bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #126ba5;

    span {
        font-size: 18px;
        color: #fff;
    }
    div {
        width: 90px;
        padding-bottom: 30px;
    }
`;
