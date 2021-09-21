import { Link } from 'react-router-dom'
import homeimg from '../assets/images/home.png'
import logo from '../assets/images/logo.png'

export default function Home(){
    
    return (
        
        <div className="homepage" style={{"background-color":"green"}}>
            <div style={{width:"100%","height":"20%"}}>
                <img className="logo-img" src={logo} alt="tesla-logo"></img>
                
            </div>
            <div style={{width:"100%","height":"60%","text-align":"center"}}>
                <h1>Electric Cars, Solar & Clean Energy</h1>
            </div>
            
            <div className="btn-div">
                <Link to="/cars"><button className="btn-div-btn">ALL CARS</button></Link>
            </div>
        </div>
       
    )
}