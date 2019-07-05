export default function (state={loading:true,data:{}},action) {
    switch (action.type) {
        case "PERSON_UPDATA":
            return {
                loading:true,
                data:state.data
            }
        case "PERSON_SUCC":
            return {
                loading:false,
                data:action.data.data
            }
        case "PERSON_ERROR":
            return {
                loading: false,
                data:{data:[]}
            }
        default:
            return state;
    }
}