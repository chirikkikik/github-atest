import { browser, expect } from '@wdio/globals'
import MainPage from './../pageobjects/MainPage.js'
import SignUpPage from './../pageobjects/SignUpPage'
import CopilotPage from './../pageobjects/CopilotPage.js'
import NewsletterPage from '../pageobjects/NewsletterPage.js'
import ConfirmPage from '../pageobjects/ConfirmPage.js'

describe('My Login application', () => {
    xit('should signUP', async () => {
        await browser.url('https://github.com')
        await MainPage.clickSignUp()
        await expect(await SignUpPage.welcomeText).toHaveText('Create your free account')
        console.log(await SignUpPage.getText(SignUpPage.welcomeText))
        await SignUpPage.setEmail('exampleempldhg@gmail.com')
        await SignUpPage.setPassword('Superduperpass!')
        await SignUpPage.setUsername('S6uperuser')
        await SignUpPage.clickRegister()
        
    })

    xit('should have text in header', async () => {
        await browser.url('https://github.com')
        const header = await MainPage.getHeaderText()
        await expect(await header).toContain("Work together, achieve more")
        await MainPage.isClickable()
        await MainPage.copilotButton.click()
        await browser.pause(2000)
        const text = await CopilotPage.getText()
        await expect(await text).toBe("Try Copilot Pro for 30 days free")
        console.log(await header)
        console.log(await text)
        await CopilotPage.clickSubmit()
    })

    it('should subscribe to newsletter', async () => {
        await browser.url('https://github.com')
        await MainPage.clickSubscribeButton()
        await expect(browser).toHaveUrl('https://resources.github.com/newsletter/')
        await NewsletterPage.scrollIntoView(NewsletterPage.emailInput)
        await NewsletterPage.setEmail('jcjdkdc@gmail.com')
        await NewsletterPage.selectCountry('Ukraine')
        await NewsletterPage.checkBox()
        await NewsletterPage.clickSubmit()
        const text = await ConfirmPage.getConfirmText()
        await expect(await text).toBe('Thanks for subscribing!')
        console.log(await text)
    })

    //https://resources.github.com/newsletter/
})
