import React from 'react'

const Button = ({ text, type = "submit" }) => (
    <div>
        <input type={type} value={text} />
    </div>
)

export default Button