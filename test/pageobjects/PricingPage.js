class PricingPage {
    get text() { return $('//h1[@class="h2-mktg"]') }
    get compareButton() { return $('/html/body/div[1]/div[4]/main/div[2]/div/div[3]/a') }
    get compareFeatures() { return $('.h1')}
    
    async clickCompare() {
        await this.compareButton.scrollIntoView()
        await this.compareButton.click()
    }
}

export default new PricingPage()