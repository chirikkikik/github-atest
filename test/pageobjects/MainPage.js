class MainPage {
    get signUpButton() { return $('//*[@href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]') }
    get header() { return $('//div[contains(text(), "Work together, achieve more")]') }
    get copilotButton() { return $('//*[@id="cta"]/div/section/div/div/div/a') }
    get subscribeButton() { return $('.btn-mktg.mb-4.btn-muted-mktg')}

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
}

export default new MainPage()

