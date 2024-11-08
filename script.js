// get references to the dorm and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault();
    // collect input values
    var objective = document.getElementById('objective').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var achievements = document.getElementById('achievements').value;
    // generate resume content dynamically 
    var resumeHtml = "\n    <h2><b>Resume</b></h2>\n    <h3><b>Objective</b></h3>\n    <p>".concat(objective, "</p>\n\n    <h3><b>Personal Information</b></h3>\n    <p><b>Name:</b> ").concat(name, "</p>\n    <p><b>Email:</b> ").concat(email, "</p>\n    <p><b>Phone:</b> ").concat(phone, "</p>\n\n    <h3><b>Education</b></h3>\n    <p>").concat(education, "</p>\n\n    <h3><b>Experience</b></h3>\n    <p>").concat(experience, "</p>\n\n    <h3><b>Skills</b></h3>\n    <p>").concat(skills, "</p>\n\n    <h3><b>Achievements</b></h3>\n    <p>").concat(achievements, "</p>\n");
    // display generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
});
