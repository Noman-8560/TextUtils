import React from 'react'

export default function Alert(props) {
    const capitilize =(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1).toLowerCase();

    }
  return (
     props.alert && <div class={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
        <strong>{capitilize(props.alert.typ)}</strong>: {props.alert.msg}
    </div>
   
  )
}
