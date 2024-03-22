const favorites = (state: any, { type, payload }: any) => {
    switch (type) {
      case "ADD":
        return {
          ...state,
          data: payload
        };
      case "REMOVE":
        return {
            ...state,
            data: null
        }
      default:
        return state;
    }
  };
  
  export default favorites;
  