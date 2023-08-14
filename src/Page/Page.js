import React,{useState,useEffect} from 'react'
import Article from '../Component/Article/Article'
import TopPost from '../Component/Article/TopPost'
import {Link} from "react-router-dom"
import NoPage from "../Assets/NoSource.svg"

export const India = () => {
  return (
    <Article Url="India"/>
  )
}

export const Hollywood = () => {
  return (
    <Article Url="Hollywood"/>
  )
}

export const Technology = () => {
  return (
    <Article Url="Technology"/>
  )
}

export const Fitness = () => {
  return (
    <Article Url="Fitness"/>
  )
}

export const Food = () => {
  return (
    <Article Url="Food"/>
  )
}

export const HomeArticle = () =>{  
  const [Data] = useState([])
  const [Load,setLoad] = useState(true)

  useEffect(()=>{
      const Url = ["India", "Hollywood", "Technology", "Fitness", "Food"]

      for(let i = 0; i < Url.length; i++){
            let random = Math.floor(Math.random()*5)

            fetch(`https://blog-server-aglh.onrender.com/${Url[i]}`).then(res=>res.json())
            .then(data => {if(i==i) return data[random]})
            .then((i)=>{
              Data.push(i);
              if(Data.length==5) setLoad(false)
            })
      }       
  },[])

  function Trim(str,n) {
    return str.length>n? str.substr(0,n)+"..." : str
  }

  return (
    <>
    {
      Load? <h1>Loading...🐶</h1> :

      <div className='Article' style={{width:"100%",margin:"0 auto"}}>

          <div className='Article_Content'>  
              {Data && Data.map(asset => (       
                    <div className='Articles' key={asset.Title}>
                      
                          <div>
                              <img src={asset.ImageAsset} alt={asset.Title} width="100%" height="100%"/>
                          </div>

                          <div className='Content'>
                            <Link className='Link' to={`/View/${asset.CategoryName}/${asset.id}`}>{asset.Title}</Link>
                          </div>

                          <div className='Content'>{Trim(asset.BlogContent,200)}</div>
                          
                          <div className='Content'>{asset.CategoryName} / {asset.PublishedDate}</div>

                    </div>
              ))}
          </div>
      
          <TopPost/>

      </div>
    }
</>
  )
}

export const NoSource = () =>{
 return(
  <div className='NoSource'>
    <img src={NoPage} width="100%" height="100%"/>
  </div>
 )
}



