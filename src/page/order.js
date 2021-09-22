import logo from '../assets/images/logo.png'
import modelS_red from '../assets/images/modelS_red.png'
import wheel19 from '../assets/images/19.png'
import wheel21 from '../assets/images/21.png'
import modelS_white from '../assets/images/modelS_white.png'
import specimg from '../assets/images/specs.png'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import React, {useState, useEffect } from 'react'

export default function Order(){
    const {id} = useParams();
    const [index,setIndex]=useState(0)
    const [cars, setcars] = useState({})
    const [car,setCaaar]=useState({})
    const [paint,setpaint]=useState({})
    const [wheels,setwheels]=useState({})
    const [interiors,setinteriors]=useState({})
    const [additionalCost,setadditionalCost]=useState('0')
    useEffect(()=>{
        if(cars.name)
        setCaaar(cars.models[index]);
    },[index])

    
    useEffect(async () => {
        var carData = {
            carName: id
        }
        
        await axios({
            method:"post",
            url:'http://localhost:8000/api/car',
            data:carData
        })
        .then(async (res) =>{
            console.log(res.data.data[0]);
            
            setcars(res.data.data[0]);
            setCaaar(res.data.data[0].models[0])
            setpaint(res.data.data[0].paints[0])
            setwheels(res.data.data[0].wheels[0])
            setinteriors(res.data.data[0].interiors[0])
            setadditionalCost(0)
            console.log(cars)
            
        } )
      .catch(err => console.log(err))

      
    }, [])
    
   
    
    
    return (
        <div>
            <div className="orderpage" >
                <div style={{width:"100%"}}>
                    <img className="logo-img" src={logo} alt="tesla-logo"></img>
                    

                </div>

                <div className="order-page-content">
                    <div className="order-page-left">
                        
                        <img className="logo-img" src={
                            paint.color==='#fff'?modelS_white:modelS_red
                        } alt="modelS_red"></img>
                    </div>
                    <div className="order-page-right">
                        <h1>{id}</h1>

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
                        {cars.name?
                        <div style={{"width":"100%"}}>
                            
                            {
                                cars.models.map(item=>{
                                
                                return (
                                    <button style={
                                        {
                                            "height":"40px",
                                            "width":"80%",
                                            "margin-bottom":"10px",
                                            "background-color":"white",
                                            "border-radius":"15px",
                                            
                                            "color":"black",
                                            "border":"2px solid black"
                                        }
                                        } 
                                        onClick={()=>{
                                            setCaaar(item)
                                    }}><div>
                                        <span style={{"float":"left"}}>{item.name}</span>
                                        <span style={{"float":"right"}}>${item.cost}</span>
                                        </div></button>
                                )
                            })}
                        </div>:
                        <div>
                                gub
                        </div>}
                        
                        

                        <h1>Paint</h1>
                        <div className="paint-div">
                            <button 
                                style={{"height":"50px","width":"50px","border-radius":"50%","background-color":"#ddd","margin-right":"20px"}}
                            onClick={()=>{
                                setpaint(cars.paints[0])
                            }}></button>
                            <button 
                            style={{"height":"50px","width":"50px","border-radius":"50%","background-color":"red","margin-right":"20px"}}
                            onClick={()=>{
                                setpaint(cars.paints[1])
                            }}  
                            ></button>
                            <button 
                            style={{"height":"50px","width":"50px","border-radius":"50%","background-color":"grey"}}
                            onClick={()=>{
                                setpaint(cars.paints[1])
                            }}
                            ></button>

                        </div>
                        <div style={{"text-align":"center","justifyContent":"center"}}>
                            <h4 style={{"width":"60%","margin-left":"50px"}}>
                                <span style={{"float":"left"}}>{paint.name}</span>
                                <span style={{"float":"right"}}>{paint.cost==='0'?"Included":"$"+ paint.cost}</span>
                            </h4>
                        </div>
                        <h1></h1>

                        <h1>Wheels</h1>
                        <div>
                            
                                <img 
                                onClick={()=>{
                                    setwheels(cars.wheels[0])
                                }} src={wheel19} style={{"height":"50px","width":"50px","margin-right":"15px"}}></img>
                            
                                <img 
                                onClick={()=>{
                                    
                                    setwheels(cars.wheels[1])
                                }}
                                src={wheel21} style={{"height":"50px","width":"50px"}}></img>
                            
                        </div>
                        <div style={{"text-align":"center","justifyContent":"center"}}>
                            <h4 style={{"width":"60%","margin-left":"50px"}}>
                                <span style={{"float":"left"}}>{wheels.name}</span>
                                <span style={{"float":"right"}}>{wheels.cost==0?"Included":"$"+ wheels.cost}</span>
                            </h4>
                        </div>
                                <h1></h1>
                        <h1>Interiors</h1>
                        <div className="paint-div">
                            <button 
                            style={{"height":"50px","width":"50px","border-radius":"50%","background-color":"Black","margin-right":"20px"}}
                            onClick={()=>{
                                setinteriors(cars.interiors[0])
                            }}
                            ></button>
                            <button 
                            onClick={()=>{
                                setinteriors(cars.interiors[1])
                            }}
                            style={{"height":"50px","width":"50px","border-radius":"50%","background-color":"red","margin-right":"20px"}}></button>
                            <button 
                            onClick={()=>{
                                setinteriors(cars.interiors[1])
                            }}
                            style={{"height":"50px","width":"50px","border-radius":"50%","background-color":"grey"}}></button>

                        </div>
                        <div style={{"text-align":"center","margin-right":"20px","justifyContent":"center"}}>
                            <h4 style={{"width":"60%","margin-left":"50px"}}>
                                <span style={{"float":"left"}}>{interiors.name}</span>
                                <span style={{"float":"right"}}>{interiors.cost==='0'?"Included":"$"+ interiors.cost}</span>
                            </h4>
                        </div>
                        <h1></h1>
                        <h1></h1>
                        <h1 style={{"margin-top":"20px"}}>Full Self Driving Capabilities</h1>
                        <div style={{"width":"100%","font-size":"14px","text-align":"left","margin":"0px"}}>
                        {cars.name?
                            
                            cars.additional.map(item=>{
                                return (<p>{item}</p>)
                            })
                            
                        :""}
                        </div>
                        
                        {additionalCost==0?
                        <button style={{"width":"150px","background-color":"blue","color":"white","border-radius":"20px"}}
                            onClick={()=>{
                                setadditionalCost(cars.additionalcost)
                            }}
                        >Add</button>:
                        <button 
                        onClick={()=>{
                            setadditionalCost(0)
                        }}
                        style={{"width":"150px","background-color":"grey","color":"white","border-radius":"20px"}}>Remove</button>
                        }

                        <h1>Order your {id}</h1>
                        <h5>Estimated Delivery : 6-8 weeks</h5>

                        <button 
                        onClick={()=>{
                            localStorage.setItem("cars",JSON.stringify(cars));
                            localStorage.setItem("car",JSON.stringify(car));
                            localStorage.setItem("paint",JSON.stringify(paint));
                            localStorage.setItem("wheels",JSON.stringify(wheels));
                            localStorage.setItem("interiors",JSON.stringify(interiors));
                            localStorage.setItem("additionalCost",additionalCost);
                            
                            window.location.assign("/ordered")
                           
                           

                        }}
                        style={{"width":"250px","height":"50px","font-size":"24px","background-color":"blue","color":"white","border-radius":"20px"}}>Order</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}