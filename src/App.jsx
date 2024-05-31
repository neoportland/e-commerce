import "./App.css"
import Loading from "./Components/Loading"

 
 import PageSurround from "./Containers/PageSurround"
import Header from "./Components/Header"
import RouterConfig from "./Components/RouterConfig"
import Drawer from '@mui/material/Drawer';
import { useState } from "react"
 
function App() { 
  const [anahtar, setanAhtar] = useState(false)

  //PageSurround u göster sonra da  pagesurround benim en daşşaklı divim aslında onun içindeki children header ı karşılık geliyor istediğin yerde kullanabilirisin  

  const switchChange=()=>{
    setanAhtar(!anahtar)
  }
 

  return (
    <div className="app" /* style={{margin:"0 150px"}} */ >  

     <PageSurround>  
      <Loading/>     
      <Header/> 
    <RouterConfig/>
     </PageSurround>

     <button  className="detail_button2"  style={{cursor:"pointer"}}   onClick={switchChange}> İndirimler </button>

 
        
     <Drawer   onClose={switchChange}    anchor="right" open={anahtar} >
        <h2     style={{width:"400px", height:"100vh", padding:"30px" , backgroundColor:"rgb(221 212 74)"}}> Malesef indirim sezonu dışındayız   </h2>
      </Drawer> 

    
    </div>
  )
}

export default App
