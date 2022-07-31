"use strict"
function HashStorageFunc() {
    let self = this;
    self.storage = {};
    self.addValue = ((key, value) => {
        self.storage[key] = value; 
    });
    self.getValue = ((key) => {
        if (key in self.storage) {
            return self.storage[key];
        }
        else {
            return undefined;
        }
    });
    self.deleteValue = ((key) => {
        if (key in self.storage) {
            delete self.storage[key];
            return true;
        }
        else {
            return false;
        }
    });
    self.getKeys = (() => {
        let arrKeys = [];
        for (let key in self.storage) {
            arrKeys.push(key);
        }
        return arrKeys;
    });
}
let drinkStorage = new HashStorageFunc();
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
        if (feedback.type == true) {
            modalItem.innerHTML = `Ваш напиток: ${aboutItem} - алкогольный <br> Рецепт: ${feedback.way}`;
        }
        else {
            modalItem.innerHTML = `Ваш напиток: ${aboutItem} - неалкогольный <br> Рецепт: ${feedback.way}`;
        }
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
