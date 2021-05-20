import { useContext } from 'react'
import UserContext from "../contexts/UserContext"

export default function TodayHabits(){
    const { user } = useContext(UserContext);
    console.log(user)
    return (
        <div>TodayHabits</div>
    )
}