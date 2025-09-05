class SignUpPage {
    get welcomeText() { return $("[class='signups-rebrand__container-h1 color-fg-on-emphasis']") }
    get emailField() { return $('#email') }
    get passwordField() { return $('#password') }
    get usernameField() { return $('#login') }
    get registerButton() { return $('/html/body/div[1]/div[4]/div/main/div/div[2]/div[2]/div/div[2]/div/signup-form/form/div[2]') }
    get PrivacyPolicyLink() { return $('//*[@class="Link--inTextBlock" and @href="/site/privacy"]')}
    
    async setEmail(value) {
        await this.emailField.setValue(value)
    }
    async setPassword(value) {
        await this.passwordField.setValue(value)
    }
    async setUsername(value) {
        await this.usernameField.setValue(value)
    }

    async clickRegister() {
        await this.registerButton.click()
    }

    async getText(element) {
        return await element.getText()
    }
}

export default new SignUpPage()