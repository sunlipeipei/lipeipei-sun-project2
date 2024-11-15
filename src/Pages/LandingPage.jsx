import Header from "../Components/Header"
import './Pages.css'

export default function LandingPage(){
    return(
        <div className="container">
            <Header />
            <div className='ghost'>👻</div>
            <h3>Welcome to the Catch the Ghost Game!</h3>
            Pick a difficulty level to begin playing!
        </div>
    )
}