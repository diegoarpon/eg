// Loading component functionality
document.addEventListener('DOMContentLoaded', function () {
    // Create loading screen element if it doesn't exist
    if (!document.querySelector('.loading-screen')) {
        const loadingScreen = document.createElement('div');
        loadingScreen.className = 'loading-screen';
        
        const loadingLogo = document.createElement('img');
        loadingLogo.src = '../images/logo-eg-icon.svg';
        loadingLogo.alt = 'EG Marketing';
        loadingLogo.className = 'loading-logo';
        
        loadingScreen.appendChild(loadingLogo);
        document.body.prepend(loadingScreen);
    }
    
    // Get the loading screen
    const loadingScreen = document.querySelector('.loading-screen');
    
    // Hide loading screen when page is fully loaded
    window.addEventListener('load', function () {
        setTimeout(function () {
            loadingScreen.classList.add('hidden');
        }, 800); // Short delay for smoother transition
    });
});