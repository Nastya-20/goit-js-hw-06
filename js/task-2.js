class Storage {
    #items;

    constructor(initialItems) {
        this.#items = [...initialItems];
    }
    
    getItems() {
        return this.#items;
    }

    addItem(newItem) {
        this.#items.push(newItem);
    }

    removeItem(itemToRemove) {
        const index = this.#items.indexOf(itemToRemove);
        if (index !== -1) {
            this.#items.splice(index, 1);
        }
        return this.#items; // Додатково повертаємо масив після видалення
    }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]

storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]

console.log(storage.removeItem("Prolonger")); // ["Nanitoids", "Antigravitator", "Droid"]
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]



