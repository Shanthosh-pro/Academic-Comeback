// State management
let currentStep = 1;
let studentData = {};

// Element references
const infoForm = document.getElementById('infoForm');
const welcomeMessage = document.getElementById('welcomeMessage');
const nextStepBtn = document.getElementById('nextStepBtn');

// Handle the initial form submission
infoForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect data from the form
    studentData.name = document.getElementById('studentName').value;
    studentData.arrears = parseInt(document.getElementById('arrearPapers').value);
    studentData.freeHours = parseInt(document.getElementById('freeHours').value);

    // Personalize the welcome message
    welcomeMessage.textContent = `Welcome, ${studentData.name}! Let's do this.`;

    // Generate the timetable for Step 2
    generateTimetable();

    // Move to the next step
    showStep(2);
});

// Handle the "Next Step" button
nextStepBtn.addEventListener('click', function() {
    currentStep++;
    showStep(currentStep);
});


function showStep(stepNumber) {
    // Hide all steps first
    document.querySelectorAll('.step').forEach(step => {
        step.classList.add('hidden');
    });

    // Show the current step
    const currentStepElement = document.getElementById(step${stepNumber});
    if (currentStepElement) {
        currentStepElement.classList.remove('hidden');
        currentStep = stepNumber;
    }

    // Show/hide the next button
    if (stepNumber > 1 && stepNumber < 6) {
        nextStepBtn.classList.remove('hidden');
    } else {
        nextStepBtn.classList.add('hidden');
    }
}

function generateTimetable() {
    const timetableResult = document.getElementById('timetableResult');
    const { arrears, freeHours } = studentData;

    // A simple calculation logic
    const totalWeeklyStudyHours = freeHours * 6; // Assuming 6 study days a week
    const hoursPerSubject = (totalWeeklyStudyHours / arrears).toFixed(1);

    let scheduleHTML = `
        <p>Based on your input, here is a recommended starting point:</p>
        <ul>
            <li><strong>Arrear Papers:</strong> ${arrears}</li>
            <li><strong>Daily Free Hours for Study:</strong> ${freeHours}</li>
            <li><strong>Total Weekly Study Hours:</strong> ${totalWeeklyStudyHours} hours</li>
            <li><strong>Recommended Hours Per Subject Per Week:</strong> ~${hoursPerSubject} hours</li>
        </ul>
        <h4>Sample Weekly Schedule:</h4>
        <pre>
Monday-Saturday (${freeHours} hours/day):
------------------------------------
- Subject 1: ${hoursPerSubject / 2} hrs
- Subject 2: ${hoursPerSubject / 2} hrs
- ... (Distribute remaining subjects)
- Use Pomodoro sessions (25min study, 5min break)

Sunday:
------------------------------------
- Full Revision of the week's topics.
- Rest and Recharge.
        </pre>
        <p><strong>This is a template.</strong> Adjust it to fit which subjects need more attention. The key is consistency.</p>
    `;
    
    timetableResult.innerHTML = scheduleHTML;
}
