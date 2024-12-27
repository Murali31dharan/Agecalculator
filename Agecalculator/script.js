document.getElementById('age-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the form from refreshing the page
    
    const dob = new Date(document.getElementById('dob').value);
    const today = new Date();
    
    // Calculate age
    let age = today.getFullYear() - dob.getFullYear();
    const month = today.getMonth() - dob.getMonth();
    
    // Adjust age if the birthday hasn't occurred yet this year
    if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    
    // Show the result
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `Your age is: ${age} years old.`;
    resultDiv.style.display = 'block'; // Make the result visible
});
