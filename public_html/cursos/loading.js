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
});

function hideLoadingScreen() {
    document.documentElement.classList.add('loading-done');
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        loadingScreen.classList.add('hidden');
    }
}

// Hide loading screen when page is fully loaded
if (document.readyState === 'complete') {
    setTimeout(hideLoadingScreen, 500);
} else {
    window.addEventListener('load', function () {
        setTimeout(hideLoadingScreen, 500);
    });
}
