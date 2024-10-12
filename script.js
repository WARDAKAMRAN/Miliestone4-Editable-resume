var _a, _b, _c;
// Add event listeners for buttons
(_a = document.getElementById('generateBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', generateResume);
(_b = document.getElementById('editBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', editResume);
(_c = document.getElementById('downloadBtn')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', downloadPDF);
// Function to generate resume
function generateResume() {
    var _a;
    var fullName = document.getElementById('fullname').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var gender = document.getElementById('gender').value;
    var education = document.getElementById('education').value;
    var workExperience = document.getElementById('workExperience').value;
    var skills = document.getElementById('skills').value;
    var profilePicInput = (_a = document.getElementById('profilePic').files) === null || _a === void 0 ? void 0 : _a[0];
    // Display profile picture
    if (profilePicInput) {
        var reader_1 = new FileReader();
        reader_1.onload = function () {
            var profileImage = document.getElementById('profileImage');
            profileImage.src = reader_1.result;
        };
        reader_1.readAsDataURL(profilePicInput);
    }
    // Populate the resume output fields
    document.getElementById('outputName').innerText = fullName;
    document.getElementById('outputEmail').innerText = email;
    document.getElementById('outputPhone').innerText = phone;
    document.getElementById('outputGender').innerText = gender;
    document.getElementById('outputEducation').innerText = education;
    document.getElementById('outputExperience').innerText = workExperience;
    document.getElementById('outputSkills').innerText = skills;
    // Show the output section and buttons
    document.getElementById('resumeOutput').classList.remove('hidden');
    document.getElementById('editBtn').classList.remove('hidden');
    document.getElementById('downloadBtn').classList.remove('hidden');
}
// Function to edit resume
function editResume() {
    // Hide the output section and buttons to allow editing
    document.getElementById('resumeOutput').classList.add('hidden');
    document.getElementById('editBtn').classList.add('hidden');
    document.getElementById('downloadBtn').classList.add('hidden');
}
// Function to download resume as PDF
function downloadPDF() {
    var element = document.getElementById('resumeOutput');
    html2pdf().from(element).save();
}
