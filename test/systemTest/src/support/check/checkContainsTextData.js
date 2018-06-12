import fetchData from '../action/fetchData';
var libraryRepoPage = require('../../pages/PageLibrary.json');
/**
 * Check if the given elements contains text
 * @param  {String}   element       Element selector
 * @param  {String}   falseCase     Whether to check if the content contains
 *                                  the given text or not
 * @param  {String}   expectedText  The text to check against
 */
module.exports = (element, falseCase, expectedText) => {
    /**
     * The command to perform on the browser object
     * @type {String}
     */

    expectedText = fetchData(expectedText);
    let command = 'getValue';
    var path = "libraryRepoPage.locators."+element;
    element = eval(path);

    if (browser.getAttribute(element, 'value') === null) {
        command = 'getText';
    }

    /**
     * False case
     * @type {Boolean}
     */
    let boolFalseCase;

    /**
     * The expected text
     * @type {String}
     */
    let stringExpectedText = expectedText;

    /**
     * The text of the element
     * @type {String}
     */
    const text = browser[command](element);

    if (typeof expectedText === 'undefined') {
        stringExpectedText = falseCase;
        boolFalseCase = false;
    } else {
        boolFalseCase = (falseCase === ' not');
    }

    if (boolFalseCase) {
        expect(text).to.not.contain(stringExpectedText);
    } else {
        expect(text).to.contain(stringExpectedText);
    }
};
