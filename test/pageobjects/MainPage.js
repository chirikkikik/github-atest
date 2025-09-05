class MainPage {
    get signUpButton() { return $('//*[@href="/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home"]') }

    async clickSignUp() {
        await this.signUpButton.click()
    }
}

export default new MainPage()

