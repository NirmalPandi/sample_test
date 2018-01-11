export default function (state = [], action) {
    switch (action.type) {
        case "ADD":

            return [...state, { ...action.payload }];
            break;

        default:
            return state;
    }
}


