import { browser, expect } from '@wdio/globals'
import MainPage from './../pageobjects/MainPage.js'
import SignUpPage from './../pageobjects/SignUpPage'

describe('My Login application', () => {
    it('should signUP', async () => {
        await browser.url('https://github.com')
        await MainPage.clickSignUp()
        await expect(SignUpPage.welcomeText).toHaveText('Create your free account')
        console.log(await SignUpPage.getText(SignUpPage.welcomeText))
        await SignUpPage.setEmail('exampleempldhg@gmail.com')
        await SignUpPage.setPassword('Superduperpass!')
        await SignUpPage.setUsername('S6uperuser')
        await SignUpPage.clickRegister()
        
    })
})
