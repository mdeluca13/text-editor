const butInstall = document.getElementById('buttonInstall');

// event listener for before install
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    console.log('Before install');
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// event listener for button install
butInstall.addEventListener('click', async () => {
    console.log('Button Install Click')
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
     return;
    }

    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

// event listener for app installed
window.addEventListener('appinstalled', (event) => {
    console.log('App installed')
    window.deferredPrompt = null;
});
