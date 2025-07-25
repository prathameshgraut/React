import "./App.css"
import My from "./My";
import ProductTab from "./ProductTab";


function Title(){
  return <h1>Hello World !</h1>
}



function App() {

  return(
    <div>
      <ProductTab/>
        {/* <Product/>
          <Product/> */}
      {/* <h1>This Is My App Components....</h1> 
      <p>inside app components we have : </p>
      <Title/>
      <My />
      <My />
      <My /> */}
    </div>
  )
}

export default App
