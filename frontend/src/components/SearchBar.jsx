import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from './../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {

    const {search ,setSearch ,showSearch ,setShowSearch} =useContext(ShopContext);
    const [visible ,setVisible] =useState(false)
    const location =useLocation();

    useEffect(()=>{
        if (location.pathname.includes('collection') ) {
            setVisible(true);
        }else{
            setVisible(false)
        }
    },[location])

  return showSearch && visible ?  (
    <div className='border-t border-b bg-gray-50 text-center  gap-5'>
      <div className='inline-flex gap-4 items-center justify-center border border-gray-400 px-5 py-2 my-5  rounded-full w-3/4 sm:w-1/2'>
        <input value={search} onChange={(e)=>setSearch(e.target.value)} type='text' placeholder='Search' className='flex-1 outline-none bg-inherit text-sm'/>
        <img className='w-4' src={assets.search_icon} alt="" />

      </div>
      <img onClick={()=>setShowSearch(false)} className='inline ml-4 w-3 cursor-pointer ' src={assets.cross_icon} alt="" />
    </div>
  ): null
}

export default SearchBar
