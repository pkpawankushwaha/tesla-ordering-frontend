import logo from '../assets/images/logo.png'
import specimg from '../assets/images/specs.png'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import React, {useState, useEffect } from 'react'

export default function Car(){
    const {id} = useParams();
    const [cars, setcars] = useState([])
    const [car,setCar]=useState([])
    useEffect(() => {
        var carData = {
            carName:{id}
        }
        
        axios({
            method:"post",
            url:'http://localhost:8000/api/car',
            data:carData
        })
        .then((res) =>{
            console.log(res.data);
            
            setcars(res.data.data);
            setCar(cars.data.models[0])
            
        } )
      .catch(err => console.log(err))
    }, [])
    
    console.log({id})
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
                    <Link to="/cars"><button className="btn-div-btn">Order</button></Link>
                </div>
            </div>
            
            <div className="specifications">
                <div className="specifications-left">
                    <img src={specimg}>

                    </img>
                </div>
                <div className="specifications-right">
                    <h2>{id} Specs</h2>

                    <div className="specs-span">
                        <span style={{"float":"left"}}>Range</span>
                        <span style={{"float":"right"}}>Power Train</span>
                    </div>
                    <div className="specs-span">
                        <span style={{"float":"left"}}>{car["Range"]}</span>
                        <span style={{"float":"right"}}>Power Train</span>
                    </div>
                    <div className="specs-span">
                        <span style={{"float":"left"}}>Peak Power</span>
                        <span style={{"float":"right"}}>Acceleration</span>
                    </div>
                    <div className="specs-span">
                        <span style={{"float":"left"}}>Range</span>
                        <span style={{"float":"right"}}>Power Train</span>
                    </div>
                    <div className="specs-span">
                        <span style={{"float":"left"}}>Top Speed</span>
                        <span style={{"float":"right"}}>Drag Coefficient</span>
                    </div>
                    <div className="specs-span">
                        <span style={{"float":"left"}}>Top Speed</span>
                        <span style={{"float":"right"}}>Drag Coefficient</span>
                    </div>

                </div>
            </div>
        </div>
    )
}