import React, {useState,useEffect} from "react";
import axios from "axios"
import * as S from "./assets/apiStyle.jsx"



function App(){

const[data, Setdata] = useState([])

const getData = async ()=>{

  const resp = await axios.get('https://api.sampleapis.com/recipes/recipes')
  Setdata(resp.data)



}

// useEffect - apareca a api , mas nao fique atualizando varias vezes, por isso tem a array vazia para impedir que nao tenha efeitos colaterais
useEffect(()=>{
  getData()
},[])



  return(

    <>
    <section>
    
    {data.map((item)=>(

      

      <S.poster>


        <S.Img src={item.photoUrl} alt="" />
        <h2>{item.title}</h2>
        <p>{item.ingredients}</p>



      </S.poster>

      
    ))}
    
   
    
    

    </section>
    
    </>





  )
}


export default App;