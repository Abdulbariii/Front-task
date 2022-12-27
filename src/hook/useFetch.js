
import React, { useEffect, useState } from 'react'

export  function useFetch(url) {
  const [data , setData] = useState()
  const [loading , setLoading] = useState(false)
  const [error , setError] = useState(null)
  
const fetchData = async()=>{
    setLoading(true) ; 
    try {
        const res = await fetch(url)
const dataJson = await res.json()
setData(dataJson)
setLoading(false)
setError(null)
    } catch{
setLoading(false)
setError("Error : you can't fetch the data")
    }
}

useEffect(()=>{
    fetchData()
} , [url])
  
return { data, loading, error };
}
