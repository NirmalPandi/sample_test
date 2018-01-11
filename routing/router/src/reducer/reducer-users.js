export default function (state = data, action) {
    switch (action.type) {
        case "MODIFY":
        return [...state, action.payload];
        case "ADD":
        console.log(action.payload);
            return [...state, action.payload];   
        case "LOAD":
            return action.payload ; 
case "DELETE":
return state.filter(eachstatevalue => { return eachstatevalue.id != action.payload.id });
        default: 
            return state;
    }
}

const data = [];