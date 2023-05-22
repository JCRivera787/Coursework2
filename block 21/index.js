/*function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  // Example usage
  const myCar = new Car('Toyota', 'Corolla', 2022);
  console.log(myCar.make);  // Output: Toyota
  console.log(myCar.model); // Output: Corolla
  console.log(myCar.year);  // Output: 2009*/

  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  Car.prototype.getDescription = function() {
    return `${this.make} ${this.model} (${this.year})`;
  };
  
  // Example usage
  const myCar = new Car('Toyota', 'Corolla', 2009);
  console.log(myCar.getDescription()); // Output: Toyota Corolla (2009)
  



  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  
  Car.prototype.getDescription = function() {
    return `${this.make} ${this.model} (${this.year})`;
  };
  
  function ElectricCar(make, model, year, range) {
    Car.call(this, make, model, year);
    this.range = range;
  }
  
  ElectricCar.prototype = Object.create(Car.prototype);
  ElectricCar.prototype.constructor = ElectricCar;
  
  ElectricCar.prototype.getDescription = function() {
    return `${this.make} ${this.model} (${this.year}) - Range: ${this.range} miles`;
  };
  
  // Create an instance of ElectricCar
  const myElectricCar = new ElectricCar('Tesla', 'Model S', 2019, 300);
  
  // Call getDescription method on the instance
  const description = myElectricCar.getDescription();
  console.log(description); // Output: Tesla Model S (2019) - Range: 300 miles
  