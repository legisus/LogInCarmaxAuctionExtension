// util.js
export async function waitForElement(xpath, timeout = 5000) {
    const pollInterval = 100;
    const endTime = Date.now() + timeout;

    while (Date.now() < endTime) {
        const element = document.evaluate(
            xpath,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;

        if (element) return element;

        await new Promise(resolve => setTimeout(resolve, pollInterval));
    }

    throw new Error(`Element not found within timeout: ${xpath}`);
}