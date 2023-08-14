import { useEffect,useState } from "react"
import {Link} from "react-router-dom"

const Latest = ({Title}) => {
   const [One,setOne] = useState()
   const [Two,setTwo] = useState()
   const [Three,setThree] = useState()

   useEffect(()=>{
      const Url = [ "India", "Hollywood", "Technology", "Fitness", "Food"]

      for(let i = 0; i < Url.length; i++){
         fetch(`https://blog-server-aglh.onrender.com/${Url[i]}`).then(res => res.json())
         .then(data =>{
            if(Title == "THE LATEST") {
               if(i==4) setOne(data)
               else if(i==3) setTwo(data)
               else if(i==2) setThree(data)
            }
            else if(Title == "LATEST STORIES"){
               if(i==2) setOne(data)
               else if(i==1) setTwo(data)
               else if(i==0) setThree(data)
            }
         })
      }

    },[])

   function Trim(str,n){
      return str?.length>n? str.substr(0,n)+"..." : str
   }

  return (
   
   <div className="Latest">

       <div className="Latest_Heading">
          <div>{Title}</div>
          <hr/>
       </div>

       <div className="Latest_Contents">

            <div className="Latest_Contents_Container">

               <div>
                  <img src={One?.[0].ImageAsset} alt={One?.[0].Title} width="100%" height="100%"/>
               </div>

               <div className="Latest_Details">
                  <div>
                     <Link className="LatestLink" to={`/View/${One?.[0].CategoryName}/${One?.[0].id}`}>
                     {One?.[0].Title}
                     </Link>
                  </div>

                  <div>{Trim(One?.[0].BlogContent,250)}</div>

                  <div>{One?.[0].CategoryName} / {One?.[0].PublishedDate}</div>
               </div>

            </div>

            <div className="Latest_Contents_Container">

               <div>
                  <img src={Two?.[3].ImageAsset} alt={Two?.[0].Title} width="100%" height="100%"/>
               </div>

               <div className="Latest_Details">
                  <div>
                  <Link className="LatestLink" to={`/View/${Two?.[3].CategoryName}/${Two?.[3].id}`}>
                     {Two?.[3].Title}
                  </Link>
                  </div>

                  <div>{Trim(Two?.[3].BlogContent,250)}</div>

                  <div>{Two?.[3].CategoryName} / {Two?.[3].PublishedDate}</div>
               </div>

            </div>

            <div className="Latest_Contents_Container">

               <div>
                  <img src={Three?.[1].ImageAsset} alt={Three?.[0].Title} width="100%" height="100%"/>
               </div>

               <div className="Latest_Details">
                  <div>
                  <Link className="LatestLink" to={`/View/${Three?.[1].CategoryName}/${Three?.[1].id}`}>
                     {Three?.[1].Title}
                  </Link>
                  </div>

                  <div>{Trim(Three?.[1].BlogContent,250)}</div>

                  <div>{Three?.[1].CategoryName} / {Three?.[1].PublishedDate}</div>
               </div>

            </div>
          
       </div>

   </div>
  )
}

export default Latest