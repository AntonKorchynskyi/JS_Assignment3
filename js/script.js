const nameStudID = document.querySelector("#name_StudID");
const createBtn = document.querySelector("button");
const pizzaDescription = document.querySelector("#pizzaDescription");
const totalCost = document.querySelector("#totalCost");
const lowerDiv = document.querySelector("#lowerDiv");

createBtn.addEventListener("click", createPizza);

let myPizza;

function createPizza() {

    nameStudID.textContent = "Anton Korchynskyi - 20024341"

    const pizzaSize = document.querySelector("#pizzaSize").value;
    const dough = document.querySelector("#dough").value;
    const baseSauce = document.querySelector("#baseSauce").value;
    const baseCheese = document.querySelector("#baseCheese").value;
    const peppers = document.querySelector("#peppers").value;
    const tomatoes = document.querySelector("#tomatoes").checked;
    const onions = document.querySelector("#onions").checked;
    const chicken = document.querySelector("#chicken").checked;
    const beef = document.querySelector("#beef").checked;
    const pork = document.querySelector("#pork").checked;
    const regularCheese = document.querySelector("#regular").checked;
    const mozzarella = document.querySelector("#mozzarella").checked;
    const feta = document.querySelector("#feta").checked;
    const parmesan = document.querySelector("#parmesan").checked;
    const blueCheese = document.querySelector("#blueCheese").checked;
    let quantity = document.querySelector("#quantity").value;

    newPizza = new Pizza(pizzaSize, dough, baseSauce, baseCheese, peppers, tomatoes, onions, chicken, beef, pork, regularCheese, mozzarella, feta, parmesan, blueCheese, quantity); 

    newPizza.description();
}

class Pizza {
    pizzaSize; 
    dough; 
    baseSauce; 
    baseCheese; 
    peppers; 
    tomatoes; 
    onions; 
    chicken; 
    beef; 
    pork; 
    regularCheese; 
    mozzarella; 
    feta; 
    parmesan; 
    blueCheese;
    quantity;
    totalPrice = 0;
    
    constructor(pizzaSize, dough, baseSauce, baseCheese, peppers, tomatoes, onions, chicken, beef, pork, regularCheese, mozzarella, feta, parmesan, blueCheese, quantity) {
        
        this.pizzaSize = pizzaSize;
        switch (this.pizzaSize) {
            case "small":
                this.totalPrice += 1;
                break;
            case "medium":
                this.totalPrice += 2;
                break;
            case "large":
                this.totalPrice += 3;
                break;
            case "x-large":
                this.totalPrice += 4;
                break;
        }

        this.dough = dough; 
        switch (this.dough) {
            case "regular dough":
                this.totalPrice += 1;
                break;
            case "regular thin dough":
                this.totalPrice += 2;
                break;
            case "regular thick dough":
                this.totalPrice += 3;
                break;
        }

        this.baseSauce = baseSauce; 
        switch (this.baseSauce) {
            case "pesto sauce":
                this.totalPrice += 3;
                break
            case "red sauce":
                this.totalPrice += 2;
                break;
            case "white sauce":
                this.totalPrice += 2;
                break;
        }

        this.baseCheese = baseCheese; 
        switch (this.baseCheese) {
            case "regular":
                this.totalPrice += 1;
                break
            case "mozzarella":
                this.totalPrice += 2;
                break;
        }

        this.peppers = peppers;
        switch (this.peppers) {
            case "no peppers":
                break;
            case "green peppers":
                this.totalPrice += 1;
                break;
            case "red peppers":
                this.totalPrice += 1;
                break;
            case "jalapeno peppers":
                this.totalPrice += 3;
                break;
        }

        this.tomatoes = tomatoes;
        if (this.tomatoes) {
            this.totalPrice += 1;
            this.tomatoes = "some tomato slices";
        }
        else {
            this.tomatoes = "no tomatoes slices";
        }

        this.onions = onions;
        if (this.onions) {
            this.totalPrice += 1;
            this.onions = "some onion rings";
        }
        else {
            this.onions = "no onions rings";
        }

        this.chicken = chicken;
        if (this.chicken) {
            this.totalPrice += 2;
            this.chicken = "some chicken";
        }
        else {
            this.chicken = "no chicken";
        } 
        
        this.beef = beef;
        if (this.beef) {
            this.totalPrice += 2;
            this.beef = "some beef";
        }
        else {
            this.beef = "no beef";
        }

        this.pork = pork;
        if (this.pork) {
            this.totalPrice += 2;
            this.pork = "some pork";
        }
        else {
            this.pork = "no pork";
        }

        this.regularCheese = regularCheese;
        if (this.regularCheese) {
            this.totalPrice += 1;
            this.regularCheese = "extra regular cheese";
        }
        else {
            this.regularCheese = "no extra regular cheese";
        }

        this.mozzarella = mozzarella;
        if (this.mozzarella) {
            this.totalPrice += 2;
            this.mozzarella = "extra mozzarella";
        }
        else {
            this.mozzarella = "no extra mozzarella";
        }

        this.feta = feta;        
        if (this.feta) {
            this.totalPrice += 2;
            this.feta = "extra feta";
        }
        else {
            this.feta = "no extra feta";
        }

        this.parmesan = parmesan;
        if (this.parmesan) {
            this.totalPrice += 3;
            this.parmesan = "extra parmesan";
        }
        else {
            this.parmesan = "no extra parmesan";
        }

        this.blueCheese = blueCheese;
        if (this.blueCheese) {
            this.totalPrice += 5;
            this.blueCheese = "extra D'or blu (Blue) cheese";
        }
        else {
            this.blueCheese = "no extra D'or blu (Blue) cheese";
        }

        if (!Number.isInteger(quantity)) {
            quantity = Number(quantity);
        }
        
        if (Number.isInteger(quantity) && quantity > 0) {
            this.quantity = quantity;
            this.totalPrice = this.totalPrice * this.quantity;
        } else {
            this.quantity = 'None';
        }
        
    }

    output() {
        console.clear();
        for (const [key, value] of Object.entries(this)) {
            console.log(`${key}: ${value}`);
        };
    }

    description() {
        if (Number.isInteger(this.quantity)) {
            pizzaDescription.textContent = `Your ${this.quantity} ${this.pizzaSize} pizza(s) consist(s) of ${this.dough}, ${this.baseSauce}, ${this.baseCheese} cheese base, ${this.peppers}, ${this.tomatoes}, ${this.onions}, ${this.chicken}, ${this.beef}, ${this.pork}, ${this.regularCheese}, ${this.mozzarella}, ${this.feta}, ${this.parmesan}, and ${this.blueCheese}`;
            totalCost.textContent = "The total price of your order is " + this.totalPrice + "$";
        }
        else {
            pizzaDescription.textContent = "Quantity should be integer bigger than 0";
            totalCost.textContent = "";
        }
    }
}