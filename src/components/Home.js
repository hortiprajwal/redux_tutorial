import React from "react";

function Home(props)
{   console.warn("home",props.data)
    return(
        <div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://i.gadgets360cdn.com/products/large/iphone-12-all-404x800-1602616616.jpg" />
                </div>
                <div className="text-wrapper item">
                    <span>
                        iPhone
                    </span>
                    <span>
                        Price: $999.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                    <button onClick={()=>
                        props.addToCartHandler({price: 999.00,name: 'iPhone 14'})
                    }>Add To Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;