const initState="this is a login page";
function NavReducer(state=initState,action){
    switch(action.type){
        case "change":
            return action.data.route_val;
        default:
            return state;
    }

}
export default NavReducer;