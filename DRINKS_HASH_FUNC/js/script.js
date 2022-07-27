"use strict"
function HashStorageFunc() {
    let self = this;
    self.storage = {};
    self.addValue((key, value) => {
        self.storage[key] = value; 
    });
    self.getValue((key) => {
        if (key in self.storage) {
            return self.storage[key];
        }
        else {
            return undefined;
        }
    });
    self.deleteValue((key) => {
        if (key in self.storage) {
            delete self.storage[key];
            return true;
        }
        else {
            return false;
        }
    });
    self.getKeys(() => {
        let arrKeys = [];
        for (let key in self.storage) {
            arrKeys.push(key);
        }
        return arrKeys;
    });
}
let drinkStorage = new HashStorageFunc();
let infoItem = document.querySelector('.info_item');
infoItem.addEventListener('click', () => {
    let keyName = trim(prompt('Введите название напитка:'));
    let objValue = {};
    objValue.type = confirm(keyName + '- это алкогольный напиток?');
    objValue.way = trim(prompt('Введите, пожалуйста, рецепт' + keyName));
    drinkStorage.addValue(keyName, objValue);
});
let getInfoItem = document.querySelector('.get_info+item');
getInfoItem.addEventListener('click', () => {
    let aboutItem = prompt('Введите название Вашего напитка:');
    let modalItem = document.querySelector('.modal_about_item');
    let feedback = drinkStorage.getValue(aboutItem);
    if (drinkStorage.getValue(aboutItem) !== undefined) {
        modalItem.innerHTML = 'Ваш напиток: ' + aboutItem + "Тип: " + feedback.type === true ? "Алкогольный" : "Неалкогольный" + "////" + "Рецепт Вашего напитка: " + feedback.way ? feedback.way : "Рецепт не был найден";
    }
    else {
        modalItem.innerHTML = 'Данный напиток не был найден';
    }
});
let deleteInfoItem = document.querySelector('.delete_info_item');
deleteInfoItem.addEventListener('click', () => {
    let aboutDeleteItem = prompt('Введите название Вашего напитка:');
    let modalItem = document.querySelector('.modal_about_item');
    if (drinkStorage.deleteValue(aboutDeleteItem) == true) {
        modalItem.innerHTML = 'Ваш напиток: ' + aboutDeleteItem + ' Был найден и успешно удалён';
    }
    else {
        modalItem.innerHTML = 'К сожалению, такого напитка нет!';
    }
});
let listItems = document.querySelector('.list_items');
listItems.addEventListener('click', () => {
    let modalItem = document.querySelector('.modal_about_item');
    modalItem.innerHTML = drinkStorage.getKeys();
});
