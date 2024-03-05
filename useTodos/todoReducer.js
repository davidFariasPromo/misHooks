

export const todoReducer = (initialState, action) =>{



    switch (action.type) {
        case 'Add todo':
            return[
                ...initialState, action.payload
            ]

        case 'DELETE todo': 
            return initialState.filter( todo => todo.id !== action.payload);
            
        case 'ONTOGGLE todo':
            return initialState.map(todo => {

                //Verificamos que el todo que nos manda sea igual al que esta seleccionado
                if(todo.id === action.payload){
                    return {
                        ...todo,
                        done: !todo.done
                    
                    }
                }
                //Si no se cumple que retorne un todo normal
                return todo;
            })
        
        default:
            return initialState;
    }
}