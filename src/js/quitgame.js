document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('close-btn');

    if (closeBtn) {
        closeBtn.addEventListener('click', async () => {
            try {

                if (window.__TAURI__) {
                    const currentWindow = window.__TAURI__.window.getCurrentWindow();
                    await currentWindow.close();
                } else {
                    console.warn("Niet in Tauri-omgeving.");
                }
            } catch (error) {
                console.error("Kon de app niet sluiten:", error);
            }
        });
    }
});
