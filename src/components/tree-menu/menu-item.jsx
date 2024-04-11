import Menulist from "./menu-list";

export default function Menuitems({list}){


    return (<div>
       <li>
        
        <p>{list.label}
       </p>
        {
            list.children && list.children.length > 0 ? (<Menulist menuitems={list.children}/>) : null
        }
       </li>
    </div> 
    )
}