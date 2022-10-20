import React from 'react';
import Tour from './Tour';
const Tours = ({deleteTour,data}) => {
  // const [item, setItem] = useState("")

  return (
    <div className='section'>
       <div className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </div>
      {
        data.map((item,index)=> <Tour key={index} deleteTour={deleteTour}  item={item} />)
      }

    </div>
  )
};

export default Tours;