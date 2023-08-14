import React, { useEffect, useState } from "react"

const Header = () => {
  const [India,setIndia] = useState()
  const [Hollywood,setHollywood] = useState()
  const [Technology,setTechnology] = useState()

  useEffect(()=>{

    const Url = [ "India", "Hollywood", "Technology"]

    for(let i = 0; i < Url.length; i++){
        fetch(`https://blog-server-aglh.onrender.com/${Url[i]}`).then(res => res.json())
        .then(data => {
          if(i==0) setIndia(data)
          else if(i==1) setHollywood(data)
          else setTechnology(data)
        })
    }

  },[])  
  
  return (   
    <div className="Header">

        <div>
          <img src={India?.[0].ImageAsset} alt={India?.[0].Title} width="100%" height="100%"/>
        </div>

        <div>
          <img src={Hollywood?.[0].ImageAsset} alt={Hollywood?.[0].Title} width="100%" height="100%"/>
        </div>

        <div>
          <img src={Technology?.[0].ImageAsset} alt={Technology?.[0].Title} width="100%" height="100%"/>
        </div>
        
    </div>

  )
}

export default React.memo(Header)