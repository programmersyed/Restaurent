let menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts:[]
  },
    get desserts() {
    return this._courses.desserts;
  },
    get mains() {
    return  this._courses.mains;
    
  },
  get appetizers() {
    return this._courses.appetizers;
  },

  set appetizers(appetizers) {
 this._courses.appetizer = appetizers;
  },
set main(mains) {
 this._courses.main = mains;},

 set desserts(desserts) {
 this._courses.desserts = desserts;},
 get courses (){
   return {
     appetizers: this.appetizers,
     mains: this.mains,
      desserts: this.desserts,
   };
 },
 addDishToCourse(courseName, dishName, dishPrice){
   const dish = {
     name: dishName,
     price: dishPrice,
   };
   return this._course[courseName].push(dish)
 },
 getRandomDishFromCourse(courseName){
   const dishes = this._courses[courseName];
   const randomIndex = math.floor(math.random() * dishes.length);
   return dishes [randomIndex];
 },
 generateRandomMeal(){
   const appetizer = this.getRandomDishFromCourse('appetizers');
   const main = this.getRandomDishFromCourse('mains')
   const desserts = this.getRandomDishFromCourse('desserts')
   const totalPrice = appetizers.price + main.price + dessert.price;
return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice}`
 }
};
menu.addDishToCourse('appetizers', 'salad', 4.00);
menu.addDishToCourse('appetizers', 'wings', 4.30);
menu.addDishToCourse('appetizers', 'fries', 4.60);

menu.addDishToCourse('mains', 'biryani', 10.60);
menu.addDishToCourse('mains', 'salmon', 8.60);
menu.addDishToCourse('mains', 'tofu', 0.60);

menu.addDishToCourse('desserts', 'cake', 10.60);
menu.addDishToCourse('desserts', 'tres leches', 9.60);
menu.addDishToCourse('desserts', 'coffee', 3.60);
const meal = menu.generateRandomMeal();
console.log(meal);