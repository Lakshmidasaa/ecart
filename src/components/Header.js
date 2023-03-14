import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {Container, Dropdown, FormControl, Navbar, Nav, Badge, Button} from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { CartState } from '../context/Context'
const Header = () => {

const 
{state:{cart}, dispatch}=CartState()

  return (
      <div>
          <Navbar bg='dark' variant='dark' style={{height:80}}>
              <Container>
                  <Navbar.Brand>
                  <Link to ='/'>Shopping Cart</Link>
                  </Navbar.Brand>
                    <Navbar.Text className='search'>
                        <FormControl style={{width: 500}}
                         placeholder='Search a product'
                         className='m-auto'/>
                    </Navbar.Text>
                         <Nav>
                            <Dropdown align ="end">
                                <DropdownToggle variant='success'>
                                    <FaShoppingCart color='white' fontSize={'25px'}/>                                
                                        <Badge>{cart.length}</Badge>
                                    </DropdownToggle>
                                        <Dropdown.Menu style={{minWidth:250}}>
                            { cart.length > 0 ? 
                                (
<>
{cart.map((prod)=> (
    <span className='cartItem' key = {prod.id}>
    <img
    src={prod.image}
className="cartItemImg"
alt={prod.name}    
    />
<div className='cartItemDetail'>
<span>{prod.name}</span>
<span> Rs {prod.price.split(".")[0]}</span>


<AiFillDelete
fontSize="20px"
style={{curser: "pointer"}}
onClick ={()=> 
    dispatch ({
type : "REMOVE_FROM_CART",
payload: prod,

    


    
})
}
/>
</div> 
    </span>
   
))}
<Link to ="/cart">
<Button style={{width:"95%",margin:"0 10px"}}>
Go to Cart
</Button>

</Link>


</>

                                ): 
                                
                                (<span style={{padding:10}}>Cart is empty </span>)}
    



                                            
                                        </Dropdown.Menu>
                            </Dropdown>
                         </Nav>
              </Container>
          </Navbar>
      </div>
  );
};



export default Header
