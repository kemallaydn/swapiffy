
const favorites = (state: any, { type, payload }: any) => {
    switch (type) {
        case "ADD_SUCCES":
            const urunIndex = state.sepet.findIndex(item => item.urunId === payload.urunId);

            if (urunIndex !== -1) {
              // Eğer ürün sepette varsa, adet sayısını arttır
              const yeniSepet = [...state.sepet];
              yeniSepet[urunIndex].adet += payload.adet;
          
              return { ...state, sepet: yeniSepet };
            } else {
              // Eğer ürün sepette yoksa, ekleyin
              return { ...state, sepet: [...state.sepet, payload] };
            }
        case "CIKAR":
            return { ...state, sepet: state.sepet.filter(item => item.urunId !== payload.urunId) };
        case "GUNCELLE":
            return { ...state, sepet: state.sepet.filter(item => item.urunId !== payload.urunId) };
        default:
            return state;
    }
};

export default favorites;
