"use strict"
class HashStorageClass {
    constructor () {
        this.storage = {}
    }
    addValue(key, value){
        this.storage[key] = value; 
    }
    getValue(key){
        if (key in this.storage) {
            return this.storage[key];
        }
        else {
            return undefined;
        }
    }
    deleteValue(key) {
        if (key in this.storage) {
            delete this.storage[key];
            return true;
        }
        else {
            return false;
        }
    }
    getKeys () {
        let arrKeys = [];
        for (let key in this.storage) {
            arrKeys.push(key);
        }
        return arrKeys;
    }
}
let drinkStorage = new HashStorageClass();
function addInfoItem() {
    let keyName = prompt('Введите название напитка:');
    let objValue = {};
    objValue.type = confirm(keyName + ' - это алкогольный напиток?');
    objValue.way = prompt('Введите, пожалуйста, рецепт ' + keyName)
    drinkStorage.addValue(keyName, objValue);
}
function itemGet() {
    let aboutItem = prompt('Введите название Вашего напитка:');
    let modalItem = document.querySelector('.modal_about_item');
    let feedback = drinkStorage.getValue(aboutItem);
    if (feedback !== undefined) {
        modalItem.innerHTML = `Ваш напиток: ${aboutItem} - ${ feedback.type ? "алкогольный" : "неалкогольный" } <br> Рецепт: ${feedback.way}`;
    }
    else {
        modalItem.textContent = 'Данный напиток не был найден';
    }
}
function itemDelete() {
    let aboutDeleteItem = prompt('Введите название Вашего напитка:');
    let modalItem = document.querySelector('.modal_about_item');
    if (drinkStorage.deleteValue(aboutDeleteItem) == true) {
        modalItem.textContent = 'Ваш напиток: ' + aboutDeleteItem + ' Был найден и успешно удалён';
    }
    else {
        modalItem.textContent = 'К сожалению, такого напитка нет!';
    }
}
function itemKeys() {
    let modalItem = document.querySelector('.modal_about_item');
    modalItem.textContent = drinkStorage.getKeys();
}