let initialData = {}

function bookingData(state = initialData, action){
    if(action.type === "userData"){
        return (
            {...state, ...action.value}
        )
    }
    else if(action.type === "removeData"){
        return (
            {...action.value}
        )
    }
    else{
        return state
    }

}

export default bookingData