const favorites = (state: any, { type, payload }: any) => {
  switch (type) {
    case "ADD":
      return {
        ...state,
        favorite: [...state.favorite, payload],
      };
    case "REMOVE":
      return { ...state, favorite: state.favorite.filter(item => item !=payload.toString())};
    default:
      return state;
  }
};

export default favorites;
