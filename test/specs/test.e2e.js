import { browser, expect } from '@wdio/globals'
import MainPage from './../pageobjects/MainPage.js'
import SignUpPage from './../pageobjects/SignUpPage'
import CopilotPage from './../pageobjects/CopilotPage.js'

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

    it('should have text in header', async () => {
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

})
