import logo from '../assets/images/logo.png'
import modelS_red from '../assets/images/modelS_red.png'
import modelS_white from '../assets/images/modelS_white.png'
import specimg from '../assets/images/specs.png'
import ordered_mas from '../assets/images/ordered_mas.png'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import React, {useState, useEffect } from 'react'

export default function Ordered(){
    var id=1
    
    var car=JSON.parse(localStorage.getItem('car'))
    var paint=JSON.parse(localStorage.getItem('paint'))
    var cars=JSON.parse(localStorage.getItem('cars'))
    var wheels=JSON.parse(localStorage.getItem('wheels'))
    var interiors=JSON.parse(localStorage.getItem('interiors'))
    var additionalCost=localStorage.getItem('additionalCost')
    return (
        <div>
            <div className="orderedpage" >
                
                <div style={{width:"100%"}}>
                    <img className="logo-img" src={logo} alt="tesla-logo"></img>
                </div>
                <center>
                <div className="orderedpage-content">
                    <h3>Your Order is Complete</h3>
                    <img className="mas-img" src={ordered_mas} alt="ordered"></img>
                <div className="main-content-odered"> 
                                   <h1>{cars.name}</h1>

                        <div style={{"width":"100%","margin-bottom":"10px","display":"flex"}}>
                            <div style={{"width":"30%"}}>
                                {car["Range"]}
                            </div>
                            <div style={{"width":"30%"}}>
                                {car["Top Speed"]}
                            </div>
                            <div style={{"width":"40%"}}>
                                {car["Acceleration"]}
                            </div>
                        </div>
                        <div style={{"width":"100%","margin-bottom":"20px","display":"flex"}}>
                            <div style={{"width":"30%"}}>
                                Estd. Range
                            </div>
                            <div style={{"width":"30%"}}>
                                Top Speed
                            </div>
                            <div style={{"width":"40%"}}>
                                Acceleration
                            </div>
                        </div>

                        <img style={{"height":"400px","width":"500px"}} className="logo-img" src={
                            paint.color==='#fff'?modelS_white:modelS_red
                        } alt="modelS_red"></img>


                       <div style={{"width":"100%"}}>
                                <div style={{"padding":"10px", "width":"20%","height":"30px","border":"2px solid blue","border-radius":"15px"}}>
                                        <span style={{"float":"left"}}>{car.name}</span>
                                        <span style={{"float":"right"}}>${car.cost}</span>
                                </div>
                        </div>

                        <div style={{"width":"100%"}}>
                                <div style={{"padding":"10px", "width":"20%","height":"30px"}}>
                                        <span style={{"float":"left"}}>{paint.name}</span>
                                        <span style={{"float":"right"}}>${paint.cost}</span>
                                </div>
                        </div>

                        <div style={{"width":"100%"}}>
                                <div style={{"padding":"10px", "width":"20%","height":"30px"}}>
                                        <span style={{"float":"left"}}>{wheels.name}</span>
                                        <span style={{"float":"right"}}>${wheels.cost}</span>
                                </div>
                        </div>

                        <div style={{"width":"100%"}}>
                                <div style={{"padding":"10px", "width":"20%","height":"30px"}}>
                                        <span style={{"float":"left"}}>{interiors.name}</span>
                                        <span style={{"float":"right"}}>${interiors.cost}</span>
                                </div>
                        </div>

                        {
                            additionalCost==='0'?"":
                            <div style={{"width":"100%"}}>
                                <div style={{"padding":"10px", "width":"20%","height":"30px"}}>
                                        <span style={{"float":"left"}}>Full Self Driving</span>
                                        <span style={{"float":"right"}}>${additionalCost}</span>
                                </div>
                        </div>
                        }

                        <div style={{"width":"100%"}}>
                                <div style={{"padding":"10px", "width":"20%","height":"30px","background-color":"grey","border-radius":"15px"}}>
                                        ${parseInt(additionalCost)+parseInt(car.cost)+parseInt(paint.cost)+parseInt(interiors.cost)+parseInt(wheels.cost)}
                                </div>
                        </div>

                        <div style={{"width":"100%","margin-top":"20px","margin-bottom":"50px"}}>
                                <div style={{"padding":"10px","margin-top":"20px", "width":"20%","height":"30px","background-color":"blue","border-radius":"15px"}}>
                                        Explore {cars.name}
                                </div>

                                <div style={{"padding":"10px","margin-top":"20px", "width":"20%","height":"30px","background-color":"grey","border-radius":"15px"}}>
                                        Download Invoice
                                </div>
                        </div>
                    </div>
                </div>
            </center>
            </div>
                
        </div>
    )
}