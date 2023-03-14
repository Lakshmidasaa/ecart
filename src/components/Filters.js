import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import Rating from './Rating'
import { CartState } from '../context/Context'

const Filters = () => {

    const [rate, setRate] = useState(2)
{const {productState:{ byStock,byFastDelivery, sort, byRating}, productDispatch} = CartState();


  return (
    <div className='filters'>
    <span className='title'>Filter Product</span>
    <span>
        <Form.Check
            inline
            label='Low to High'
            name='group1'
            type='radio'
            id={'inline-1'}
            onChange={()=>
            productDispatch({
              type: "SORT_BY_PRICE",
              payload: "lowToHigh"
            })}
            checked={sort==="lowToHigh"? true: false}
            />
    </span>
    <span>
    <Form.Check
        inline
        label='High to Low'
        name='group1'
        type='radio'
        id={'inline-2'}
        onChange={()=>
          productDispatch({
            type: "SORT_BY_PRICE",
            payload: "highToLow"
          })}
          checked={sort==="highToLow"? true: false}

        />
</span>

    <span>
        <Form.Check
            inline
            label='Include Out of Stock'
            name='group1'
            type='checkbox'
            id={'inline-3'}
            />
    </span>

    
    <span>
        <Form.Check
            inline
            label='Fast Delivery only'
            name='group1'
            type='checkbox'
            id={'inline-4'}
            />
    </span>
    <span>
        <label style={{paddingRight: 10}}>Rating</label>
        <Rating rating = {byRating} 
        onClick={(i)=> productDispatch
      ({type: 'FILTER_BY_RATING',
          payload: i+1,
    })} 
        style={{curser:'pointer'}}/>
    </span>


  
  <Button variant='light'>Clear Filters</Button>


      
    </div>
  )
}};

export default Filters;
