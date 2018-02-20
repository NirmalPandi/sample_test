export default function (state = data, action) {
    switch (action.type) {
        case 'FLAG':
        
        return action.payload;
        break;
        

        default: 
            return state;
    }
}

const data = false;