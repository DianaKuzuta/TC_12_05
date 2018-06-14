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
describe('angular docs page', function () {
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

        var el = element(by.css('aio-search-box.search-container'));
        await el.click();
        await browser.sleep(3000);
        var search = element(by.css('body > aio-shell > mat-toolbar > mat-toolbar-row:nth-child(2) > aio-search-box > input[type="search"]'));
        search.sendKeys('api');
        await browser.sleep(3000);
        var searchresult = element(by.css('body > aio-shell > aio-search-results.ng-star-inserted > div.search-results >  div.search-area.ng-star-inserted:nth-child(4) > ul.priority-pages > li.search-page.ng-star-inserted > a.search-result-item'));
        await searchresult.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://angular.io/api');
        var pagename = element(by.css('#api-list'));
        expect(await pagename.getText()).toEqual('API List');
    });
});

describe('angular docs page', function () {
    it('should redirect to QuickStart page', async function () {

        var box = element(by.xpath('//*[@id="docs"]/aio-doc-viewer/div/div/div/a[2]'));
        await box.click();
        await browser.sleep(5000);
        var pagename = element(by.css('#quickstart'));
        expect(await pagename.getText()).toEqual('QuickStart');
        expect(await browser.getCurrentUrl()).toEqual('https://angular.io/guide/quickstart');
    });
});

describe('angular docs page', function () {
    it('should redirect to FEATURES & BENEFITS page', async function () {

        var menuLinkToFeatures = element(by.css('body > aio-shell > mat-toolbar > mat-toolbar-row.mat-toolbar-row > aio-top-menu > ul > li.ng-star-inserted >  a.nav-link[title="Features"]'));
        await menuLinkToFeatures.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://angular.io/features');
        var pagename = element(by.id('features--benefits'));
        expect(await pagename.getText()).toEqual('FEATURES & BENEFITS');
    });
});

describe('angular docs page', function () {
    it('should redirect to ANGULAR RESOURCES page', async function () {

        var menuLinkToResources = element(by.css('body > aio-shell > mat-toolbar > mat-toolbar-row.mat-toolbar-row > aio-top-menu > ul > li.ng-star-inserted >  a.nav-link[title="Resources"]'));
        await menuLinkToResources.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://angular.io/resources');
        var pagename = element(by.id('explore-angular-resources'));
        expect(await pagename.getText()).toEqual('EXPLORE ANGULAR RESOURCES');
    });
});

describe('angular docs page', function () {
    it('should redirect to EVENTS page', async function () {

        var menuLinkToEvents = element(by.css('body > aio-shell > mat-toolbar > mat-toolbar-row.mat-toolbar-row > aio-top-menu > ul > li.ng-star-inserted >  a.nav-link[title="Events"]'));
        await menuLinkToEvents.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://angular.io/events');
        var pagename = element(by.css('#events > aio-doc-viewer > div > div > header > h1#events.banner-headline.no-toc.no-anchor'));
        expect(await pagename.getText()).toEqual('EVENTS');
    });
});

xdescribe('angular docs page', function () {
    it('should redirect to Angular Blog page', async function () {

        var menuLinkToBlog = element(by.css('body > aio-shell > mat-toolbar > mat-toolbar-row.mat-toolbar-row > aio-top-menu > ul > li.ng-star-inserted >  a.nav-link[title="Blog"]'));
        await menuLinkToBlog.click();
        await browser.sleep(5000);
        var footerLink = element(by.css('body > div > div > div > div > div > div > div > div > a[title = "About Angular Blog"]'));
        await footerLink.click();
        expect(await browser.getCurrentUrl()).toEqual('https://blog.angular.io/about');
    });
});

xdescribe('angular docs page', function () {
    it('should open The fundamentals of Angular item of left menu', async function () {

        var menuLinkTheFundamentals = element(by.buttonText('Fundamentals'));
        await menuLinkTheFundamentals.click();
        await browser.sleep(5000);
        expect(await menuLinkTheFundamentals['aria-pressed="true"']);
        var menuLinkArchitecture = element(by.buttonText('Architecture'));
        await menuLinkArchitecture.click();
        var menuLinkArchitectureOverview = element(by.css('div > div > aio-nav-item > div > div > aio-nav-item > div > a[title = "Basic building blocks of Angular applications."]'))
        await menuLinkArchitectureOverview.click();
        expect(await browser.getCurrentUrl()).toEqual('https://angular.io/guide/architecture');
    });
});

describe('angular docs page', function () {
    it('should open link for JS at Assumptions', async function () {

        browser.ignoreSynchronization = true;
        var linkToJStutorial = element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav-content > #docs > aio-doc-viewer > div > div > p > a[title = "Learn JavaScript"]'));
        await linkToJStutorial.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript');
        browser.ignoreSynchronization = false;
     });
});

describe('angular docs page', function () {
    it('should open link to Latest JavaScript standards at Assumptions', async function () {

        browser.ignoreSynchronization = true;
        var linkToJStutorial = element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav-content > #docs > aio-doc-viewer > div > div > p > a[title = "Latest JavaScript standards"]'));
        await linkToJStutorial.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://babeljs.io/docs/en/learn/');
        browser.ignoreSynchronization = false;
    });
});

describe('angular docs page', function () {
    it('should open link to Classes at Assumptions', async function () {

        browser.ignoreSynchronization = true;
        var linkToJStutorial = element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav-content > #docs > aio-doc-viewer > div > div > p > a[title = "ES2015 Classes"]'));
        await linkToJStutorial.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes');
        browser.ignoreSynchronization = false;
    });
});

describe('angular docs page', function () {
    it('should open link to Modules at Assumptions', async function () {

        browser.ignoreSynchronization = true;
        var linkToModules = element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav-content > #docs > aio-doc-viewer > div > div > p > a[title = "ES2015 Modules"]'));
        await linkToModules.click();
        await browser.sleep(5000);
        expect(await browser.getCurrentUrl()).toEqual('https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import');
        browser.ignoreSynchronization = false;
    });
});

describe('angular docs page', function () {
    it('should open link to TypeScript at Assumptions', async function () {

        browser.ignoreSynchronization = true;
        var linkToTypeScript = element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav-content > #docs > aio-doc-viewer > div > div > p > a[title = "TypeScript"]'));
        await linkToTypeScript.click();
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