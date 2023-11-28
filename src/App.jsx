import { useState } from "react";
import "./App.scss"
import Submit from "./components/submit/Submit";
import Success from "./components/success/Success";

function App() {
  const [ success, setSuccess ] = useState()
  
  return (
    <>
      <main className="mainWrapper">
        {/* submit form */}
         {!success &&<Submit setSuccess={setSuccess}/>}


        {/* success message */}
        {success && <Success email={success}/> }
      </main>
    </>
  );
}

export default App;
