class NewsLetterPage{
    get emailInput() { return $('//*[@type="email"]') }
    get dropdown() { return $('#country') }
    get checkbox() { return $('//*[@type="checkbox"]')}
    get submitButton() { return $('//*[@type="submit"]') }
    
    async scrollIntoView(element) {
        await element.scrollIntoView()
    }

    async setEmail(email) {
        await this.emailInput.setValue(email)
    }

    async selectCountry(country) {
        await this.dropdown.selectByVisibleText(country)
    }

    async checkBox() {
        await this.checkbox.click()
    }

    async clickSubmit() {
        await this.submitButton.click()
    }
}

export default new NewsLetterPage()