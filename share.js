/**
 * Renders Dialog object, with event handler to call renderFilePicker
 */
new foundry.applications.api.DialogV2({
    window: { title: "Display an Image" },
    content: '',
    buttons: [{
        label: "Choose Image"
    }],
    submit: (result) => {
        renderFilePicker();
    }
}).render({ force: true });

/**
 * Creates FilePicker object, and creates ImagePopout object using path selected in FilePicker browser
 */
function renderFilePicker() {
    new foundry.applications.apps.FilePicker({
        type: "image",
        activeSource: "data",
        request: game.world.dataPath,
        callback: (path) => {
            if (!path) {
                ui.notifications.warn("No image selected!");
                return;
            }
            const imagePopout = new foundry.applications.apps.ImagePopout({ src: path });
            imagePopout.render(true);
            imagePopout.shareImage();
        }
    }).render({ force: true });
}
