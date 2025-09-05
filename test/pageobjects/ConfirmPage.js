class ConfirmPage{
    get confirmText() { return $('#hero-section-brand-heading') }

    async getConfirmText() {
        return await this.confirmText.getText()
    }
}
export default new ConfirmPage()