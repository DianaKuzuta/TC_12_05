module.exports = new PageObject();

function PageObject() {
    this.linkToCodeOfConduct = element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav-content > #docs > aio-doc-viewer > div > div > p > a[title = "contributor code of conduct"]'));
    this.linkToContributingGuide = element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav-content > #docs > aio-doc-viewer > div > div > p > a[title = "Contributing guide"]'));
    this.linkToTypeScriptTypes = element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav-content > #docs > aio-doc-viewer > div > div > p > a[title = "TypeScript Types"]'));
    this.linkToDecorators = element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav-content > #docs > aio-doc-viewer > div > div > p > a[title = "Decorators"]'));
    this.linkToIssues = element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav-content > #docs > aio-doc-viewer > div > div > p > a[title = "Angular Github issues"]'));
    this.linkToPullRequests = element(by.css('body > aio-shell > mat-sidenav-container > mat-sidenav-content > #docs > aio-doc-viewer > div > div > p > a[title = "Angular Github pull requests"]'));

}