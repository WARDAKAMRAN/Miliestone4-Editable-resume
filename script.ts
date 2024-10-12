// Add event listeners for buttons
document.getElementById('generateBtn')?.addEventListener('click', generateResume);
document.getElementById('editBtn')?.addEventListener('click', editResume);
document.getElementById('downloadBtn')?.addEventListener('click', downloadPDF);

// Function to generate resume
function generateResume() {
  const fullName = (document.getElementById('fullname') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const gender = (document.getElementById('gender') as HTMLSelectElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value;
  const profilePicInput = (document.getElementById('profilePic') as HTMLInputElement).files?.[0];

  // Display profile picture
  if (profilePicInput) {
    const reader = new FileReader();
    reader.onload = function () {
      const profileImage = document.getElementById('profileImage') as HTMLImageElement;
      profileImage.src = reader.result as string;
    };
    reader.readAsDataURL(profilePicInput);
  }

  // Populate the resume output fields
  document.getElementById('outputName')!.innerText = fullName;
  document.getElementById('outputEmail')!.innerText = email;
  document.getElementById('outputPhone')!.innerText = phone;
  document.getElementById('outputGender')!.innerText = gender;
  document.getElementById('outputEducation')!.innerText = education;
  document.getElementById('outputExperience')!.innerText = workExperience;
  document.getElementById('outputSkills')!.innerText = skills;

  // Show the output section and buttons
  document.getElementById('resumeOutput')!.classList.remove('hidden');
  document.getElementById('editBtn')!.classList.remove('hidden');
  document.getElementById('downloadBtn')!.classList.remove('hidden');
}

// Function to edit resume
function editResume() {
  // Hide the output section and buttons to allow editing
  document.getElementById('resumeOutput')!.classList.add('hidden');
  document.getElementById('editBtn')!.classList.add('hidden');
  document.getElementById('downloadBtn')!.classList.add('hidden');
}

// Function to download resume as PDF
function downloadPDF() {
  const element = document.getElementById('resumeOutput');
  html2pdf().from(element).save();
}