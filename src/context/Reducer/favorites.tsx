

  
  const favorites = (state:any, {type, payload}:any) => {
    switch (type) {
        case "EKLE":
            return {
              ...state,
              favorite: [...state.favorite, payload], // Yeni objeyi ekleyerek diziyi güncelle
            };
    case "CIKAR":
      return { ...state, favoriUrunler: state.favoriUrunler.filter(item => item !== payload) };
    default:
      return state;
  }
  };
  
  export default favorites;
  