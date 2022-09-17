

const reducer=(state,action)=>{

    
    if(action.type==="GET_USERS"){
        return {...state,usersData:action.payload}
    }
return state;

}

export default reducer;