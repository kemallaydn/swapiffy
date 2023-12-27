const favorites = (state: any, { type, payload }: any) => {
  switch (type) {
    case "EKLE":
      return {
        ...state,
        favorite: [...state.favorite, payload], // Yeni objeyi ekleyerek diziyi güncelle
      };
    case "CIKAR":
      return { ...state, favorite: state.favorite.filter(item => item.product.urunId !== payload.product.urunId) };
    default:
      return state;
  }
};

export default favorites;
