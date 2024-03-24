import { SELECT_ADVERT } from "../../Constants/actionTypes";

export const addSelectedAdvertToContext = (payload: any) => (dispatcher: any) => {
    dispatcher({type: SELECT_ADVERT, payload: payload});
}

