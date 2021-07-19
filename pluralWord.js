function pluarWord(quantity) {
    if(quantity == 0 || (quantity % 10) == 0  || (quantity >= 5 && quantity <= 20) || (quantity % 10 >= 5 && quantity % 10 <= 20)) return "ок";
    else if(quantity == 1 || (quantity % 10) == 1) return "ка";
    else if((quantity >= 2 && quantity <= 4) || (quantity % 10 >= 2 && quantity % 10 <= 4)) return "ки";
}

for (let i = 0; i <= 35; i++) console.log(i + " Руч" + pluarWord(i));
