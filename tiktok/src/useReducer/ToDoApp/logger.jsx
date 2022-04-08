const logger = (reducer,x) => {
    return (prevState, action) => {

        console.group(action.type,x.current+=1)
        console.log('Prev', prevState);
        console.log('Action', action)
        let newState = reducer(prevState, action);
        console.log('New', newState);
        console.groupEnd()
        return newState;
    }

}

export default logger;