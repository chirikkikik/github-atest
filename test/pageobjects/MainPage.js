class MainPage {
    get signUpButton() { return $('//*[@href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]') }
    get header() { return $('//div[contains(text(), "Work together, achieve more")]') }
    get copilotButton() { return $('//*[@id="cta"]/div/section/div/div/div/a') }
    get subscribeButton() { return $('.btn-mktg.mb-4.btn-muted-mktg') }
    get searchInputButton() { return $('.search-input-container') }
    get searchInput() { return $('#query-builder-test') }
    get pricingLink() { return $('.HeaderMenu-link.no-underline.px-0.px-lg-2.py-3.py-lg-2.d-block.d-lg-inline-block')}

    async clickSignUp() {
        await this.signUpButton.click()
    }
    async getHeaderText() {
        await this.header.scrollIntoView()
        return await this.header.getText()
    }
    async isClickable() {
        return await this.copilotButton.isClickable()
    }
    async clickSubscribeButton() {
        await this.subscribeButton.scrollIntoView()
        await this.subscribeButton.click()
    }
    async search() {
        await this.searchInputButton.click()
        await this.searchInput.setValue('cat')
        await browser.keys('Enter')
    }
    async clickPricing() {
        await this.pricingLink.click()
    }
}

export default new MainPage()

