import useCounter from './../../../hooks/counter'
import Card from './../../UI/Card'



const BackwardCounter = () => {


  
  const counter = useCounter({ vector: false })
  
  
  return (

    <Card>



      { counter }



    </Card>
    
  )


  
}



export default BackwardCounter
