
const stateInitial = [];
const CHECK_STATUS = 'redux/categories/categories/CHECK_STATUS';

 export const checkStatus = () =>{
    return {
    type: CHECK_STATUS,
    }
}

export const statusReducer = (state= stateInitial, action) =>{

    switch(action.type){
        case CHECK_STATUS : 
        return 'Under Construction'

        default : return state 
    }
}