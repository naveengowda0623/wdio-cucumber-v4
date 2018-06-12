import fetchData from '../action/fetchData';
var libraryRepoPage = require('../../pages/PageLibrary.json');
/**
 * Check if the given elements text is the same as the given text
 * @param  {String}   element       Element selector
 * @param  {String}   falseCase     Whether to check if the content equals the
 *                                  given text or not
 * @param  {String}   expectedText  The text to validate against
 */
module.exports = (element, falseCase, expectedText) => {
    /**
     * The command to execute on the browser object
     * @type {String}
     */
    expectedText = fetchData(expectedText);
    let command = 'getText';

    var path = "libraryRepoPage.locators."+element;
    element = eval(path);


    /**
     * The expected text to validate against
     * @type {String}
     */
    let parsedExpectedText = expectedText;

    /**
     * Whether to check if the content equals the given text or not
     * @type {Boolean}
     */
    let boolFalseCase = !!falseCase;

    // Check for empty element
    if (typeof parsedExpectedText === 'function') {
        parsedExpectedText = '';

        boolFalseCase = !boolFalseCase;
    }

    if (parsedExpectedText === undefined && falseCase === undefined) {
        parsedExpectedText = '';
        boolFalseCase = true;
    }

    const text = browser[command](element);

    if (boolFalseCase) {
        parsedExpectedText.should.not.equal(text);
    } else {
        parsedExpectedText.should.equal(text);
    }
};
