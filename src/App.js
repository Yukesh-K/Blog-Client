import { useState } from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Component/Home/Home";
import Navbar from "./Component/Navbar/Navbar";
import View from "./Component/View/View";
import {India,Hollywood,Technology,Fitness,Food, NoSource} from "./Page/Page"

function App() {
  const [Mode,setMode] = useState(false)

  const ToTop = () =>{ window.scrollTo(0,0) }

  const Theme= (Str,Data) => {
    setMode(Data)
  }

  return (
    <div className={`App ${Mode && "ModeSet"}`}>
      <Router>
          <Navbar Theme={Theme}/>

          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/India" element={<India/>} />
              <Route path="/Hollywood" element={<Hollywood/>} />
              <Route path="/Technology" element={<Technology/>} />
              <Route path="/Fitness" element={<Fitness/>} />
              <Route path="/Food" element={<Food/>} />
              <Route path="/View/:ViewCategoryName/:ViewId" element={<View/>} />
              <Route path="*" element={<NoSource/>} />
          </Routes>
      </Router>

       <div className="To">
          <button><a href="/" className="HomeAnchor">Home</a></button>
          <button onClick={ToTop}>To Top</button>
       </div>
    </div>
  )

}

export default App;
