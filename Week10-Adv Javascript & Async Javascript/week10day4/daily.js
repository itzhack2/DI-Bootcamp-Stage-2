document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const outputDiv = document.getElementById('output');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); 
  
      // Retrieve data from the inputs
      const nameInput = document.getElementById('name');
      const lastNameInput = document.getElementById('lastName');
  
      const name = nameInput.value;
      const lastName = lastNameInput.value;
  
   
      const data = {
        name: name,
        lastName: lastName
      };
  
      
      const jsonString = JSON.stringify(data);
  
      
      outputDiv.textContent = jsonString;
    });
  });