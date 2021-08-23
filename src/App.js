import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaAngleDoubleRight, FaChevronLeft, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import data from './data';
import people from './data';



const App = function (){
  const [person, setPerson] = useState(data)
  const [value, setValue] = useState(0)

  useEffect(function (){
      if(value < 0){
        return setValue(person.length - 1)
      }
      if(value > person.length - 1){
        return setValue(0)
      }
  })
  const checkNumber = function(number){
    if(number < 0){
      return person.length - 1
    }
    if(number > person.length - 1){
      return 0
    }return number
  }
  const {name, title} = person[value]
  return (
    <div className="grid">
    <div>
      {person.map(function({image}, index){
        let position = "nextSlide"
        let bigImg = "image"
        if(value === index){
          position = "activeSlide"
          bigImg = "bigImg"
        }
        if(index === value - 1 || (value === 0 && index === person.length - 1)){
          position = "lastSlide"
          bigImg= "image"
        }
      
        
        return (
          

          <article className={position}>
            <img className="image" className={bigImg} src={image}/>
            
          </article>
         
        )
      })}
     
      <button className="next" onClick={function(){return setValue(checkNumber(value + 1))}}>Next</button>
      <button className="prev" onClick={function (){return setValue(checkNumber(value - 1))}}>Prev</button>
      
    </div>
    <div className="pos">
      <h3>{name}</h3>
      <h5>{title}</h5>
    </div>
    </div> 
  )
}

export default App;