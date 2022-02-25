
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    
})

test('Draw button displays the bots to choose', async ()=>{
    const drawButton = await driver.findElement(By.id('draw'))
    await drawButton.click()
    await driver.sleep(1000)
    const choices = await driver.findElement(By.id('choices'))
    expect(choices).toBeDefined()

})

test('Bots get added to player-duo', async ()=>{
    const addButton = await driver.findElement(By.className('bot-btn'))
    await addButton.click()
    await driver.sleep(2000)
    const playerDuo = await driver.findElement(By.id('player-duo'))
    expect(playerDuo).toBeDefined()
})