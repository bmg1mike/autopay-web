interface Action { 
    type: "TOGGLE";
}

const ShowPasswordReducer = (state: boolean, action: Action): boolean => {
    if(action.type === "TOGGLE"){
        return !state;
    }
    
    return state;
}

export default ShowPasswordReducer;