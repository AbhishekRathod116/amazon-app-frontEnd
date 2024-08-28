import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import SearchIcon from '@mui/icons-material/Search';
import { useStateValue } from './StateProvider';

const Header = ()=>{

    const[{basket}]  = useStateValue()
    return(
        <div className="header">
            <Link to="/">
            <img 
            className="header-logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" 
            alt="No Images" />
            </Link>
            <div className="header-search">
                <input className="header-input" type="text"/>
                <SearchIcon className="header-searchIcon"/>
            </div>
            <div className="header-nav">
                <div className="header-option">
                    <span className="header-optionLineOne">Hello guest</span>
                    <span className="header-optionLineTwo">Sign In</span>
                </div>
                <div className="header-option">
                    <span className="header-optionLineOne">Return</span>
                    <span className="header-optionLineTwo">$ Orders</span>
                </div>
                <div className="header-option">
                    <span className="header-optionLineOne">Your</span>
                    <span className="header-optionLineTwo">Prime</span>
                </div>
                <Link to="/checkOut">
                <div className="header-optionBasket">
                    <ShoppingBasketIcon/>
                    <span className="header-basketCount header-optionLineTwo">{basket.length}</span>
                </div>
                </Link>
            </div>
        </div>
    )
}
export default Header;