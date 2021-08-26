import React from 'react'

function InputForm({ elemnt, handler, formValue}) {
    return (
        <div>
            <label htmlFor={elemnt.name}>{elemnt.label}</label>
            <input type={elemnt.type} name={elemnt.name} onChange={handler} value={formValue[elemnt.name] || ''}/>
        </div> 
    )
}

export default InputForm