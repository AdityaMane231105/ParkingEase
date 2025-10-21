document.addEventListener("DOMContentLoaded", function() {

    // Sign-Up Logic
    const signupForm = document.getElementById("signupForm");
    if(signupForm){
        signupForm.addEventListener("submit", function(e){
            e.preventDefault();
            const username = document.getElementById("newUsername").value;
            const password = document.getElementById("newPassword").value;

            if(localStorage.getItem(username)){
                document.getElementById("signupMessage").innerText = "Username already exists!";
            } else {
                localStorage.setItem(username, password);
                document.getElementById("signupMessage").innerText = "Sign-Up Successful! You can now login.";
                signupForm.reset();
            }
        });
    }

    // Login Logic
    const loginForm = document.getElementById("loginForm");
    if(loginForm){
        loginForm.addEventListener("submit", function(e){
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            const storedPassword = localStorage.getItem(username);
            if(storedPassword === password){
                localStorage.setItem('loggedInUser', username);
                window.location.href = "dashboard.html";
            } else {
                document.getElementById("message").innerText = "Invalid username or password!";
            }
        });
    }

    // Logout Logic
    const logoutBtn = document.getElementById("logoutBtn");
    if(logoutBtn){
        logoutBtn.addEventListener("click", function(){
            localStorage.removeItem('loggedInUser');
            window.location.href = 'index.html';
        });
    }
});
