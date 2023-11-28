import React, { useState } from 'react'
import QRCode from 'qrcode.react'
const QRcode = () => {
const [input,setInput]= useState('')
  return (
    <div><div>
        QRCode
    </div>


        <div>
            <input type="text" name="" onChange={(e)=>setInput(e.target.value)} 
            value={input} id=""  />

{input && <QRCode value={input}/>}
        </div>
    </div>
  )
}

export default QRcode