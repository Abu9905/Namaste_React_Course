import React from "react";
import ReactDOM from "react-dom/client";  

  const Title = ()=>( 
     <h1 id ="heading" className="myHeading">
        Namaste React using JSX
      </h1>
  )


  // React functional Component
  const HeadingComponent = ()=>{
    return(
      <div id="container">
        <Title/>
        <h1>Hello World</h1>
      </div>
    )
  }

  // const HeadingComponent2 = ()=> <h1>Hello World</h1>
    
  


  const root = ReactDOM.createRoot(document.getElementById("root"))

  root.render(<HeadingComponent/>)