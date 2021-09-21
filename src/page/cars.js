import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import modelSimg from '../assets/images/modelS.png'
import modelXimg from '../assets/images/model3.png'
import model3img from '../assets/images/modelY.png'
import modelYimg from '../assets/images/modelX.png'
export default function Cars(){
    const [cars, setcars] = useState([])
    
    useEffect(() => {
        axios
        .get('http://localhost:8000/api/allcars')
        .then((res) =>{
            console.log(res.data);
            setcars(res.data.data);
            
        } )
      .catch(err => console.log(err))
    }, [])

    var image=model3img

    return (
        <div>
             <img className="logo-img" src={logo} alt="tesla-logo"></img>
            <div className="title">
               
                <div className="title-content">
                    <h1>ALL MODELS</h1>
                </div>
            </div>
            <div className="home">
                
                <div className="car-main">
                    <div className="car-column-card">
                        {cars.map(car=>{
                            console.log(car.name)
                            if(car.name==="Model S")image=modelSimg
                            else if(car.name==="Model X")image=modelXimg
                            else if(car.name==="Model Y")image=modelYimg
                            else if(car.name==="Model 3")image=model3img
                            return (
                                <div className="car-card">
                                    <Link to={'/car/'+car.name }>
                                    <img
                                        style={{ width: '100%' }}
                                        src={image}
                                        alt="blog"
                                    />
                                    </Link>
                                
                                    <div className="car-panel">
                                        <div style={{"height":"40px","width":"100%"}}>

                                            <span style={{"float":"left","margin-left":"5px"}}>{car.name}</span>
                                            <span style={{"float":"right","margin-right":"5px"}}>{car.models[0]["Range"]}</span>
                                        </div>
                                        <div className="card-span-div">
                                            <span >{car.models[0]["Acceleration"]}</span>
                                            <span >{car.models[0]["Top Speed"]}</span>
                                            <span >{car.models[0]["Peak Power"]}</span>
                                            <span >{car.models[0].cost}</span>
                                        </div>

                                        <div className="card-span-div1">
                                            <span >Acceleration</span>
                                            <span >Top Speed</span>
                                            <span >Peak Power</span>
                                            <span >Starts</span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        

                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}