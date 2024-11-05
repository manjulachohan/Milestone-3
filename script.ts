// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) =>{
    event.preventDefault();

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email= (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience= (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value
    
    //Generte the resume content dynamically
    const resumeHTML = `
    <h2><b>Resume</b></h2>
    <h3>Personal Information</h3>
    <p2><b>Name</b>${name}</p2>
    <p2><b>Email</b>${email}</p2>
    <p2><b>Phone</b>${phone}</p2>

    <h3>Education</h3>
    <p2>${education}</p2>

    <h3>Experience</h3>
    <p2>${experience}</p2>

    <h>3Skills</h3>
    <p2>${skills}</p2>

    `;

    //Display the generated resume
    if(resumeDisplayElement){
        resumeDisplayElement.innerHTML = resumeHTML;
    }else{
        console.error('The resume display element is missing');
    }
})