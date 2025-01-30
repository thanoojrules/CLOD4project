// Dummy database for storing users
let users = {};

// Function to show signup form
function showSignup() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.remove("hidden");
    document.getElementById("forgotPasswordForm").classList.add("hidden");
}

// Function to show login form
function showLogin() {
    document.getElementById("loginForm").classList.remove("hidden");
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("forgotPasswordForm").classList.add("hidden");
}

// Function to show forgot password form
function showForgotPassword() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("signupForm").classList.add("hidden");
    document.getElementById("forgotPasswordForm").classList.remove("hidden");
}

// Function to handle signup
function signupUser() {
    let emailOrPhone = document.getElementById("signup-email").value.trim();
    let cardNumber = document.getElementById("signup-card").value.trim();
    let password = document.getElementById("signup-password").value.trim();
    let confirmPassword = document.getElementById("signup-confirm-password").value.trim();
    let errorMessage = document.getElementById("signup-error");

    if (!emailOrPhone || !cardNumber || !password || !confirmPassword) {
        errorMessage.textContent = "All fields are required!";
        return;
    }

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
        return;
    }

    users[emailOrPhone] = { cardNumber, password };
    alert("Signup Successful! Redirecting to Login...");
    showLogin();
}

// Function to send OTP (dummy function)
function sendOTP() {
    let emailOrPhone = document.getElementById("forgot-email").value.trim();
    let errorMessage = document.getElementById("forgot-error");

    if (!emailOrPhone) {
        errorMessage.textContent = "Please enter your email or phone number!";
        return;
    }

    let otp = Math.floor(100000 + Math.random() * 900000);
    alert(`Your OTP is: ${otp} (In a real application, this would be sent via SMS/Email)`);
}
