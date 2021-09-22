import logo from '../assets/images/logo.png'
import specimg from '../assets/images/specs.png'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import React, {useState, useEffect } from 'react'

export default function Car(){
    const {id} = useParams();
    const [index,setIndex]=useState(0)
    const [cars, setcars] = useState({})
    const [car,setCaaar]=useState({})

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
            console.log(cars)
            
        } )
      .catch(err => console.log(err))

      
    }, [])
    
   
    
    
    return (
        <div>
            <div className="carpage" style={{"background-color":"green",}}>
                <div style={{width:"100%","height":"20%"}}>
                    <img className="logo-img" src={logo} alt="tesla-logo"></img>
                    
                </div>
                <div style={{width:"100%","height":"60%","text-align":"center"}}>
                    <h1>{id}</h1>
                    
                </div>
                
                <div className="btn-div">
                    <Link to={"/order/"+id}><button className="btn-div-btn">Order</button></Link>
                </div>
            </div>
            
            <div className="specifications">
                <div className="specifications-left">
                    <img src={specimg}>

                    </img>
                </div>
                <div className="specifications-right">
                    <h2>{id}  Specs</h2>
                    {cars.name?
                        <div>
                            
                            {
                                cars.models.map(item=>{
                                
                                return (
                                    <button style={
                                        {
                                            "height":"40px",
                                            "width":"150px",
                                            "background-color":"black",
                                            "border-radius":"15px",
                                            "margin-right":"5px",
                                            "color":"white",
                                            "border":"2px solid white"
                                        }
                                        } 
                                        onClick={()=>{
                                        setCaaar(item)
                                    }}>{item.name}</button>
                                )
                            })}
                        </div>:
                        <div>
                                gub
                        </div>}
                            
                    <div className="specifications-right-content">
                    {cars.name?
                            
                        <table>
                           
                            <tr>
                                <td>Range</td>
                                <td>Power Train</td>
                            </tr>
                            <tr>
                                <td>{car["Range"]}</td>
                                <td>{car["Power Train"]}</td>
                            </tr>
                            <tr>
                                <td>Peak Power</td>
                                <td>Acceleration</td>
                            </tr>
                            <tr>
                                <td>{car["Peak Power"]}</td>
                                <td>{car["Acceleration"]}</td>
                            </tr>
                            <tr>
                                <td>Top Speed</td>
                                <td>Drag Coefficient</td>
                            </tr>
                            <tr>
                                <td>{car["Top Speed"]}</td>
                                <td>{car["Drag Coefficient"]}</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>Wheels</td>
                            </tr>
                            <tr>
                                <td>{car["Weight"]}</td>
                                <td>{car["Wheels"]}</td>
                            </tr>
                            <tr>
                                <td>Cargo Capacity</td>
                                <td>Charging</td>
                            </tr>
                            <tr>
                                <td>{car["Cargo Capacity"]}</td>
                                <td>{car["Charging"]}</td>
                            </tr>

                        </table>
                      :<div></div>}
                    </div>

                </div>
            </div>
        </div>
    )
}