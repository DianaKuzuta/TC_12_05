var PageObject = require ("D:\\Work and Study\\Autotest cources\\TC_12_05\\PageObjects.js");

beforeEach(async function () {

    await browser.get('http://angular.io/docs');
});

describe('angular docs page', function () {
    it('should verify if feedback is displayed', async function () {
        expect(await element(by.css('h1.no-toc')).getText()).toEqual('What is Angular?');
        expect(await element(by.id('feedback')).getText()).toEqual('Feedback');

    });
});

xdescribe('angular docs page', function () {
    it('should search text "api" on site', async function () {

        var el = element(by.css('aio-search-box.search-container'));
        await el.click();
        await browser.sleep(3000);
        var search = element(by.css('body > aio-shell > mat-toolbar > mat-toolbar-row:nth-child(2) > aio-search-box > input[type="search"]'));
        await search.sendKeys('api');
        await expect(element(by.css('body > aio-shell > aio-search-results.ng-star-inserted > div')).getText()).toEqual('Searching ...');
        await browser.sleep(3000);
        await expect(element(by.css('body > aio-shell > aio-search-results.ng-star-inserted > div.search-results >  div.search-area.ng-star-inserted > ul.priority-pages > li')).getText()).toEqual('core package');
    });
});

describe('angular docs page', function () {
    it('should redirect to API List on https://angular.io/api', async function () {

        await PageObject.el.click();
        await browser.sleep(3000);
        PageObject.search.sendKeys('api');
        await browser.sleep(3000);
        await PageObject.searchresult.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://angular.io/api');
        expect(await PageObject.pagename.getText()).toEqual('API List');
    });
});

describe('angular docs page', function () {
    it('should redirect to QuickStart page', async function () {

        await PageObject.box.click();
        await browser.sleep(5000);
        expect(await PageObject.pagenameQS.getText()).toEqual('QuickStart');
        expect(await browser.getCurrentUrl()).toEqual('https://angular.io/guide/quickstart');
    });
});

describe('angular docs page', function () {
    it('should redirect to FEATURES & BENEFITS page', async function () {

        await PageObject.menuLinkToFeatures.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://angular.io/features');
        expect(await PageObject.pagenameFB.getText()).toEqual('FEATURES & BENEFITS');
    });
});

describe('angular docs page', function () {
    it('should redirect to ANGULAR RESOURCES page', async function () {

        await PageObject.menuLinkToResources.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://angular.io/resources');
        expect(await PageObject.pagenameAR.getText()).toEqual('EXPLORE ANGULAR RESOURCES');
    });
});

describe('angular docs page', function () {
    it('should redirect to EVENTS page', async function () {

        await PageObject.menuLinkToEvents.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://angular.io/events');
        expect(await PageObject.pagenameEvents.getText()).toEqual('EVENTS');
    });
});

xdescribe('angular docs page', function () {
    it('should redirect to Angular Blog page', async function () {

        await PageObject.menuLinkToBlog.click();
        await browser.sleep(5000);
        await PageObject.footerLink.click();
        expect(await browser.getCurrentUrl()).toEqual('https://blog.angular.io/about');
    });
});

xdescribe('angular docs page', function () {
    it('should open The fundamentals of Angular item of left menu', async function () {

        await PageObject.menuLinkTheFundamentals.click();
        await browser.sleep(5000);
        expect(await menuLinkTheFundamentals['aria-pressed="true"']);
        await PageObject.menuLinkArchitecture.click();
        await PageObject.menuLinkArchitectureOverview.click();
        expect(await browser.getCurrentUrl()).toEqual('https://angular.io/guide/architecture');
    });
});

xdescribe('angular docs page', function () {
    it('should open link for JS at Assumptions', async function () {

        browser.ignoreSynchronization = true;
        await PageObject.linkToJStutorial.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript');
        browser.ignoreSynchronization = false;
     });
});

describe('angular docs page', function () {
    it('should open link to Latest JavaScript standards at Assumptions', async function () {

        browser.ignoreSynchronization = true;
        await PageObject.linkToJSstandards.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://babeljs.io/docs/en/learn/');
        browser.ignoreSynchronization = false;
    });
});

describe('angular docs page', function () {
    it('should open link to Classes at Assumptions', async function () {

        browser.ignoreSynchronization = true;
        await PageObject.linkToClasses.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes');
        browser.ignoreSynchronization = false;
    });
});

describe('angular docs page', function () {
    it('should open link to Modules at Assumptions', async function () {

        browser.ignoreSynchronization = true;
        await PageObject.linkToModules.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import');
        browser.ignoreSynchronization = false;
    });
});

describe('angular docs page', function () {
    it('should open link to TypeScript at Assumptions', async function () {

        browser.ignoreSynchronization = true;
        await PageObject.linkToTypeScript.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://www.typescriptlang.org/');
        browser.ignoreSynchronization = false;
    });
});

describe('angular docs page', function () {
    it('should open link to TypeScript Types at Assumptions', async function () {

        browser.ignoreSynchronization = true;
        await PageObject.linkToTypeScriptTypes.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://www.typescriptlang.org/docs/handbook/classes.html');
        browser.ignoreSynchronization = false;
    });
});

describe('angular docs page', function () {
    it('should open link to Decorators at Assumptions', async function () {

        browser.ignoreSynchronization = true;
        await PageObject.linkToDecorators.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://www.typescriptlang.org/docs/handbook/decorators.html');
        browser.ignoreSynchronization = false;
    });
});

describe('angular docs page', function () {
    it('should open link to Angular Github issues at Feedback', async function () {

        browser.ignoreSynchronization = true;
        await PageObject.linkToIssues.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://github.com/angular/angular/issues');
        browser.ignoreSynchronization = false;
    });
});

describe('angular docs page', function () {
    it('should open link to pull requests at Feedback', async function () {

        browser.ignoreSynchronization = true;
        await PageObject.linkToPullRequests.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://github.com/angular/angular/pulls');
        browser.ignoreSynchronization = false;
    });
});

describe('angular docs page', function () {
    it('should open link to Contributing guide at Feedback', async function () {

        browser.ignoreSynchronization = true;
        await PageObject.linkToContributingGuide.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://github.com/angular/angular/blob/master/CONTRIBUTING.md');
        browser.ignoreSynchronization = false;
    });
});

describe('angular docs page', function () {
    it('should open link to Contributor code of conduct at Feedback', async function () {

        browser.ignoreSynchronization = true;
        await PageObject.linkToCodeOfConduct.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://github.com/angular/code-of-conduct/blob/master/CODE_OF_CONDUCT.md');
        browser.ignoreSynchronization = false;
    });
});