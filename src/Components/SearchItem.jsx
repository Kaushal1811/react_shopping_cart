import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from "./Data";
import Product from './Product';


const SearchItem = ({cart,setCart}) => {
  const {term} = useParams()
  const [filterData,setFilterData] = useState([])
useEffect(() => {
  const filterData = () => {
  const data = items.filter((searchproduct) => searchproduct.title.toLowerCase().includes(term.toLowerCase()))
  setFilterData(data)
  // console.log(data);
 }
filterData()
}, [term])

  return (
  
   <Product cart ={cart} setCart={setCart}  items={filterData} />
  
  )
}

export default SearchItem
