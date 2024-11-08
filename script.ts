// get references to the dorm and display area
const form = document.getElementById('resume-form') as HTMLFormElement
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement

// handle form submission
form.addEventListener('submit',(event:Event)=>{
    event.preventDefault(); 

    // collect input values
    const objective = (document.getElementById('objective')as HTMLInputElement).value
    const name = (document.getElementById('name')as HTMLInputElement).value
    const email = (document.getElementById('email')as HTMLInputElement).value
    const phone = (document.getElementById('phone')as HTMLInputElement).value
    const address = (document.getElementById('address')as HTMLInputElement).value
    const education = (document.getElementById('education')as HTMLInputElement).value
    const experience = (document.getElementById('experience')as HTMLInputElement).value
    const skills = (document.getElementById('skills')as HTMLInputElement).value
    const achievements = (document.getElementById('achievements')as HTMLInputElement).value

    // generate resume content dynamically 

    const resumeHtml = `
    <h2><b>Resume</b></h2>
    <h3><b>Objective</b></h3>
    <p>${objective}</p>
    
    <h3><b>Personal Information</b></h3>
    <p><b>Name: </b> ${name}</p>
    <p><b>Email: </b> ${email}</p>
    <p><b>Phone: </b> ${phone}</p>
    
    <h3><b>Education</b></h3>
    <p>${education}</p>
    
    <h3><b>Experience</b></h3>
    <p>${experience}</p>
    
    <h3><b>Skills</b></h3>
    <p>${skills}</p>

    <h3><b>Achievements</b></h3>
    <p>${achievements}</p>
`;

// display generated resume

   if(resumeDisplayElement){
    resumeDisplayElement.innerHTML=resumeHtml
   }
})
