import {setCount, count} from "react"
//import Nombre from "./components/Hugo/NameHugo"
import Angie from "../src/components/Angie/Angie";
import Carlos from "../src/components/Carlos/ComponentCarlos";
import {MyComponentCris} from "../src/components/Cristian/MyComponentCris";
import Erik from "../src/components/Erik/Erik";
import {Gonzalo} from "../src/components/Gonzalo/Gonzalo";
import Hugo from "../src/components/Hugo/NameHugo";
import {Mateo} from "../src/components/Mateo/Mateo";
import {Paz} from "../src/components/Paz/Paz";


function App() {

  return (
    <>
      <Angie></Angie>
      <Carlos></Carlos>
      <MyComponentCris></MyComponentCris>
      <Erik></Erik>
      <Gonzalo></Gonzalo>
      <Hugo></Hugo>
      <Mateo></Mateo>
      <Paz></Paz>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
