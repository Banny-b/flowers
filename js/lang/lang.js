// const arrLang = {
//     'ua': {
//         '1': 'Привіт, я Юлія! Рада бачити вас на моїй сторінці. Маю великий досвід у вирощуванні та догляду за голоксініями. В цьому каталозі ви можете ознайомитись з моїми квітами, які я власноруч вирастила, та зробити замовлення.',
//         '2': 'Замовити',
//         '': '',
//         '': '',
//         '': '',
//     },
//     'ru': {
//         '1': 'Привет, я Юлия! Рада видеть вас на моей странице. Имею большой опыт в выращивании и ухода за голоксиниями. В этом каталоге вы можете ознакомиться с моими цветами, которые я собственноручно вырастила и сделать заказ.',
//         '2': 'Заказать',
//         '': '',
//         '': '',
//         '': '',
//     }
// };

// document.addEventListener('DOMContentLoaded', function() {
//     const translateElements = document.querySelectorAll('.translate');
//     const langSelect = document.querySelector('.change-lang');
//     const langButton = document.querySelector('.lang');

//     translateElements.forEach(function(element) {
//         element.addEventListener('click', function() {
//         const lang = element.getAttribute('id');

//         langButton.textContent = arrLang[lang][langButton.getAttribute('key')];
//         });
//     });

//     langSelect.addEventListener('change', function() {
//         const lang = langSelect.options[langSelect.selectedIndex].getAttribute('id');

//         langButton.textContent = arrLang[lang][langButton.getAttribute('key')];
//     });
// });






const arrLang = {
    'ua': {
        '1': 'Привіт, я Юлія! Рада бачити вас на моїй сторінці. Маю великий досвід у вирощуванні та догляду за голоксініями. В цьому каталозі ви можете ознайомитись з моїми квітами, які я власноруч вирастила, та зробити замовлення.',
        '2': 'Замовити',
        '3': 'Мої квіти',
        '4': 'Немає в наявності',
        '5': 'м. Харків, Україна',
        '6': 'Бажаєте замовити?',
        '7': 'Напишіть мені на пошту simonika22@ukr.net, або зателефонуйте +38 068 069 71 48.',
        '8': 'В листі залиште свої контактні дані: ім\'я, пошту та телефон.',
        '9': 'Також напишіть, що вам потрібно (квіти, чи листочки), та їх кількість.',
        '': '',
    },
    'ru': {
        '1': 'Привет, я Юлия! Рада видеть вас на моей странице. Имею большой опыт в выращивании и уходе за голоксиниями. В этом каталоге вы можете ознакомиться с моими цветами, которые я вырастила самостоятельно, и сделать заказ.',
        '2': 'Заказать',
        '3': 'Мои цветы',
        '4': 'Нет в наличии',
        '5': 'г. Харьков, Украина',
        '6': 'Хотите заказать?',
        '7': 'Напишите мне на почту simonika22@ukr.net, или позвоните +38 068 069 71 48.',
        '8': 'В письме оставьте свои контактные данные: имя, почту и телефон.',
        '9': 'Также напишите, что вам нужно (цветы или листики), и их количество.',
        '': '',
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const translateElements = document.querySelectorAll('.lang');
    const langSelect = document.querySelector('.change-lang');

    translateElements.forEach(function(element) {
        const key = element.getAttribute('key');
        element.textContent = translateText(key);
    });

    langSelect.addEventListener('change', function() {
        translateElements.forEach(function(element) {
            const key = element.getAttribute('key');
            element.textContent = translateText(key);
        });
    });

    function translateText(key) {
        const lang = langSelect.value;
        if (arrLang[lang] && arrLang[lang][key]) {
            return arrLang[lang][key];
        }
        return '';
    }
});


