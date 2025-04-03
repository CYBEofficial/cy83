document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('main-video');
    const soundToggle = document.getElementById('sound-toggle');

    const iconMuted = `
        <svg fill="#F5001F" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M187.97656,152V104a4,4,0,0,1,8,0v48a4,4,0,1,1-8,0Zm36-68a4.0002,4.0002,0,0,0-4,4v80a4,4,0,1,0,8,0V88A4.00019,4.00019,0,0,0,223.97656,84ZM210.96,213.30954A4,4,0,1,1,205.04,218.6904L156,164.74655V224a4,4,0,0,1-6.45605,3.15722L78.62793,172H32a12.01312,12.01312,0,0,1-12-12V96A12.01312,12.01312,0,0,1,32,84H82.59424L45.04,42.6904A4,4,0,1,1,50.96,37.30954ZM148,155.94626,89.86719,92H32a4.004,4.004,0,0,0-4,4v64a4.004,4.004,0,0,0,4,4H80a4.002,4.002,0,0,1,2.45605.84277L148,215.82126ZM114.60645,66.15133,148,40.17868v66.65039a4,4,0,0,0,8,0V32a4.00023,4.00023,0,0,0-6.45605-3.15723L109.69434,59.83688a4,4,0,1,0,4.91211,6.31445Z"></path> </g></svg>
    `;

    const iconUnmuted = `
        <svg fill="#F5001F" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M153.75781,28.40625a4.00666,4.00666,0,0,0-4.21386.43652L78.62793,84H32A12.01312,12.01312,0,0,0,20,96v64a12.01312,12.01312,0,0,0,12,12H78.62793l70.916,55.15723A3.99955,3.99955,0,0,0,156,224V32A4.00208,4.00208,0,0,0,153.75781,28.40625ZM148,215.82129,82.45605,164.84277A4.002,4.002,0,0,0,80,164H32a4.004,4.004,0,0,1-4-4V96a4.004,4.004,0,0,1,4-4H80a4.002,4.002,0,0,0,2.45605-.84277L148,40.17871ZM195.97656,104v48a4,4,0,0,1-8,0V104a4,4,0,0,1,8,0Zm32-16v80a4,4,0,0,1-8,0V88a4,4,0,0,1,8,0Z"></path> </g></svg>
    `;

    function updateSoundToggle() {
        if (video.muted) {
            soundToggle.innerHTML = iconMuted;
            soundToggle.setAttribute('aria-label', 'Unmute video');
        } else {
            soundToggle.innerHTML = iconUnmuted;
            soundToggle.setAttribute('aria-label', 'Mute video');
        }
    }
    
    updateSoundToggle();

    soundToggle.addEventListener('click', function() {
        video.muted = !video.muted;
        updateSoundToggle();
        
        if (video.paused) {
            video.play();
        }
    });
    
    function handleUserInteraction() {
        if (video.muted) {
            video.muted = false;
            updateSoundToggle();
            if (video.paused) {
                video.play().catch(err => console.error("Play failed:", err));
            }
        }
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('keyup', handleUserInteraction);
    }
    
    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('keyup', handleUserInteraction);
});