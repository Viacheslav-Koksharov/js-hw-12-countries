import { alert, notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { defaults } from '@pnotify/core';
defaults.delay = 2000;
defaults.maxTextHeight = null;

function errorMessage() {
    const myError = error({
        text: "Too many matches found! Enter a more specific query!"
    });
}
function onFetchError() {
    const FetchError = error({
        text: "Invalid enter! Try again!"
    });
}

export { errorMessage, onFetchError }