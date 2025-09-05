class CopilotPage{
    get centerText() { return $('[class="text-center"]') }
    get submitButton() { return $('//*[contains(text(), "Try now")]/../..')}
    
    async getText() {
        return await this.centerText.getText()
    }
    async clickSubmit() {
        await this.submitButton.click()
    }
}

export default new CopilotPage()