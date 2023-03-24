const initState = [null, 0]
//state and init state point same memory so we can't return it
//[username,role]
//manager role -1  employee role -2

function AuthReducer(state = initState, action) {

    switch(action.type) {
        case "login":
            state[0] = action.data.un;
            return state;
        case "logout":
            return [null, 0];
        default:
            return state;
    }

}