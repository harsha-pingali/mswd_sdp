const initState="this is a login page";
function NavReducer(state=initState,action){
    switch(action.type){
        case "change":
            return action.data;
        default:
            return state;
    }

}
export default NavReducer;