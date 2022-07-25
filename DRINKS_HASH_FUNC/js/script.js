"use strict"

function HashStorageFunc(){
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
    drinkStorage.addValue(InfoItem,objTypeAndWay);
    // console.log(objTypeAndWay);
}
let drinkStorage = new HashStorageFunc();