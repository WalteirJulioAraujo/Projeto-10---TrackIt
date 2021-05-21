import { useContext } from 'react'
import UserContext from "../contexts/UserContext"
import Footer from './Footer';
import Header from './Header';

export default function TodayHabits(){
    const { user } = useContext(UserContext);
    console.log(user)
    return (
        <>
            <Header image={ user.image }/>
            <Footer />
        </>
    )
}