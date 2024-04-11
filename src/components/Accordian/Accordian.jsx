// import { useState } from 'react';
// import data from './data.js';
// import './index.css';

// function Accordian(){
//     const [selection, setselection] = useState(null);
//     const[currentid,setcurrentid] = useState(null);

// function handleselection(getselectionid){
//     setselection(getselectionid)
    
            
//     if(selection === currentid)
//     {
//         setcurrentid(null); 
        
//     }
//     else{
       
//         setcurrentid(getselectionid)
//     }
    
//     console.log(selection);
//    console.log(currentid);

    
   

// }
//     return(<div className='Container'>

//         <div>{
//             data && data.length> 0 ? data.map(dataitems => <div >
//                 <div onClick={()=>handleselection(dataitems.id)}>
//                     <h3>{dataitems.question}</h3>
//                     <span>+</span>
//                       <p>{
                        
//                        selection===currentid  ?null : selection === dataitems.id ? <div>{dataitems.answer}</div>:null
                        
                          
//                         }
                        
//                         </p>
//                 </div>
//             </div>) :(
//           <div> No data </div> )
            
//             }
//             </div>



//     </div>)
// }

// export default Accordian;


import { useState } from 'react';
import data from './data.js';
import './index.css';

function Accordian(){
    const [selection, setselection] = useState(null);
    const[enable,setenable] = useState(false);
    const[multiple,setmultiple] = useState([]);

     
function handleselection(getselectionid){
    setselection(getselectionid==selection? null: getselectionid)
    
   

}

function handlemultiselectiom(getselectionid) {
   const cpymultiple = [...multiple];
   
     if(cpymultiple.indexOf(getselectionid)===-1) cpymultiple.push(getselectionid);
     else cpymultiple.splice(cpymultiple.indexOf(getselectionid),1);
     setmultiple(cpymultiple)
    



}
    return(<div className='Container'>

        <div> <button onClick={()=>{setenable(!enable)}}> Enable multi selection</button></div>

        <div className='items'>{
            data && data.length> 0 ? data.map(dataitems => <div >
                <div onClick={enable? ()=>handleselection(dataitems.id) : ()=>handlemultiselectiom(dataitems.id)}>
                    <h3>{dataitems.question}</h3>
                    <span>+</span>
                      <div>{

            selection === dataitems.id ||multiple.indexOf(dataitems.id) !== -1 ? (
      <div className="content">{dataitems.answer}</div>
    ) : null

                        // enable? multiple.indexOf(dataitems.id)!=-1 && (<div>{dataitems.answer}</div>) 
                        // : selection === dataitems.id && (<div>{dataitems.answer}</div>)
                        
                    //    selection === dataitems.id ? <div>{dataitems.answer}</div>:null
                        
                             }
                        
                        </div>
                </div>
            </div>) :(
          <div> No data </div> )
            
            }
            </div>



    </div>)
}

export default Accordian;