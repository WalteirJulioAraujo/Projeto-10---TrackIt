import Header from "./Header"
import Footer from "./Footer"
import { useContext } from "react"
import UserContext from "../contexts/UserContext"

export default function History(){
    const { user } = useContext(UserContext);

    return(
        <>
        <Header image={ user.image }/>
        <Footer />
        </>
    )
}