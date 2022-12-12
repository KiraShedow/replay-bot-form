const TelegramBot = require('node-telegram-bot-api');
const token = '5602831261:AAE_UMZma-_c1UzhZLcUSpNOtfGit5yLX3M';
const webAppUrl = 'https://fipodique.beget.app/';

const bot = new TelegramBot(token, { polling: true });

const buttonActiveOne = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: '🚀 ОФОРМИТЬ ПОДПИСКУ 🚀', web_app: { url: webAppUrl } }],
            [
                {
                    text: "ОТПРАВИТЬ ЧЕК",
                    url: "https://t.me/Nika4357",
                  },
              ]
        ]
    })
}

function started(){
    bot.on('message', async (msg) => {
        const chatId = msg.chat.id;
        const text = msg.text;
    
        if (text === '/start') {
            await bot.sendPhoto(chatId, 'img/messageOne.jpeg')
            await bot.sendMessage(chatId, 'Здраствуйте!\nДля того что б перейти в чат, нажмите \nна кнопку ниже  и оплатите подписку \n\n Как перейти в платный чат: \n- нужно нажать на кнопку Получить доступ в платный чат где все телефоны открыты \n- затем вас переведет в бот в нем нажинаем кнопку старт и появляется описание действий \n- после чего в боте нажимаем кнопку оформить подписку и переходим на форму где нужно заполнить свои данные\n - заполняем в окне свои данные корректно так как по ним будет получен доступ в платную группу: \nИмя \nТелефон \nid телеграмм \n- нажимаем кнопку получить доступ и всплывает окно где указанна карта на которую нужно совершить перевод \n- копируем карту совершаем оплату и отправляем чек нажав кнопку отправить чек \n- чек принимаем администратор группы сверяет все даные и оплату и в течении часа добавляет вас в группу \n- доступ к группе у вас будет на столько вы оплатили подписку, которую вы также сможете продлевать каждый раз\n\n', buttonActiveOne)
        }
    })
}
started()