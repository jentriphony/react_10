import { useState, useEffect } from 'react'



const useCounter = (dataProps = { vector: true }) => {



  const [counter, setCounter] = useState(0)



  useEffect(() => {

    const interval = setInterval(() => {
      if(dataProps.vector === true) {
	setCounter(previousCounter => previousCounter + 1)
      }
      else if(dataProps.vector === false){
	setCounter(previousCounter => previousCounter - 1)
      }
    }, 1024)

    return () => clearInterval(interval)
    
  }, [])


  return counter


  
}



export default useCounter
