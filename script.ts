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

// Helper function to get query parameters
function getQueryParam(param: string): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
  }
  
  // Use the parameter to load specific resume data
  function loadResume() {
    const resumeId = getQueryParam('id');
    if (resumeId) {
      // Replace this with actual data retrieval logic, such as fetching from a database or JSON file
      console.log(`Loading resume for ID: ${resumeId}`);
      
      // Example: Fetch resume data based on ID and display it
      fetch(`https://api.example.com/resumes/${resumeId}`)
        .then(response => response.json())
        .then(data => displayResume(data))
        .catch(error => console.error('Error loading resume:', error));
    } else {
      console.log('No resume ID provided in the URL');
    }
  }
  
  // Function to display resume data on the page
  function displayResume(data: any) {
    // Populate the HTML with resume data here
    document.getElementById('resumeTitle')!.innerText = data.title;
    document.getElementById('resumeContent')!.innerHTML = data.content;
  }
  
  // Call the function on page load
  window.onload = loadResume;

  // Share the resume URL using the Web Share API
function shareResume() {
    if (navigator.share) {
      navigator.share({
        title: 'My Resume',
        text: 'Check out my resume!',
        url: window.location.href,
      })
      .then(() => console.log('Resume shared successfully'))
      .catch(error => console.error('Error sharing resume:', error));
    } else {
      alert('Sharing is not supported on this device.');
    }
  }
  
  // Copy the resume URL to the clipboard
  function copyResumeLink() {
    navigator.clipboard.writeText(window.location.href)
      .then(() => alert('Link copied to clipboard'))
      .catch(error => console.error('Error copying link:', error));
  }
  
  // Event listeners for the buttons
  document.getElementById('shareButton')?.addEventListener('click', shareResume);
  document.getElementById('copyButton')?.addEventListener('click', copyResumeLink);
  