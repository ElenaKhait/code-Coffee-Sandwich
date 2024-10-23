class Sandwich {
    constructor(name) {
        this.name = name;
    }

    greeting() {
        console.log(`Hi ${this.name}! Select sandwich!`);
    }

    makeSandwich() {
        console.log(`Select sandwich:

        1. Deluxe McCrispy
           Ingredients: Potato Roll, Crispy Chicken Fillet, Roma Tomato, Shredded Lettuce, Mayonnaise
        
        Price: 8.0 $

        2. McCrispy
           Ingredients: Potato Roll, Crispy Chicken Fillet, Crinkle Cut Pickle, Salted Butter
        
        Price: 6.0 $

        3. Filet-O-Fish
           Ingredients: Regular Bun, Fish Filet Patty, Tartar Sauce, American Yellow Cheese
        
        Price: 6.0 $ `);
    }
}

class DeluxeMcCrispy extends Sandwich {
    constructor(name, sandwich, amount) {
        super(name);
        this.sandwich = sandwich;
        this.amount = amount;
    }

    orderInfo() {
        console.log(`Your choice: ${this.sandwich}. 
        Amount: ${this.amount}.`);
    }

    totalIs() {
        let total;
        if (this.amount > 0 && this.amount <= 10) {
            total = this.amount*8;
        } else {
            console.log('select the number of sandwiches');
            return;
        }
        console.log(`Total: ${total} $. Thank You!`);
    }
}

const sandwich = new Sandwich('John');
sandwich.greeting();
sandwich.makeSandwich();

const deluxeMcCrispy = new DeluxeMcCrispy('John', 'Deluxe McCrispy', 3);
deluxeMcCrispy.orderInfo();
deluxeMcCrispy.totalIs();


class McCrispy extends Sandwich {
    constructor(name, sandwich, amount) {
        super(name);
        this.sandwich = sandwich;
        this.amount = amount;
    }

    orderInfo() {
        console.log(`Your choice: ${this.sandwich}. 
        Amount: ${this.amount}.`);
    }

    totalIs() {
        let total;
        if (this.amount > 0 && this.amount <= 10) {
            total = this.amount*6;
        } else {
            console.log('select the number of sandwiches');
            return;
        }
        console.log(`Total: ${total} $. Thank You!`);
    }
}

const sandwich1 = new Sandwich('Anna');
sandwich1.greeting();
sandwich1.makeSandwich();

const mcCrispy = new McCrispy('Anna', 'McCrispy', 2);
mcCrispy.orderInfo();
mcCrispy.totalIs();

class FiletOFish extends Sandwich {
    constructor(name, sandwich, amount) {
        super(name);
        this.sandwich = sandwich;
        this.amount = amount;
    }

    orderInfo() {
        console.log(`Your choice: ${this.sandwich}. 
        Amount: ${this.amount}.`);
    }

    totalIs() {
        let total;
        if (this.amount > 0 && this.amount <= 10) {
            total = this.amount*6;
        } else {
            console.log('select the number of sandwiches');
            return;
        }
        console.log(`Total: ${total} $. Thank You!`);
    }
}

const sandwich2 = new Sandwich('Sandy');
sandwich2.greeting();
sandwich2.makeSandwich();

const filetOFish = new FiletOFish('Sandy', 'Filet-O-Fish', 5);
filetOFish.orderInfo();
filetOFish.totalIs();