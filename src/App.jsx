import "./App.css"
import Loading from "./Components/Loading"

 
 import PageSurround from "./Containers/PageSurround"
import Header from "./Components/Header"
import RouterConfig from "./Components/RouterConfig"
 
 
function App() {
  //PageSurround u göster sonra da  pagesurround benim en daşşaklı divim aslında onun içindeki children header ı karşılık geliyor istediğin yerde kullanabilirisin  
 

  return (
    <div className="app" /* style={{margin:"0 150px"}} */ >  

     <PageSurround>  
      <Loading/>     
      <Header/> 
    <RouterConfig/>
     </PageSurround>
 
        
       

    
    </div>
  )
}

export default App
