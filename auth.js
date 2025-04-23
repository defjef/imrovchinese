// Get auth instance
const auth = firebase.auth();

// Auth state observer
auth.onAuthStateChanged((user) => {
    const authContent = document.getElementById('auth-content');
    const userContent = document.getElementById('user-content');
    const userEmail = document.getElementById('user-email');
    
    if (user) {
        // User is signed in
        authContent.style.display = 'none';
        userContent.style.display = 'block';
        userEmail.textContent = user.email;
    } else {
        // User is signed out
        authContent.style.display = 'block';
        userContent.style.display = 'none';
        userEmail.textContent = '';
    }
});

// Sign up function
function signUp() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('User signed up successfully');
        })
        .catch((error) => {
            console.error('Error signing up:', error);
            alert(error.message);
        });
}

// Sign in function
function signIn() {
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    
    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log('User signed in successfully');
        })
        .catch((error) => {
            console.error('Error signing in:', error);
            alert(error.message);
        });
}

// Sign out function
function signOut() {
    auth.signOut()
        .then(() => {
            console.log('User signed out successfully');
        })
        .catch((error) => {
            console.error('Error signing out:', error);
            alert(error.message);
        });
}
