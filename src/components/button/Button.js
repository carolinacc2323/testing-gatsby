import React from 'react'
import './Button.css'

const functionDefault=()=>{
  alert('mi mamá me mima')
  alert('haz un salto mortal')
}

const styleDefault= {
  boxShadow: 'pink 2px 2px',
  borderRadius: '12px'
}

// const sucess={
//   backgroundColor: 'blue',
// }

const Button = ({ onClick=functionDefault, style= styleDefault, children='haz click', className}) => {
  return (
    <>
        <div>
        <button onClick={onClick} style={style} className={className}>
            {children}
        </button>
        </div>
    </>
  )
}

export default Button
