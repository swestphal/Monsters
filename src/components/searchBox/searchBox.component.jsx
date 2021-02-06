import React,{useState} from 'react'
import './searchBox.styles.css'


export const SearchBox = ({placeholder,handleChange}) => {

    return (
        <div  >
             <input     
                className="search"  
                type="search" 
                placeholder={placeholder} 
                onChange={(e) => handleChange(e.target.value)} />
       
        </div>
    )
}


