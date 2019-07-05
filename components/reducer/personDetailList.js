export default function (state={loading:true,data:{}},action) {
    switch (action.type) {
        case "PERSONDETAIL_UPDATA":
            return {
                loading:true,
                data:state.data
            }
        case "PERSONDETAIL_SUCC":
            return {
                loading:false,
                data:action.data.data
            }
        case "PERSONDETAIL_ERROR":
            return {
                loading: false,
                data:{data:[]}
            }
        default:
            return state;
    }
}