import { GET_ALL_ADVERTS, CLEAR_SELECTED_ADVERT, SELECT_ADVERT, ADD_ADVERT, GET_FAVORITES_ADVERTS, ADD_FAVORITES_ADVERTS, REMOVE_FAVORITES_ADVERTS, GET_FAVORITES_ADVERTS_ID, GET_FAVORITES_ADVERTS_BY_ID } from '../../Constants/actionTypes';

const Advert = (state: any, { type, payload }: any) => {
    switch (type) {
      case GET_ALL_ADVERTS:
        return {
          ...state,
          allAdverts: payload,
        };
      case SELECT_ADVERT:
        return {
            ...state,
            selectAdvert: payload
        }
      case ADD_ADVERT:
        return {
            ...state,
            selectAdvert: payload
        }
      case GET_FAVORITES_ADVERTS:
        return {
            ...state,
            favoriteAdverts: payload
        }
      case ADD_FAVORITES_ADVERTS:
        return {
            ...state,
            favoriteAdverts: [...state.favoriteAdverts, payload]
        }
        case GET_FAVORITES_ADVERTS_BY_ID:
          return {
              ...state,
              favoriteAdvertsId: payload
          }
      case REMOVE_FAVORITES_ADVERTS:
        return {
            ...state,
            favoriteAdverts: state.favoriteAdverts.filter((item: any) => item.id !== payload)
        }
      case CLEAR_SELECTED_ADVERT:
        return {
          ...state,
          selectAdvert: null
      }
      default:
        return state;
    }
  };
  
  export default Advert;
  