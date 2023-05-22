const users = [
    { name: "John", age: 25, occupation: "gardener" },
    { name: "Lenny", age: 51, occupation: "programmer" },
    { name: "Andrew", age: 43, occupation: "teacher" },
    { name: "Peter", age: 81, occupation: "teacher" },
    { name: "Anna", age: 43, occupation: "teacher" },
    { name: "Albert", age: 76, occupation: "programmer" },
    { name: "Adam", age: 47, occupation: "teacher" },
    { name: "Robert", age: 72, occupation: "driver" },
];
function main() {
    // Get the "root" element
    const rootElement = document.getElementById("root");
  
    // Create an h1 element
    const headingElement = document.createElement("h1");
    headingElement.textContent = "FREELANCERS";
  
    // Create an unordered list element
    const listElement = document.createElement("ul");
  
    const users = [
      { name: "John", age: 25, occupation: "gardener" },
      { name: "Lenny", age: 51, occupation: "programmer" },
      { name: "Andrew", age: 43, occupation: "teacher" },
      { name: "Peter", age: 81, occupation: "teacher" },
      { name: "Anna", age: 43, occupation: "teacher" },
      { name: "Albert", age: 76, occupation: "programmer" },
      { name: "Adam", age: 47, occupation: "teacher" },
      { name: "Robert", age: 72, occupation: "driver" }
    ];
  
    // Loop through the users array
    for (let user of users) {
      // Create an li element for each user
      const listItemElement = document.createElement("li");
      listItemElement.textContent = `Name: ${user.name}, Age: ${user.age}, Occupation: ${user.occupation}`;
  
      // Append the li element to the ul element
      listElement.appendChild(listItemElement);
    }
  
    // Append the heading element and list element to the root element
    rootElement.appendChild(headingElement);
    rootElement.appendChild(listElement);
  }
  

//call the main function
main();