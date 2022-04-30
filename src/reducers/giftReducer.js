import { types } from "../types/types";

export const giftReducer = (state={}, action) => {

    switch(action.type){
        case types.AddGift:
            console.log(state);
                return{
                    
                    ...state,
                    gifts:[action.payload,...state.gifts]
                }
        case types.LogoutGift:
            return{}
        case types.LoadGift:
            return{
                ...state,
                gifts:[...action.payload]
            }
        case types.DeleteGift:
            return{
                ...state,
                gifts:state.gifts.filter(gift=>gift.id!==action.payload)
            }
        default:
            return state;
    }


}
