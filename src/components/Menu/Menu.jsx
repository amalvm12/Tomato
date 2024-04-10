import React from 'react'
import './Menu.css'
import {menu_list} from'../../assets/assets'

const Menu = ({category,setCategory}) => {
  return (
    <div className='menu' id='menu'>

<h1>Explore our menu</h1>
<p className='menu-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto necessitatibus consectetur beatae hic soluta sapiente nemo ex saepe! Accusantium sequi quod odio quis mollitia reiciendis eius corrupti facere porro eveniet.</p>
<div className="menu-list">
{menu_list.map((item,index)=>{
    return(
        <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='menu-list-item'>
            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>

        </div>
    )
})}
</div>
<hr />
 </div>
  )
}

export default Menu