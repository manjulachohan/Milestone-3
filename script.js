// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // Collect input values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //Generte the resume content dynamically
    var resumeHTML = "\n    <h2><b>Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p2><b>Name</b>".concat(name, "</p2>\n    <p2><b>Email</b>").concat(email, "</p2>\n    <p2><b>Phone</b>").concat(phone, "</p2>\n\n    <h3>Education</h3>\n    <p2>").concat(education, "</p2>\n\n    <h3>Experience</h3>\n    <p2>").concat(experience, "</p2>\n\n    <h>3Skills</h3>\n    <p2>").concat(skills, "</p2>\n\n    ");
    //Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing');
    }
});
