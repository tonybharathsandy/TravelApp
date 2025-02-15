let initialValue = {}

function transactions(state = initialValue, action){
    switch (action.type) {
        case "PAYPAL":
            return  {...state , paymentMode : "PayPal", ...action.payload}
        case "MASTERCARD":
            return  {...state, paymentMode : "Master Card", ...action.payload} 
        case "VISA":
            return  {...state, paymentMode : "Visa", ...action.payload}  
        case "NOCARD":
            return (
                action.payload
            )
        default:
            return state
    }
}

export default transactions