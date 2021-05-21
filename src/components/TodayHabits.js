import { useContext, useEffect, useState } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";

import Footer from "./Footer";
import Header from "./Header";
import TodayHabit from "./TodayHabit";
import dayjs from "dayjs";
import styled from "styled-components";
import "dayjs/locale/pt-br";
import CompleteContext from "../contexts/CompleteContext";

export default function TodayHabits({ todayHabits, setTodayHabits }) {
    const { user } = useContext(UserContext);
    const { completeTask, setCompleteTask } = useContext(CompleteContext);
    
    
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`,
        },
    };


    function RenderTodayHabits(){
        const request = axios.get(
            "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today",
            config
        );
        request.then((e) => {
            setTodayHabits(e.data);
            console.log("peguei a array com os habitos de hoje- Today page");
            console.log(e.data);
            console.log(e.data.filter((x) => x.done).length / e.data.length);
            setCompleteTask(e.data.filter((x) => x.done).length / e.data.length);
        });
        request.catch(() => {
            console.log(
                "erro ao pegar  array com os habitos de hoje - Today page"
            );
        });
    }


    useEffect(RenderTodayHabits, []);

        
    

    return (
        <>
            <Today>
                {`${dayjs().locale("pt-br").format("dddd")}, ${dayjs()
                    .locale("pt-br")
                    .format("D/MM")}`}
                {completeTask ? (
                    <p style={{color: "#8FC549"}}>{`${(completeTask*100).toFixed(0)}% dos hábitos concluídos`}</p>
                ) : (
                    <p>Nenhum hábito concluido ainda</p>
                )}
            </Today>
            <Header image={user.image} />
            <Container>
                {todayHabits.map((e) => (
                    <TodayHabit infoHabit={e} setTodayHabits={setTodayHabits} RenderTodayHabits={RenderTodayHabits} />
                ))}
            </Container>
            
            <Footer todayHabits={todayHabits} />
        </>
    );
}
const Container = styled.div`
    width: 100%;
    margin-top:28px;
    margin-bottom: 100px;
`
const Today = styled.div`
    width: 90%;
    margin: 0 auto;
    margin-top: 108px;
    font-size: 23px;
    color: #126ba5;

    p {
        font-size: 18px;
        color: black;
    }
`;
