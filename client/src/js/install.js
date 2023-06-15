const butInstall = document.getElementById('buttonInstall');

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    console.log('Before install');
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

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

window.addEventListener('appinstalled', (event) => {
    console.log('App installed')
    window.deferredPrompt = null;
});
