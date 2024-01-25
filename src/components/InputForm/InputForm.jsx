import React, { useState } from 'react'
import { WrapperInputStyle } from './style';

const InputForm = (props) => {
    const [valueInput, setValueInput] = useState('')
    const{ placeholder = 'nhaptext', ...rests} = props
    return (
      <WrapperInputStyle placeholder= {placeholder} valueInput={ valueInput} {...rests} />
  )
}

export default InputForm