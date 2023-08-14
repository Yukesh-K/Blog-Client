import {useEffect, useState} from 'react'
import TopPost from './TopPost'
import {Link} from "react-router-dom"

const Article = ({Url}) => {
    const [Data,setData] = useState()

    useEffect(()=>{
            fetch(`https://blog-server-aglh.onrender.com/${Url}`).then(res => res.json()) 
            .then(data => setData(data))
    },[])

    function Trim(str,n) {
      return str.length>n? str.substr(0,n)+"..." : str
    }

return (
    <>
        {
        Data && (

          <div className='Article'>
  
              <div className='Article_Content'>  
              { Data.map(Asset => (     

                    <div className='Articles' key={Asset.Title}>
                          <div>
                              <img src={Asset.ImageAsset} alt={Asset.Title} width="100%" height="100%"/>
                          </div>

                          <div className='Content'>
                              <Link className='Link' to={`/View/${Asset.CategoryName}/${Asset.id}`}>{Asset.Title}</Link>
                          </div>

                          <div className='Content'>
                              {Trim(Asset.BlogContent,200)}
                          </div>

                          <div className='Content'>
                              {Asset.CategoryName} / {Asset.PublishedDate}
                          </div>
                    </div>

              ))}
              </div>
              
              <TopPost/>
  
          </div>
        )
        }

    </>

  )
}

export default Article