import styled from "styled-components";
import { FaCheckSquare } from "react-icons/fa";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function TodayHabit({
    infoHabit,
    setTodayHabits,
    RenderTodayHabits,
}) {
    const { user } = useContext(UserContext);

    function DoneOrNot() {
        if (!infoHabit.done) {
            const request = axios.post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${infoHabit.id}/check`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                }
            );
            request.then(() => {
                console.log("habito marcado como feito");
                RenderTodayHabits();
            });
            request.catch(() => console.log("erro ao marcar o habito"));
        } else {
            const request = axios.post(
                `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${infoHabit.id}/uncheck`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                }
            );
            request.then(() => {
                console.log("Habito desmarcado");
                RenderTodayHabits();
            });
            request.catch(() => console.log("erro ao desmarcar o habito"));
        }
    }

    return (
        <Habit>
            <HabitName
                done={infoHabit.done}
                current={infoHabit.currentSequence}
                highest={infoHabit.highestSequence}
            >
                <h1>{infoHabit.name}</h1>
                <span className="current">
                    Sequência atual: {infoHabit.currentSequence} dias
                </span>
                <span className="highest">
                    Seu recorde: {infoHabit.highestSequence} dias
                </span>
            </HabitName>
            <Box done={infoHabit.done} onClick={DoneOrNot}>
                <FaCheckSquare className="Icon" />
            </Box>
        </Habit>
    );
}

const Habit = styled.div`
    width: 90%;
    height: 94px;
    background-color: #fff;
    margin: 0 auto 10px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HabitName = styled.div`
    font-size: 20px;
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    color: #666666;

    h1 {
        margin-bottom: 7px;
    }
    span {
        margin-top: 2px;
        font-size: 17px;
        color: #666666;
    }
    .current {
        color: ${(props) => (props.done ? "#8FC549" : "#666666")};
    }
    .highest {
        color: ${(props) =>
            props.current === props.highest && props.done
                ? "#8FC549"
                : "#666666"};
    }
`;

const Box = styled.div`
    width: 69px;
    height: 69px;
    margin-right: 10px;

    .Icon {
        width: 100%;
        height: 100%;
        color: ${(props) => (props.done ? "#8FC549" : "#EBEBEB")};
    }
`;
