import { auth, onAuthStateChanged, signOut } from './firebase-config.js';

document.addEventListener('DOMContentLoaded', () => {
    const joinBtns = document.querySelectorAll('.join-us');

    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in.
            joinBtns.forEach(btn => {
                btn.textContent = 'Profile';
                btn.href = 'profile.html';
            });
        } else {
            // User is signed out.
            joinBtns.forEach(btn => {
                btn.textContent = 'Join Us';
                btn.href = 'login.html';
            });
        }
    });
});
