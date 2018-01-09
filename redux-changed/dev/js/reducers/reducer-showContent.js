const data = { showContent: 0 };

export default function (state = data, action) {
    switch (action.type) {
        case 'SHOWDETAILS':
            return action.payload;
            break;
    }
    return state;
}