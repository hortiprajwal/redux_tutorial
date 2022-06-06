import React from "react";

function Header(props)
{   console.warn("Header",props.data)
    return(
        <div>
            <div className="add-to-cart">
                <span className="cart-count">
                    {props.data.length}
                </span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH40FJoJ7wynrb5KZtfRCB2LDCyDnItei2jg&usqp=CAU"/>
            </div>
        </div>
    )
}

export default Header;