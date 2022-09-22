import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Screen1} from "./components/screen/screen1/Screen1";
import {Screen2} from "./components/screen/screen2/Screen2";

function App() {

   const [currentText, setCurrentText] = useState("");

   const [screen1Text, setScreen1Text] = useState("");
   const [screen2Text, setScreen2Text] = useState("");

   useEffect(() => {
      console.log(currentText);
   }, [currentText])

   function saveInputText(screen: number) {
      switch (screen) {
         case 1:
            printToScreen1(currentText);
            break
         case 2:
            printToScreen2(currentText);
            break
      }
   }


   function printToScreen1(toPrint: string) {
      setScreen1Text(toPrint);
   }

   function printToScreen2(toPrint: string) {
      setScreen2Text(toPrint);
   }

   return (
      <div className="App">
         <div className="screen-container">
            <Screen1 input={screen1Text}/>
            <Screen2 input={screen2Text}/>
         </div>
         <input type="text" onChange={e => setCurrentText(e.target.value)}/>

         <div>
            <button onClick={()=> saveInputText(1)}>Screen1</button>
            <button onClick={()=> saveInputText(2)}>Screen2</button>
         </div>


      </div>
   )
}

export default App
