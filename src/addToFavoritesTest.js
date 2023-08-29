const { Builder, By } = require ('selenium-webdriver');

async function addToFavoritesFromProductСardTest(productCardUrl) {
    const driver = await new Builder()
        .forBrowser('chrome')
        .build()
    ;

    //Переходим на страницу  объявления
    await driver.get(productCardUrl);

    //Находим кнопку добавления в избранное и нажимаем её
    const addToFavoritesButton = await driver.findElement(By.xpath("//div[contains(@class, 'style-header-add-favorite')]/button"));
    await addToFavoritesButton.click();

    //Ждём 3 секунды реакции интерфейса на добавление товара в избранное
    setTimeout(async () => {
        //Проверяем, что нужный товар добавился в избранное
        const textNode = await addToFavoritesButton.findElement(By.xpath(".//span"));
        const text = await textNode.getText();
        if (text === 'В избранном')
        {
            console.log('Тест добавления товара в избранное пройден! :)');
        }
        else
        {
            console.error('Тест добавления товара в избранное не пройден :(');
        }
    }, 3000);
}

const productCardUrl = 'https://www.avito.ru/nikel/knigi_i_zhurnaly/domain-driven_design_distilled_vaughn_vernon_2639542363';
addToFavoritesFromProductСardTest(productCardUrl);