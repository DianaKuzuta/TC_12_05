module.exports = new PageObject();

function PageObject() {
    this.linkToCodeOfConduct = element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav-content > #docs > aio-doc-viewer > div > div > p > a[title = "contributor code of conduct"]'));
    this.linkToContributingGuide = element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav-content > #docs > aio-doc-viewer > div > div > p > a[title = "Contributing guide"]'));
    this.linkToTypeScriptTypes = element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav-content > #docs > aio-doc-viewer > div > div > p > a[title = "TypeScript Types"]'));
    this.linkToDecorators = element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav-content > #docs > aio-doc-viewer > div > div > p > a[title = "Decorators"]'));
    this.linkToIssues = element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav-content > #docs > aio-doc-viewer > div > div > p > a[title = "Angular Github issues"]'));
    this.linkToPullRequests = element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav-content > #docs > aio-doc-viewer > div > div > p > a[title = "Angular Github pull requests"]'));
    this.el = element(by.css('aio-search-box.search-container'));
    this.search = element(by.css('body > aio-shell > mat-toolbar > mat-toolbar-row:nth-child(2) > aio-search-box > input[type="search"]'));
    this.searchresult = element(by.css('body > aio-shell > aio-search-results.ng-star-inserted > div.search-results >  div.search-area.ng-star-inserted:nth-child(4) > ul.priority-pages > li.search-page.ng-star-inserted > a.search-result-item'));
    this.pagename = element(by.css('#api-list'));
    this.box = element(by.xpath('//*[@id="docs"]/aio-doc-viewer/div/div/div/a[2]'));
    this.pagenameQS = element(by.css('#quickstart'));
    this.menuLinkToFeatures = element(by.css('body > aio-shell > mat-toolbar > mat-toolbar-row.mat-toolbar-row > aio-top-menu > ul > li.ng-star-inserted >  a.nav-link[title="Features"]'));
    this.pagenameFB = element(by.id('features--benefits'));
    this.menuLinkToResources = element(by.css('body > aio-shell > mat-toolbar > mat-toolbar-row.mat-toolbar-row > aio-top-menu > ul > li.ng-star-inserted >  a.nav-link[title="Resources"]'));
    this.pagenameAR = element(by.id('explore-angular-resources'));
    this.menuLinkToEvents = element(by.css('body > aio-shell > mat-toolbar > mat-toolbar-row.mat-toolbar-row > aio-top-menu > ul > li.ng-star-inserted >  a.nav-link[title="Events"]'));
    this.pagenameEvents = element(by.css('#events > aio-doc-viewer > div > div > header > h1#events.banner-headline.no-toc.no-anchor'));
    this.menuLinkToBlog = element(by.css('body > aio-shell > mat-toolbar > mat-toolbar-row.mat-toolbar-row > aio-top-menu > ul > li.ng-star-inserted >  a.nav-link[title="Blog"]'));
    this.footerLink = element(by.css('body > div > div > div > div > div > div > div > div > a[title = "About Angular Blog"]'));
    this.menuLinkTheFundamentals = element(by.buttonText('Fundamentals'));
    this.menuLinkArchitecture = element(by.buttonText('Architecture'));
    this.menuLinkArchitectureOverview = element(by.css('div > div > aio-nav-item > div > div > aio-nav-item > div > a[title = "Basic building blocks of Angular applications."]'));
    this.linkToJStutorial = element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav-content > #docs > aio-doc-viewer > div > div > p > a[title = "Learn JavaScript"]'));
    this.linkToJSstandards = element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav-content > #docs > aio-doc-viewer > div > div > p > a[title = "Latest JavaScript standards"]'));
    this.linkToClasses = element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav-content > #docs > aio-doc-viewer > div > div > p > a[title = "ES2015 Classes"]'));
    this.linkToModules = element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav-content > #docs > aio-doc-viewer > div > div > p > a[title = "ES2015 Modules"]'));
    this.linkToTypeScript = element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav-content > #docs > aio-doc-viewer > div > div > p > a[title = "TypeScript"]'));
}