// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    // Collect input values
    const objective = (document.getElementById('objective') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value;
    const achievements = (document.getElementById('achievements') as HTMLInputElement).value;

    // Generate resume content dynamically
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

    // Display generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }

    // Optionally store resume data in localStorage for unique URL access
    localStorage.setItem('currentResume', JSON.stringify({ objective, name, email, phone, education, experience, skills, achievements }));
});

// Helper function to get query parameters
function getQueryParam(param: string): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Load specific resume data
function loadResume() {
    const resumeId = getQueryParam('id');
    if (resumeId && localStorage.getItem('currentResume')) {
        const data = JSON.parse(localStorage.getItem('currentResume') || '{}');
        displayResume(data);
    } else {
        console.log('No resume ID provided in the URL');
    }
}

// Function to display resume data on the page
function displayResume(data: any) {
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = `
          <h2><b>Resume</b></h2>
          <h3><b>Objective</b></h3>
          <p>${data.objective}</p>
          
          <h3><b>Personal Information</b></h3>
          <p><b>Name: </b> ${data.name}</p>
          <p><b>Email: </b> ${data.email}</p>
          <p><b>Phone: </b> ${data.phone}</p>
          
          <h3><b>Education</b></h3>
          <p>${data.education}</p>
          
          <h3><b>Experience</b></h3>
          <p>${data.experience}</p>
          
          <h3><b>Skills</b></h3>
          <p>${data.skills}</p>

          <h3><b>Achievements</b></h3>
          <p>${data.achievements}</p>
        `;
    }
}

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


function copyResumeLink() {
    navigator.clipboard.writeText(window.location.href)
        .then(() => {
            document.getElementById('feedbackMessage')!.style.display = 'block';
            setTimeout(() => {
                document.getElementById('feedbackMessage')!.style.display = 'none';
            }, 2000); // Hide message after 2 seconds
        })
        .catch(error => console.error('Error copying link:', error));
}
