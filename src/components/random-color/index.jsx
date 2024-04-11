import { useState } from "react";


function RandomColor(){

    const [typeofcolor,settypeofcolor] =useState('hex');
    const [color,setcolor] =useState("#000000");
function randomutility(length){

    return Math.floor(Math.random() * length);

}
    function handlehexchange() {
        let hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
        let hexcolor = "#";

        for(let i=0;i<6;i++) {   hexcolor += hex[randomutility(hex.length)];
        }   
             setcolor(hexcolor);
    }

    function handlergbchange(){

        let rgb = "rgb";
        let r = randomutility(256);
        let g = randomutility(256);
        let b = randomutility(256);

        setcolor(`${rgb}(${r},${g},${b})`);
    }
    return(<div style={{

        display:"flex",
        justifyContent:"center",
        background:color,
        width:"100vw",
        height:"100vh",
    }}>

      <div>

        <button onClick={()=>settypeofcolor("hex")}> Hex Color </button>
        <button onClick={()=>settypeofcolor("rgb")}>Rgb color</button>
        <button onClick={
                            typeofcolor==="hex"? handlehexchange : handlergbchange


        }>Generate random color</button>

        <div style={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            fontSize:"60px",
            flexDirection:"column",
            marginTop:"50px",
            color:"white",
            gap:"20px",
        }}>
               <h2>{typeofcolor === "hex" ? "Hex Color" : "Rgb Color"}</h2>
               <h3>{color}</h3> 
        </div>
      </div>

    </div>)
}
export default RandomColor;