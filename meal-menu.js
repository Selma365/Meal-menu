const menu={
    _courses: {
      appetizers:[],
      mains:[],
      desserts:[]
    },
  
    get appetizers(){
      return this._courses.appetizers;
    },
    get mains(){ return this._courses.mains},
    get desserts(){ return this._courses.desserts},
  
    set appetizers(appetizersIn){
      this._courses.appetizers=appetizersIn; },
    set mains(mainsIn){ this._courses.mains=mainsIn;},
    set desserts(dessertsIn){this._courses.desserts=dessertsIn},
  
    get courses(){
      return{
        appetizers:this.appetizers,
        mains:this.mains,
        desserts:this.desserts
      };
    },
  
    addDishToCourse(courseName,dishName,dishPrice){
      const dish={
        name: courseName,
        price: dishPrice,
      };
      this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
      const dishes=this._courses[courseName];
      const randomindex = Math.floor(Math.random() * dishes.length);
      return dishes[randomindex];
    },
  
    generateRandomMeal(){
      const appetizer= this.getRandomDishFromCourse('appetizer');
      const main= this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
    
  const totalprice = appetizer.price + main.price + dessert.price;
  return `Your meal is ${appetizer.name}, ${main.name},${dessert.name}  and price is ${totalprice}` ;
    }
  };
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('appetizers', ' Salad', 4.00);
  menu.addDishToCourse('appetizers', 'Caesar ', 1.25);
  
  menu.addDishToCourse('appetizers', 'fries', 3.25);
  menu.addDishToCourse('appetizers', ' stack', 5.00);
  menu.addDishToCourse('appetizers', 'ice cream', 1.00);
  
  const meal=menu.generateRandomMeal();
  console.log(meal);
