
/*Requirements for Coffee cafe
1. User must enter name at the beginning of order
2. After entering the name, the user  sees a greeting with his name and a question - What would you like to drink today?
3. All types of existing drinks with ingredients appear on the screen after greeting
4. There are two types of beverages: tea and coffee
5. There are two types of coffee: Caffe Latte, Cinnamon Coffee
6. There are two types of tea: Black tea, Green Tea
7. After selecting a dring, the sizes of the cups with prices appears on the screen
8. There are three types of cup sizes: small, medium, big
9. The price depends on the size of the cup, not on the type of drink:
    - small cup: 2.0 $
    - medium cup: 4.0 $
    - big cup: 6.0 $
10. Show to a user the name and the ingredients of each type of coffee before an order
11. User should be able to make an order, by choosing cup size and coffee type
12. When a choice is made, calculate the price based on cup size. */
 
class Beverage {
    constructor(name) {
        this.name = name;
    }

    greeting() {
        console.log(`Hi ${this.name}! What would you like to drink today?

        1. Black Tea.
            Ingredients: Black Tea, Hot Water.

        2. Green Tea. 
            Ingredients: Green Tea, Hot Water.

        3. Caffe Latte. 
            Ingredients: Espresso Roast, Whole Milk, Vanilla Syrup.

        4. Cinnamon Coffee. 
            Ingredients: Brewed Coffee, Cinnamon Sticks, Hot Water`);
    }

    getTeaCupSize() {
        console.log(`Select cup size:

        1. Small:   2.0 $
        2. Medium:  4.0 $
        3. Big:     6.0 $`);
    }
}

class Tea extends Beverage {
    constructor(name, beverage, cupSize) {
        super(name);
        this.beverage = beverage;
        this.cupSize = cupSize;
    }

    orderInfo() {
        console.log(`Your choice: ${this.beverage}. 
        Cup size: ${this.cupSize}.`);
    }

    totalIs() {
        let total;
        if (this.cupSize === 'small') {
            total = 2.0;
        } else if (this.cupSize === 'medium') {
            total = 4.0;
        } else if (this.cupSize === 'big') {
            total = 6.0;
        } else {
            console.log('Invalid cup size.');
            return;
        }
        console.log(`Total: ${total} $. Thank You!`);
    }
}

const beverage = new Beverage('John');
beverage.greeting();
beverage.getTeaCupSize();

const tea = new Tea('John', 'Black Tea', 'small');
tea.orderInfo();
tea.totalIs();

class Coffee extends Beverage {
    constructor(name, beverage, cupSize) {
        super(name);
        this.beverage = beverage;
        this.cupSize = cupSize;
    }

    orderInfo() {
        console.log(`Your choice: ${this.beverage}. 
        Cup size: ${this.cupSize}.`);
    }

    totalIs() {
        let total;
        if (this.cupSize === 'small') {
            total = 2.0;
        } else if (this.cupSize === 'medium') {
            total = 4.0;
        } else if (this.cupSize === 'big') {
            total = 6.0;
        } else {
            console.log('Invalid cup size.');
            return;
        }
        console.log(`Total: ${total} $ Thank You!`);
    }
}

const beverage1 = new Beverage('Alice');
beverage1.greeting();
beverage1.getTeaCupSize();

const coffee = new Tea('Alice', 'Cinnamon Coffee', 'big');
coffee.orderInfo();
coffee.totalIs();