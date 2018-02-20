export default function (state = data, action) {
    switch (action.type) {
        case 'SUCCESS_API':
        
        return [...action.payload];
        break;
        

        default: 
            return state;
    }
}

const data = [];