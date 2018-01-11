export const addUser = (user) => {
    return fetch('http://localhost:3005/user',
        {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then(
        data =>
            ({
                type: "ADD",
                payload: data.json()
            }),

        error => console.log(error)
        );

};
export const deleteUser = (user) => {
    return fetch('http://localhost:3005/user' + '/' + user.id,
        {
            method: 'DELETE',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        }).then(
        data =>
            ({
                type: "DELETE",
                payload: user
            }),

        error => console.log(error)
        );

};