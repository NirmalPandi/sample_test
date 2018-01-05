export const selectUser = (user) => {
    console.log("You clicked on user: ", user.first);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
// export const editUser = (user) => {
//     console.log("You clicked on user: ", user.first);
//     return {
//         type: 'editUser',
//         payload: user
//     }
// };
export const modify = (user) => {

    return {
        type: 'modify',
        payload: user
    }

};

export const deleteUser = (user) => {
    return {
        type: 'USER_DELETED',
        payload: user
    }
}