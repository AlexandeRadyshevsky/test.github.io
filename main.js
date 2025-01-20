let cards = document.querySelectorAll('.card');
        
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const button = card.querySelector('.more-info');
        button.style.bottom = '70px';  
        button.style.opacity = '1';    
        card.style.transform = 'scale(1.1)';
        button.style.width = '70%';
        button.style.height = '10%';
        card.style.transition = 'transform 0.5s ease';
        card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
    });

    card.addEventListener('mouseleave', () => {
        const button = card.querySelector('.more-info');
        button.style.bottom = '-20px'; 
        button.style.opacity = '0';    
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '2 4px 8px rgba(0, 0, 0, 0.1)';
    });
});


const translations = {
    'search-placeholder': {
        en: 'Lamps',
        ru: 'Лампы'
    },
    'cart-text': {
        en: 'Cart',
        ru: 'Корзина'
    },
    
    
    'delivery-payment': {
        en: 'Delivery and Payment',
        ru: 'Доставка и оплата'
    },
    'warranty-return': {
        en: 'Warranty and Returns',
        ru: 'Гарантия и возврат'
    },
    'cart': {
        en: 'Cart',
        ru: 'Корзина'
    },
    'catalog': {
        en: 'Catalog',
        ru: 'Каталог'
    },
    'about': {
        en: 'About Us',
        ru: 'О компании'
    },
    'contacts': {
        en: 'Contacts',
        ru: 'Контакты'
    },
    'search-results': {
        en: 'Search Results',
        ru: 'Результаты поиска'
    },
    'sale': {
        en: 'Sale',
        ru: 'Акция'
    },
    'more-info': {
        en: 'More Info',
        ru: 'Подробнее'
    },
    'product-name-1': {
        en: 'Built-in Light Markt',
        ru: 'Встраиваемый светильник Markt'
    },
    'product-name-2': {
        en: 'Linear Light ARG',
        ru: 'Линейный светильник ARG'
    },
    'product-name-3': {
        en: 'Modern Light',
        ru: 'Современный светильник'
    },
    'product-name-4': {
        en: 'Built-in Light Markt',
        ru: 'Встраиваемый светильник Markt'
    },
    'product-name-5': {
        en: 'Linear Light ARG',
        ru: 'Линейный светильник ARG'
    },
    'product-name-6': {
        en: 'LED Light',
        ru: 'Сведодиодный светильник'
    },
    'address': {
        en: 'Address',
        ru: 'Адрес'
    },
    'protected': {
        en: 'This site is protected by reCAPTCHA Google.',
        ru: 'Этот сайт защищен от спама службой reCAPTCHA Google.'
    },
    'privacy-policy': {
        en: 'Privacy Policy',
        ru: 'Политика конфиденциальности'
    },
    'terms-of-service': {
        en: 'Terms of Service',
        ru: 'Условия предоставления услуг'
    },
    'services': {
        en: 'Services',
        ru: 'Услуги'
    },
    'public-offer': {
        en: 'Public Offer',
        ru: 'Публичная оферта'
    },
    'personal-data-policy': {
        en: 'Personal Data Policy',
        ru: 'Политика персональных данных'
    }
};

let currentLang = 'ru';

function changeLanguage() {
    const lang = document.getElementById('lang-toggle').textContent === 'ENG' ? 'en' : 'ru';
    const translateElements = document.querySelectorAll('[data-translate]');

    translateElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translatedText = translations[key] ? translations[key][lang] : element.innerHTML;
        
        if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
            element.setAttribute('placeholder', translatedText);
        } else {
            element.innerHTML = translatedText;
        }
    });

    document.getElementById('lang-toggle').textContent = lang === 'en' ? 'RU' : 'ENG';
}


function toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('show');
}

