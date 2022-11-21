import React, { useEffect } from 'react'
import { getDataFailure, getDataRequest, getDataSuccess,getData } from '../redux/action'
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios'

import style from "./home.module.css"

import { useState } from 'react'

const Home = () => {
  const [sort,setSort]=useState("")
    const data=useSelector((state)=>state.data)
   
    const dispatch=useDispatch()

   
 const handleget=(e)=>{
   setSort(e.target.value)
   if(sort==="low"){
    data.sort(function(a,b){
      return a.population-b.population
    })
   }else if(sort=="high"){
    data.sort(function(a,b){
      return b.population-a.population
    })
   }
  
 }
   


    useEffect(()=>{
    dispatch(getData)
    },[])
   
  return (
    <>
     <div className={style.navbar}>
         
           <div className={style.select}>
           <label >Sort it:</label>

<select onChange={handleget} >
  <option value="">none</option>
  <option value="high"> Low to High</option>
  <option value="low"> High to Low</option>
 
</select >
           </div>
        </div>
       <div className={style.container}>
       

       { data && data.map((r,index)=>{
         console.log(data)
        return <div key={index} className={style.card}>
        <div className={style.img}>
        <img src={r.flags.png} alt="" className={style.img} />
      </div>
      <div className={style.information}>
        <div>Population:{r.population}</div>
        <div>Region:{r.region}</div>
        <div>Capital:{r.capital}</div>
      </div>
      </div>
       })}
      


       </div>
    </>
  )
}

export default Home