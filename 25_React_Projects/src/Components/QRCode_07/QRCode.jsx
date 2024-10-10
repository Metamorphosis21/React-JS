import { useState } from 'react'
import QRCode from 'react-qr-code'

function QRCodeGenerator() {
  const [text, setText] = useState('')
  const [qrCode, setQRCode] = useState(null)

  const handleGenerateQRCode = () => {
    setQRCode(<QRCode value={text} size={200} />)
  }

  return (
    <section className="sec07">
      <div className="heading">QR Code Generator 07</div>
      <div className="qr" style={{display: 'flex'}}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to encode"
        style={{height:'30px' , width:'160px'}}
      />
      <button onClick={handleGenerateQRCode} style={{height:'30px'}}>Generate QR Code</button>
      {qrCode}
      </div>
    </section>
  )
}

export default QRCodeGenerator