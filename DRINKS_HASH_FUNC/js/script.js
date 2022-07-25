"use strict"
let drinkStorage = {};
drinkStorage = HashStorageFunc();
function writeInfoItem() {
    let nameDrinkS = prompt('Введите название напитка:');
    let nameDrink = nameDrinkS.trim().toLocaleLowerCase();
    let objTypeAndWay = {};
    objTypeAndWay.name = nameDrink;
    objTypeAndWay.type = confirm(nameDrink + ' - это алкольный напиток?');
    if (objTypeAndWay[1] === false) {
        objTypeAndWay.type = 'Неалкогольный';
    }
    else {
        objTypeAndWay.type = 'Алкогольный';
    }
    let wayS = prompt('Введите, пожалуйста, рецепт вашего напитка:');
    let way = wayS.trim().toLocaleLowerCase();
    objTypeAndWay.way = way;
    drinkStorage.addValue(InfoItem.objTypeAndWay);
    console.log(objTypeAndWay);
}

