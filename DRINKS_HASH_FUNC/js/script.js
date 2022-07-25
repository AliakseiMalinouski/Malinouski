"use strict"
function HashStorageFunc() {
    let self = this;
    self.addValue = function (key, value) {
        self[key] = value;
    }
    self.getValue((key) => {
        if (key in self) {
            return self[key];
        }
        else {
            return undefined;
        }
    });
    self.deleteValue((key) => {
        if (key in self) {
            delete self[key];
        }
        else {
            return false;
        }
    });
    self.getKeys((key) => {
        let arrKeys = [];
        for (let i = 0; i < arrKeys.length; i++) {
            self.includes(key) ? arrKeys.push(key) : arrKeys;
        }
        return arrKeys;
    });
}

