import Header from "./Header"
import Latest from "./Latest"
import {HomeArticle} from "../../Page/Page"

const Home = () => {

  return (
    <div className="Home">
      
        <Header/>

        <Latest Title="THE LATEST"/>

        <HomeArticle/>

        <Latest Title="LATEST STORIES"/>
        
    </div>
    
  )
}

export default Home