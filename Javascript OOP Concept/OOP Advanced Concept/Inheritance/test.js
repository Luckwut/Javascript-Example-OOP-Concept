class Item {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    addQuantity(amount) {
        if (amount <= 0 || isNaN(amount)) {
            console.log(`Quantity Invalid`);
            return;
        }

        this.quantity += amount;
        console.log(`Added ${amount} items to ${this.name}. Current Quantity: ${this.quantity}`);
    }

    removeQuantity(amount) {
        if (amount <= 0 || amount > this.quantity || isNaN(amount)) {
            console.log(`Invalid quantity. Cannot remove.`);
            return;
        }

        this.quantity -= amount;
        console.log(`Removed ${amount} items from ${this.name}. Current Quantity: ${this.quantity}`);
    }

    getInfo() {
        console.log(`Item name: ${this.name}\nItem Price: ${this.price}\nItem Quantity: ${this.quantity}`);
    }
}

class GroceryItem extends Item {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = new Date(expirationDate);
    }

    setExpiration(newDate) {
        this.expirationDate = new Date(newDate);
        console.log(`${this.name} item expiration date has been set to ${this.expirationDate}`);
    }

    checkExpiration() {
        const currentDateMs = new Date().getTime();
        const expirationDateMs = this.expirationDate.getTime();

        if (currentDateMs > expirationDateMs) {
            console.log(`WARNING: This ${this.name} is past its expiration date!`);
        } else {
            console.log(`This ${this.name} is still good to consume.`);
        }
    }
}