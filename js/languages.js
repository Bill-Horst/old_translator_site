$(document).ready(function() {

  let languages = {
    japanese: {
      // HEAD SECTION
      'page-title-d': 'ホーストビリー、翻訳者',

      // SIDE BUTTONS
      'language-button': 'English',
      'ribbon-contact-d': 'お問い合わせ',

      // NAVIGATION BAR
      'brand': 'ホーストビリー',
      'nav-about-d': '自己紹介',
      'nav-specialization-d': '得なんとか',
      'nav-contact-d': 'お問い合わせ',

      // JUMBOTRON SECTION
      'name-header-span-d': 'ホーストビリー、翻訳者',
      'description-header-span-d': 'おりゃ翻訳者だよ。テックもできるよ。テックの翻訳もできるよ、おめえ。',

      // ABOUT SECTION
      'about-header-d': '自己紹介',
      'accordion-first-header-d': 'いまのロール',
      'accordion-first-body-d': 'いまはフォートコリンズでソフトウェアエンジニアとして働いています。',
      'accordion-second-header-d': 'いまのロール',
      'accordion-second-body-d': 'いまはフォートコリンズでソフトウェアエンジニアとして働いています。',
      'accordion-third-header-d': 'いまのロール',
      'accordion-third-body-d': 'いまはフォートコリンズでソフトウェアエンジニアとして働いています。',

      // CONTACT SECTION
      'contact-header-d': 'お問い合わせ',
      'form-user-name-d': '名前*',
      'form-user-email-d': '電子メール*',
      'form-user-message-d': 'メッセージ*',
      'form-user-send-button-d': '送',

      // SPECIALIZATION SECTION
      'specialization-header-d': '得なんとか',
      'click-for-info-government-d': '詳細を見るにはクリックしてください',
      'click-for-info-business-d': '詳細を見るにはクリックしてください',
      'click-for-info-technology-d': '詳細を見るにはクリックしてください',
      'specialization-title-government-d': '政府',
      'specialization-title-business-d': 'ビジネス',
      'specialization-title-technology-d': 'テクノロジー',

      // MODALS
      'modal-title-government-d': '政府の翻訳',
      'spec-gov-title-1': '政府の翻訳',
      'spec-gov-1-1': '政府の翻訳',
      'spec-gov-1-2': '政府の翻訳',
      'spec-gov-1-3': '政府の翻訳',
      'spec-gov-1-4': '政府の翻訳',
      'spec-gov-title-2': '政府の翻訳',
      'spec-gov-2-1': '政府の翻訳',
      'spec-gov-2-2': '政府の翻訳',

      'modal-title-business-d': 'ビジネスの翻訳',
      'spec-busi-title-1': '政府の翻訳',
      'spec-busi-1-1': '政府の翻訳',
      'spec-busi-1-2': '政府の翻訳',
      'spec-busi-title-2': '政府の翻訳',
      'spec-busi-2-1': '政府の翻訳',
      'spec-busi-2-2': '政府の翻訳',
      'spec-busi-2-3': '政府の翻訳',
      'spec-busi-title-3': '政府の翻訳',
      'spec-busi-3-1': '政府の翻訳',
      'spec-busi-3-2': '政府の翻訳',
      'spec-busi-3-3': '政府の翻訳',

      'modal-title-technology-d': 'テクノロジーの翻訳',
      'spec-tech-title-1': '政府の翻訳',
      'spec-tech-1-1': '政府の翻訳',
      'spec-tech-1-2': '政府の翻訳',
      'spec-tech-title-2': '政府の翻訳',
      'spec-tech-2-1': '政府の翻訳',
      'spec-tech-2-2': '政府の翻訳',
      'spec-tech-2-3': '政府の翻訳',
      'spec-tech-title-3': '政府の翻訳',
      'spec-tech-3-1': '政府の翻訳',
      'spec-tech-3-2': '政府の翻訳',
      'spec-tech-3-3': '政府の翻訳',
    },
    english: {
      // HEAD SECTION
      'page-title-d': 'Bill Horst Translator',

      // SIDE BUTTONS
      'language-button': '日本語',
      'ribbon-contact-d': 'Contact Me!',

      // NAVIGATION BAR
      'brand': 'Bill Horst',
      'nav-about-d': 'About',
      'nav-specialization-d': 'Specialization',
      'nav-contact-d': 'Contact',

      // JUMBOTRON SECTION
      'name-header-span-d': 'Bill Horst, Translator',
      'description-header-span-d': 'I am a Japanese to English translator in Colorado, USA. I lived in Japan for six years, four of which I spent translating with various agencies and businesses there. I\'m a techy at heart so I prefer to write about technology.',

      // ABOUT SECTION
      'about-header-d': 'About Me',
      'accordion-first-header-d': 'CURRENT ROLE',
      'accordion-first-body-d': 'I\'m working right now as a software engineer in Fort Collins, Colorado.',
      'accordion-second-header-d': 'ABOUT ME',
      'accordion-second-body-d': 'I\'m good at languages and I like travelling. I lived for six years in Japan where I taught English and got good at Japanese. I just kind of fell into translation. I started out volunteering as the editor of a monthly newsletter for foreigners in Japan and eventually took on the translation of it. I worked my way up and began translating for various businesses and a local government contractor. I like tech and stuff, too, so I can translate tech stuff.',
      'accordion-third-header-d': 'EDUCATION',
      'accordion-third-body-d': 'I\'ve been into foreign languages since I was a little kid, first studying French, then Italian, then Spanish and Russian simultaneously. I eventually got my degree in Russian, but decided to go to Japan where I then studied Japanese. When studying a foreign language, there\'s no substitute for complete submersion in the culture and language.',

      // CONTACT SECTION
      'contact-header-d': 'Contact',
      'form-user-name-d': 'Name*',
      'form-user-email-d': 'Email address*',
      'form-user-message-d': 'Message*',
      'form-user-send-button-d': 'Send',

      // SPECIALIZATION SECTION
      'specialization-header-d': 'Specializations',
      'click-for-info-government-d': 'Click for more info',
      'click-for-info-business-d': 'Click for more info',
      'click-for-info-technology-d': 'Click for more info',
      'specialization-title-government-d': 'Government',
      'specialization-title-business-d': 'Business',
      'specialization-title-technology-d': 'Technology',

      // MODALS
      'modal-title-government-d': 'Government Translations',
      'spec-gov-title-1': 'Official Government Documents',
      'spec-gov-1-1': 'Family Registry',
      'spec-gov-1-2': 'Birth Certificates',
      'spec-gov-1-3': 'Death Certificates',
      'spec-gov-1-4': 'Marriage Certificates',
      'spec-gov-title-2': 'Government Informations',
      'spec-gov-2-1': 'Articles',
      'spec-gov-2-2': 'Newsletters',

      'modal-title-business-d': 'Business Translations',
      'spec-busi-title-1': 'Articles',
      'spec-busi-1-1': 'Software',
      'spec-busi-1-2': 'Current Trends',
      'spec-busi-title-2': 'Others',
      'spec-busi-2-1': 'Websites',
      'spec-busi-2-2': 'Documentation',
      'spec-busi-2-3': 'Articles',
      'spec-busi-title-3': 'Website',
      'spec-busi-3-1': 'Tourism',
      'spec-busi-3-2': 'Advertisements',
      'spec-busi-3-3': 'Business',

      'modal-title-technology-d': 'Technology Translations',
      'spec-tech-title-1': 'Articles',
      'spec-tech-1-1': 'Software',
      'spec-tech-1-2': 'Current Trends',
      'spec-tech-title-2': 'Others',
      'spec-tech-2-1': 'Websites',
      'spec-tech-2-2': 'Documentation',
      'spec-tech-2-3': 'Articles',
      'spec-tech-title-3': 'Website',
      'spec-tech-3-1': 'Tourism',
      'spec-tech-3-2': 'Advertisements',
      'spec-tech-3-3': 'Business',
    }
  }

  let language = 'english';
  setLanguage(language);

  $('#language-button').on('click', function() {
    language = language === 'english' ? 'japanese' : 'english';
    setLanguage(language);
  });

  function setLanguage(language) {
    let languageSet = languages[language];
    for (element in languageSet) {
      $('#' + element).html(languageSet[element]);
    }
  }

});
