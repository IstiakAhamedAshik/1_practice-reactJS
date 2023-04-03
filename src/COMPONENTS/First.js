import React from 'react'
import { useState } from 'react'
import { FaAdn } from 'react-icons/fa'
const First = () => {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState('')
  const [input, setInput] = useState('')

  const increase = () => {
    if (count < 30) {
      let newcount = count + 1
      setCount(newcount)
    }
  }

  const decrease = () => {
    if (count > 0) {
      let newcount = count - 1
      setCount(newcount)
    }
  }
  const getInputValue = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }
  const change = () => {
    setInput(value)
  }
  return (
    <div>
      <h1>
        HEllo world <FaAdn />
      </h1>
      <h1>Number:{count}</h1>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <div>
        <input
          style={{ width: '500px', padding: '10px', margin: '15px 20px' }}
          onChange={getInputValue}
          type='text'
        />
        <button onClick={change}>submit</button>
      </div>
      <h1>NAME : {input}</h1>
    </div>
  )
}

export default First
