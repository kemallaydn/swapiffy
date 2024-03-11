
const sepet = (state: any, { type, payload }: any) => {
    switch (type) {
        case "ADD_SUCCES":
              return { ...state, sepet:  payload };
        case "CIKAR":
            return { ...state, sepet: state.sepet.filter(item => item.urunId !== payload.urunId) };
        case "GUNCELLE":
            return { ...state, sepet: state.sepet.filter(item => item.urunId !== payload.urunId) };
        default:
            return state;
    }
};

export default sepet;
