import React from 'react';
import { useNavigate } from 'react-router-dom';
import qs from "query-string";
import { useSearchParams } from 'react-router-dom';
const CategoryBox = ({label,icon: Icon}) => {
    const [params,setParams]=useSearchParams()
    // console.log(params)
    const  value=params.get('category')

const navigate=useNavigate()
const handleClick=()=>{
    let currentQuery={}
    if(params){
        currentQuery=qs.parse(params.toString())
    }
    const updatedQUery={
        ...currentQuery, 
        category: label,
    }
    const url=qs.stringifyUrl({
        url:'/',
        query:updatedQUery 
    },{
        skipNull:true   
    })
    navigate(url)
}

    return (
        <div onClick={handleClick} className='flex  duration-300 cursor-pointer flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-[black] rounded-2xl  border-transparent text-neutral-500'>
            <Icon size={22}></Icon>
            <div className='text-[15px] font-medium '>{label}</div>
        </div>
    );
};

export default CategoryBox;