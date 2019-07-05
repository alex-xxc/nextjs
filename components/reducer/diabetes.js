const defaultState={
    load:false,
    loading:false,
    inputValue:'',
    data:'asdasdas',
    list:[]
}
export default function diabetes(state=defaultState,action) {
    const newState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case "GET_LIST_DATA":
            newState.list = action.list;
            return newState;
        case "INPUT_CHANGE":
            newState.inputValue = action.inputValue;
            return newState;
        case "GET_DATA_SUCCESS":
            newState.data = action.data;
            newState.load = action.load;
            newState.loading = action.loading;
            return newState;
        case "GET_DATA_ERROR":
            newState.load = action.load;
            newState.loading = action.loading;
            return newState;
        case "DATA_LOADING":
            newState.loading = true;
            return newState;
        default:
            return state;
    }
}