// Import Tailwind CSS
import 'tailwindcss/tailwind.css';

// Define a class for the registration form
class RegistrationForm {
    firstName: string;
    lastName: string;
    address: string;
    gender: string;
    mobileNumber: string;
    dob: string;
    email: string;
    password: string;
    confirmPassword: string;

    constructor() {
        this.firstName = '';
        this.lastName = '';
        this.address = '';
        this.gender = '';
        this.mobileNumber = '';
        this.dob = '';
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
    }

    submitForm(): void {
        // Perform form submission logic here
        console.log('Form submitted successfully!');
        console.log(this);
    }
}

// Create an instance of the RegistrationForm class
const registrationForm = new RegistrationForm();

// Function to handle form submission
function handleSubmit(event: Event): void {
    event.preventDefault();
    registrationForm.submitForm();
}

// Render the form dynamically using TypeScript
function renderForm(): void {
    const formContainer = document.getElementById('form-container');

    if (formContainer) {
        formContainer.innerHTML = `
            <form id="registration-form" class="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 class="text-2xl text-center font-semibold mb-6">Registration Form</h2>
                <div class="mb-4">
                    <input type="text" id="firstName" name="firstName" placeholder="First Name" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                </div>
                <div class="mb-4">
                    <input type="text" id="lastName" name="lastName" placeholder="Last Name" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                </div>
                <div class="mb-4">
                    <input type="text" id="address" name="address" placeholder="Address" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                </div>
                <div class="mb-4">
                    <select id="gender" name="gender" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div class="mb-4">
                    <input type="text" id="mobileNumber" name="mobileNumber" placeholder="Mobile Number" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                </div>
                <div class="mb-4">
                    <input type="date" id="dob" name="dob" placeholder="Date of Birth" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                </div>
                <div class="mb-4">
                    <input type="email" id="email" name="email" placeholder="Email Address" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                </div>
                <div class="mb-4">
                    <input type="password" id="password" name="password" placeholder="Password" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                </div>
                <div class="mb-6">
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required>
                </div>
                <div class="flex items-center justify-between">
                    <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Register</button>
                </div>
            </form>
        `;

        const formElement = document.getElementById('registration-form');
        if (formElement) {
            formElement.addEventListener('submit', handleSubmit);
        }
    } else {
        console.error('Form container not found.');
    }
}

// Render the form
renderForm();
