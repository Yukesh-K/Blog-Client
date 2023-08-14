import React, { useEffect, useState } from 'react'
import {useParams,Link} from "react-router-dom"

const View = () => {
  const {ViewCategoryName,ViewId} = useParams()
  const [Data,setData] = useState()
  
  useEffect(()=>{
    fetch(`https://blog-server-aglh.onrender.com/${ViewCategoryName}`).then(res=> res.json()).then(data=> setData(data))
  },[])

  useEffect(()=>{ window.scrollTo(0,0) })

  function Trim(str,n){
    return str.length>n? str.substr(0,n)+ "..." : str
  }
  
  return (
    <div className='View'>

      { 
      Data &&
        Data.map(asset=> asset.id == ViewId && (

          <div className='MainView'>
              <div>{asset.Title}</div>

              <div>
                <img src={asset.ImageAsset} width="100%"  height="100%"/>
              </div>

              <div>
                {Trim(asset.BlogContent,640)}
              </div>
              
              <div>
                <div><span className='ViewSpan'>Likes</span>&nbsp;:&nbsp;{asset.Likes}</div>
                <div><span className='ViewSpan'>Date</span>&nbsp;:&nbsp;{asset.PublishedDate}</div>
              </div>
          </div>
          
        ))
      }

      <div className='ViewCategory'>
            {
            Data && 
              Data.map(asset=> asset.id != ViewId && (
              
                    <div className='CategoryBox'>

                      <div>
                        <img src={asset.ImageAsset} width="100%" height="100%"/>
                      </div>

                      <div>
                      <Link className='Link' to={`/View/${asset.CategoryName}/${asset.id}`}>{asset.Title}</Link>
                      </div>

                      <div>{asset.PublishedDate}</div>

                    </div>

              ))
            }
      </div>
      

    </div>
  )
}

export default View