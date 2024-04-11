import { useState } from "react";
import QRCode from "react-qr-code";

function Qrgenerator(){
    const[input,setinput] = useState("");
    const[qrcode,setqrcode] = useState("");
    function handleGenerateQrCode(){

        setqrcode(input);
        setinput('');

    }

    return(
        <div>
            <h1>QR code generator</h1>
            <div>

        <input type="text" placeholder="Enter the value" onChange={(e)=>setinput(e.target.value) } value={input} />
        <button onClick={handleGenerateQrCode}  disabled={input.trim()!=='' ? false:true}>Generate QR Code</button>
        </div>
        <div>
            <QRCode id="qr-code-value"  value={qrcode} size={400} bgColor="#fff"></QRCode>
        </div>
        </div>
    )
}

export default Qrgenerator;