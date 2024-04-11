import Menuitems from "./menu-item";

function Menulist({items=[]})
{

    console.log(items);
    console.log(items.children);
    return <div>

        {
            items && items.length ? items.map((listitems)=>
              <ul>  <Menuitems list={listitems}></Menuitems></ul>
            )
         : null
            }
    </div>
}
export default Menulist;