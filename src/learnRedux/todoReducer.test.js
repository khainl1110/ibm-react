// import {todos} from "./toDoReducer";
const todos = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completec: false,
                }
            ];
        default: //12
            return state;
    }
}

const testAddTodo = () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'Learn Redux'
    };
    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completec: false
        }
    ];

    Object.freeze(stateBefore);
    Object.freeze(action);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
    
};

const testToggleTodo = () => {
    const stateBefore = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        }, 
        {
            id: 1,
            text: 'Go Shopping',
            completed: false
        }
    ];
    const action = {
        type: 'TOGGLE',
        id: 1
    };
    const stateAfter = [
        {
            id: 0,
            text: 'Learn Redux',
            completed: false
        }, 
        {
            id: 1,
            text: 'Go Shopping',
            completed: true
        }
    ];

    Object.freeze(stateBefore);
    Object.freeze(action);

    expect(
        todos(stateBefore, action)
    ).toEqual(stateAfter);
}

testAddTodo();
testToggleTodo();

console.log('All tests passed');