interface Action{
    type: string;
}

const CounterReducer = (state: number, action: Action): number => {
    if(action.type === "INCREMENT"){
        return state + 1;
    }
    
    return state;
}

export default CounterReducer;