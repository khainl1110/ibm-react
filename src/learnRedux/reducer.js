//import { createStore } from "redux";
const counter = (state = 0, action) => {
    switch(action.type) {
        case 'INCREMENT':
            return state +1;
        case 'DECREMENT':
            return state -1;
        default:
            return state;
    }
}

const createStore = (reducer) => {
    let state;
    let listeners = [];

    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);
        return () => {
            listeners = listeners.filter(l => l !== listener);
        }
    }
    dispatch({});
    return {getState, dispatch, subscribe};
};

//const {createStore} = Redux;
const store = createStore(counter);
console.log(store.getState());
store.dispatch({type:'INCREMENT'});
console.log(store.getState());

store.subscribe(() => {
    document.body.innerText = store.getState();
})

document.addEventListener('click', () => {
    store.dispatch({type: 'INCREMENT'})
})

// comment below for test
//  export {counter};

// function Counter({value, onIncrement, onDecrement}) {
//     return(
//         <div>
//             <h1>{value}</h1>
//             <button onClick = {onIncrement}>+</button>
//             <button onClick = {onDecrement}>-</button>
//         </div>
//     )
// }

// // render using React
// const render = () => {
//     ReactDOM.render(
//         <Counter 
//             value = {store.getState()} 
//             onIncrement = {() => store.dispatch({type: 'INCREMENT'})}
//             onIncrement = {() => store.dispatch({type: 'DECREMENT'})}
//         />,
//         document.getElementById("root")
//     );
// }

// store.subscribe(render);
// render();