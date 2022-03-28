import React, { useState } from "react";
import Circle from "./Circle";

function App() {

  const [inputValue, setInputValue] = useState('')
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value)
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("### hello " + inputValue)
  }
  return (
    <div>
      <Circle borderColor={'yellow'} bgColor={'teal'}/>
      <Circle bgColor={'tomato'}/>

      <form onSubmit={onSubmit}>
        <input value={inputValue} type="text" placeholder="username" onChange={onChange}/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App;