// Background toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    let isBeige = false;
    
    // Function to toggle background
    function toggleBackground() {
        if (isBeige) {
            body.classList.remove('beige-bg');
            isBeige = false;
        } else {
            body.classList.add('beige-bg');
            isBeige = true;
        }
    }
    
    // Desktop: mouseover event
    body.addEventListener('mouseover', function(e) {
        if (window.innerWidth > 768) { // Only on desktop
            if (!isBeige) {
                body.classList.add('beige-bg');
                isBeige = true;
            }
        }
    });
    
    // Desktop: mouseout event to return to original
    body.addEventListener('mouseout', function(e) {
        if (window.innerWidth > 768) { // Only on desktop
            if (isBeige) {
                body.classList.remove('beige-bg');
                isBeige = false;
            }
        }
    });
    
    // Mobile: click/touch event
    body.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) { // Only on mobile
            toggleBackground();
        }
    });
    
    // Mobile: touch event as fallback
    body.addEventListener('touchstart', function(e) {
        if (window.innerWidth <= 768) { // Only on mobile
            toggleBackground();
        }
    }, { passive: true });
});