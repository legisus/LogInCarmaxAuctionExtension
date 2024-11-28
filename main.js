// main.js
import { waitForElement } from './util.js';

(async () => {
    const emailFieldXPath = '//*[@id="signInName"]';
    const passwordFieldXPath = '//*[@id="password"]';
    const continueButtonXPath = '//*[@id="continue"]';

    try {
        const emailField = await waitForElement(emailFieldXPath);
        emailField.value = "test@test";                                 // This is a test email address
        emailField.dispatchEvent(new Event("input", { bubbles: true }));

        const passwordField = await waitForElement(passwordFieldXPath);
        passwordField.value = "test";                                   // This is a test password
        passwordField.dispatchEvent(new Event("input", { bubbles: true }));

        const continueButton = await waitForElement(continueButtonXPath);
        continueButton.click();
    } catch (error) {
        console.error(error.message);
    }
})();