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
    self.getKeys((key) => {
        let arrKeys = [];
        for (let key in self.storage) {
            arrKeys.push(key);
        }
        return arrKeys;
    });
}
