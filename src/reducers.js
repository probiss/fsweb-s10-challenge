import { NOT_EKLE,NOT_SIL } from "./actions";

const s10chLocalStorageKey = "s10ch";

const baslangicDegerleri = {
  notlar: [
    {
      id: "75g1IyB8JLehAr0Lr5v3p",
      date: "Fri Feb 03 2023 09:40:27 GMT+0300 (GMT+03:00)",
      body: "Bugün hava çok güzel!|En iyi arkadaşımın en iyi arkadaşı olduğumu öğrendim :)|Kedim iyileşti!",
    },
  ],
};

function localStorageStateYaz(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function localStorageStateOku(key) {
  return JSON.parse(localStorage.getItem(key));
}

function baslangicNotlariniGetir(key) {
  const eskiNotlar = localStorage.getItem(key);

  if (eskiNotlar) {
    return localStorageStateOku(key);
  } else {
    return baslangicDegerleri
  }
}

export function myReducer(state = baslangicNotlariniGetir(s10chLocalStorageKey), action) {
  let newState;
  if (action.type === NOT_EKLE) {
    console.log("type",NOT_EKLE);
    newState = {
      ...state,
      notlar:[...state.notlar, action.payload]
    };
    localStorageStateYaz(s10chLocalStorageKey, newState);
    return newState;
  }else if (action.type === NOT_SIL){
    newState = {
      ...state,
      notlar:[...state.notlar.filter((item)=> item.id !== action.payload)],};
      localStorageStateYaz(s10chLocalStorageKey, newState);
      return newState;
  }else {
  return state ;
  }
  
}