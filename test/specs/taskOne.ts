//const assert = require('assert')

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://testingcup.pgs-soft.com/`)       
        //const title = await browser.getTitle()
        
        //assert.strictEqual(title,  "Welcome!")
        expect(browser).toHaveTitle("Welcome1111111111111111111")
        //assert(title === "Google")

        /*const btn1 = await $('.//div[@class="col-md-6"]/a')
        btn1.click()
        await browser.url(`https://testingcup.pgs-soft.com/task_1`)  
        const zagolovok = await $('.//li[text() = "Zadanie 1"]')
        assert(zagolovok === "Zadanie 1")*/
        //assert.strictEqual(zagolovok, 'Zadanie 1')
    })



    it('should', async () => {
        await browser.url(`https://testingcup.pgs-soft.com/`)       
        let btn1 = await $('.//div[@class="col-md-6"]/a')
        btn1.click()
        await browser.pause(5000)
        //await expect(browser).toHaveUrl('https://testingcup.pgs-soft.com/task_1')
        const sumProd = 
        $('//h4[text()="Okulary"]/following-sibling::div[@class="input-group input-group-sm"]/input')
        await sumProd.setValue(3)
        const addProd = 
        $('//h4[text()="Okulary"]/following-sibling::div[@class="input-group input-group-sm"]/span/button')
        await addProd.click()
        const order = $('//div[text() = "Twój koszyk"]')
        //await browser.pause(10000)
        await expect(order).toBeDisplayed()
    })

})

