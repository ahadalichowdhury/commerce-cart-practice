import React from 'react'
import {Route, Switch} from "react-router-dom"
import Cart from "../../front/cart/Cart"
import Products from '../products/Products'
import Signup from '../signup/Signup'


const Routes = ({productItem}) => {
    return (
        <div>
            <Switch>
                <Route path="/" exact>
                    <Products productItem={productItem}/>
                </Route>
                <Route path="/signup" exact>
                    <Signup/>
                </Route >
                <Route path="/cart" exact>
                    <Cart/>
                </Route >
               
            </Switch>
        </div>
    )
}

export default Routes

