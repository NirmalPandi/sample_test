export const selects = () => {
    
    return {
        type: 'REQUEST_API'
    }
};

export const flagg = (data) => {

    return {
        type : 'FLAG',
        payload: data
        
    }
}