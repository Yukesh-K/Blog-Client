import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom"

const TopPost = () => {
   const Add = ["https://iili.io/HDRD8RS.png","https://iili.io/HDRQMNe.jpg","https://iili.io/HDRDifj.jpg","https://iili.io/HDRbE1j.jpg","https://iili.io/HD5o5zu.jpg"]
   let random = Math.floor(Math.random()*Add.length)
   
   const [Data] = useState([])
   const [Load,setLoad] = useState(true)

   useEffect(()=>{

      const Url = ["India", "Hollywood", "Technology", "Fitness", "Food"]

      for(let i = 0; i< Url.length; i++){
          fetch(`https://blog-server-aglh.onrender.com/${Url[i]}`).then(r=>r.json())
          .then(data => {
              let max = 0; let index = -1;

              data.forEach((asset,i)=>{
                let Like = parseInt(asset.Likes)
                if(Like > max) {max = Like;index = i}
              })
              return data[index]
            })
          .then(asset=> {
            Data.push(asset)
            if(Data.length==5) setLoad(false)
          })
      }

   },[])

   function Trim(str,n){
    return str.length>n? str.substr(0,n)+"..." : str
   }
  return (
    <div className='Article_SideBar'>

        <div className='TopPost_Title'>
            <div>TOP POSTS</div>
            <hr/>
        </div>

        <div className='TopPost_Container'>
          {
            Load? <h1>Loading...🐶</h1> : 

            Data && 
              Data.map(asset=>(
    
              <div key={asset.Title} className='TopPost_Gallery'>

                    <div>
                      <img src={asset.ImageAsset} width="100%" height="100%"/>
                    </div>

                    <div>
                      <Link className='Link'to={`/View/${asset.CategoryName}/${asset.id}`}>
                      {Trim(asset.Title,40)}
                      </Link>
                    </div>

                    <div>
                      {asset.CategoryName} <br/> {asset.PublishedDate}
                    </div>
              </div>
    
            ))
            
          }
        </div>

        <div className='TopPost_Advertisement'>
            <img src={Add[random]} width="100%" height="100%"/>
        </div>

    </div>
  )
}

export default TopPost