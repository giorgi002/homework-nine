// first task 👇
// class Car{
//     constructor(make,model,year){
//         this.make = make;
//         this.model = model;
//         this.year = year;
//     }
//     carinfo(){
//         console.log(`Car: ${this.make} ${this.model} ${this.year}`); 
//     }
// }
// class Electriccar extends Car{
//     constructor(make,model,year,batterylevel){
//         super(make,model,year)
//         this.batterylevel = batterylevel;
//     }
//     Electriccarinfo(){
//         console.log(`battery level: ${this.batterylevel}%`);
        
//     }
// }
// const car = new Electriccar('tesla', 'model x',2017, 93);
// car.carinfo();
// car.Electriccarinfo()



// second task 👇
// class Library{
//     constructor(){
//         this.books = [];
//     }
//     additem(title){
//         this.books.push(title)
//     }
//     deleteitem(title){
//         this.books.forEach((book,index) =>{
//             if(title == book ){
//                 this.books.splice(index,1)
//             }
//         })
//     }
//     listbooks(){
//         console.log(`books in the library:`);
//         this.books.forEach((book,index) =>{
//             console.log(`${index + 1} ${book}`);   
//         })
//     }
// }
// const book = new Library();
// book.additem('harry potter');
// book.additem('1984');
// book.additem('animal farm');
// book.listbooks();
// book.deleteitem('1984');
// console.log('after delete');
// book.listbooks()



// third task 👇
// class Salary{
//     constructor(name,wage){
//         this.name = name;
//         this.wage = wage;
//     }
//     calcSalary(hoursworked){
//         return hoursworked * this.wage;
//     }
// }
// const employee = new Salary('giorgi', 50);
// const salary = employee.calcSalary(10);
// console.log(`Salary for ${employee.name}: ${salary}$`);



// fourth task 👇 
// class ShoppingCart{
//     constructor(){
//         this.items = [];
//     }
//     addItem(name,price,quantity){
//         const item = { name, price, quantity}
//         this.items.push(item);
//     }
//     deleteItem(name){
//         this.items.forEach((item, index) =>{
//             if(item.name = item){
//                 this.items.splice(index,1)
//             }
//         });
//     }
//     updateItem(name,newQuantity){
//         this.items.forEach((item) =>{
//             if(item.name == name){
//                 item.quantity = newQuantity
//             }
//         })
//     }
//     calTotal(){
//         let total = 0;
//         this.items.forEach((item) =>{
//             total += item.price * item.quantity
//         })
//         return total;
//     }
// }
// const cart = new ShoppingCart();
// cart.addItem('Apple',1,3)
// cart.addItem('Banana',2,5)
// console.log('Total before update: ', cart.calTotal());
// cart.updateItem('Apple', 5); 
// console.log('Total after update:', cart.calTotal()); 
// cart.deleteItem('Banana');
// console.log('Total after deletion:', cart.calTotal()); 



// fifth task👇
// class Carfactory{
//     constructor(){
//         this.cars = [ ];
//     }
//     additem(make,model,year){
//         const car = {make, model, year}
//         this.cars.push(car)
//     }
//     deleteitem(make,model){
//         this.cars.forEach((car,index)=>{
//             if(car.make == make && car.model == model){
//                 this.cars.splice(index,1)
//             }
//         })

//     }
//     updatecar(index, newMake, newModel, newYear){
//         if (this.cars[index]) {
//             this.cars[index].make = newMake;
//             this.cars[index].model = newModel;
//             this.cars[index].year = newYear;
//         }
//     }
//     getcars(){
//         return this.cars;
//     }
// }
// const newcar = new Carfactory();
// newcar.additem('toyota', 'camry', 2017)
// newcar.additem('bmw', '3 series', 2015)
// console.log("Cars before deletion:", newcar.getcars());
// newcar.deleteitem('toyota', 'camry')
// newcar.updatecar(0, 'bmw', 'X5', 2020);
// console.log("Cars after update:", newcar.getcars());



