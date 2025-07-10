// 定义翻译数据
const translations = {
    en: {
        companyName: 'Huizhou Minwe Electronic Technology',
        navHome: 'Home',
        navAbout: 'About Us',
        navProducts: 'Products',
        navServices: 'Services',
        navContact: 'Contact Us',
        heroTitle: 'Innovative Technology',
        heroTitle2:'Drives the Future',
        heroContactBtn: 'Contact Us',
        heroLearnMore: 'Learn More',
        aboutTitle: 'About Us',
        aboutDesc: 'Minwe adheres to the spirit of innovation, focusing on the research and development and production of cutting-edge electronic products, providing high-quality intelligent solutions for global customers.',
        aboutFeature1Title: 'Innovative Spirit',
        aboutFeature1Desc: 'We foster a culture of continuous exploration and innovation. Our R & D team is always on the lookout for new technologies, trends, and ideas. By leveraging the latest advancements in materials science, electronics engineering, and software development, we are able to launch a series of innovative products and solutions that set new benchmarks in the industry.',
        aboutFeature2Title: 'Customer First',
        aboutFeature2Desc: 'At Minwe Technology, our customers are at the heart of everything we do. We invest significant time and resources in understanding their needs, pain points, and aspirations. By maintaining open lines of communication and providing personalized support, we ensure that every customer has an excellent product and service experience. Our commitment to customer satisfaction is unwavering, and we constantly strive to build long - term relationships based on trust and mutual benefit.',
        aboutFeature3Title: 'Strive for Perfection',
        aboutFeature3Desc: 'We believe that excellence is not an option but a necessity. In every aspect of our business, from product design and development to manufacturing and after - sales service, we pursue perfection. Our quality control team adheres to strict standards and conducts rigorous inspections at every stage of the production process. By paying attention to the smallest details, we ensure that our products and services meet the highest quality requirements.',
        aboutFeature4Title: 'Global Vision',
        aboutFeature4Desc: 'While rooted in our local community, we have our eyes on the global market. We actively participate in international technology exhibitions, collaborate with global partners, and keep a close watch on industry trends worldwide. This global perspective enables us to bring the best of both worlds to our customers, combining local insights with international expertise.',
        productsTitle: 'Our Products',
        productsDesc: 'Explore our innovative electronic product series to bring convenience and efficiency to your life and work.',
        product1Title: 'Outdoor Power Bank',
        product1Desc: '40000mAh ultra-large capacity power bank, easily meets the power needs of multiple devices, protecting your digital life anytime and anywhere!',
        product2Title: 'Bank Marine Battery Charger',
        product2Desc: 'Supporting multiple battery types, with waterproof, short-circuit protection, and intelligent charging functions, it is an ideal charging solution for ships and electric equipment.',
        product3Title: 'Multifunctional power booster',
        product3Desc: 'Integrating emergency start, inflation pump, and USB charging functions, it is suitable for 12V vehicles and has a peak starting current of 1000A, which can quickly start most vehicles.',
        productsViewAllBtn: 'View All Products',
        servicesTitle: 'Our Services',
        servicesDesc: 'In addition to high-quality products, we also provide more professional technical support and a range of services.',
        service1Title: 'Technical Support',
        service1Desc: 'Our professional technical team provides you with 7×24 online support to solve the problems you encounter in the process of using the products.',
        service2Title: 'OEM',
        service2Desc: 'Providing OEM production and original design manufacturing for global brands.',
        service3Title: 'Batch production',
        service3Desc: 'Efficient and large-scale production to meet customer order requirements.',
        service4Title: 'Custom Development',
        service4Desc: 'Tailor-made development services to meet your specific needs and create unique products for you.',
        contactTitle: 'Contact Us',
        contactDesc: 'If you have any questions or suggestions, please feel free to contact us and we will reply to you as soon as possible.',
        contactInfoTitle: 'Contact Information',
        contactAddressTitle: 'Company Address',
        contactAddressDesc: 'Minghua Industrial Park, Ruhu Town, Huicheng District, Huizhou City, Guangdong Province, China',
        contactPhoneTitle: 'Contact Phone',
        contactEmailTitle: 'Email',
        viewOnMap: 'View on Map',
        footerAbout: 'Leading innovation in electronic devices, providing high-quality power solutions for businesses and consumers worldwide.',
        Partnership:'Partnership',
        footerCopyright: '@ 2025 Huizhou Minwe Technology Co., Ltd. All rights reserved.'
    },
    zh: {
        companyName: '惠州明玮电子科技',
        navHome: '主页',
        navAbout: '关于我们',
        navProducts: '产品',
        navServices: '服务',
        navContact: '联系我们',
        heroTitle: '创新科技',
        heroTitle2:'驱动未来',
        heroContactBtn: '联系我们',
        heroLearnMore: '了解更多',
        aboutTitle: '关于我们',
        aboutDesc: '明玮秉持创新精神，专注于前沿电子产品的研发与生产，为全球客户提供高品质的智能解决方案。',
        aboutFeature1Title: '创新精神',
        aboutFeature1Desc: '我们倡导持续探索和创新的文化。我们的研发团队始终关注新技术、趋势和创意。通过利用最新的材料科学、电子工程和软件开发进展，我们能够推出一系列创新产品和解决方案，树立行业新标杆。',
        aboutFeature2Title: '客户至上',
        aboutFeature2Desc: '在明玮科技，客户是我们一切工作的核心。我们投入大量时间和资源来了解客户的需求、痛点和期望。通过保持开放的沟通渠道并提供个性化支持，我们确保每位客户都能享受到卓越的产品和服务体验。我们对客户满意度的承诺坚定不移，并不断努力建立基于信任和互利的长期关系。',
        aboutFeature3Title: '追求完美',
        aboutFeature3Desc: '我们相信卓越不是选择，而是必需。在我们业务的每个方面，从产品设计和开发到制造和售后服务，我们都追求完美。我们的质量控制团队遵循严格的标准，并在生产过程的每个阶段进行严格检查。通过关注最小的细节，我们确保我们的产品和服务满足最高质量要求。',
        aboutFeature4Title: '全球视野',
        aboutFeature4Desc: '虽然扎根于本地社区，但我们目光放在全球市场。我们积极参与国际技术展览，与全球合作伙伴合作，并密切关注全球行业趋势。这种全球视野使我们能够将本地洞察与国际专业知识相结合，为客户带来两全其美的解决方案。',
        productsTitle: '我们的产品',
        productsDesc: '探索我们创新的电子产品系列，为您的生活和工作带来便利与高效。',
        product1Title: '户外移动电源',
        product1Desc: '40000mAh超大容量移动电源，轻松满足多设备的电力需求，随时随地保护您的数字生活！',
        product2Title: '船用电池充电器',
        product2Desc: '支持多种电池类型，具备防水、短路保护和智能充电功能，是船舶和电动设备的理想充电解决方案。',
        product3Title: '多功能电源启动器',
        product3Desc: '集应急启动、充气泵和USB充电功能于一体，适用于12V车辆，峰值启动电流1000A，可快速启动大多数车辆。',
        productsViewAllBtn: '查看所有产品',
        servicesTitle: '我们的服务',
        servicesDesc: '除了高品质的产品，我们还提供更加专业的技术支持和一系列服务。',
        service1Title: '技术支持',
        service1Desc: '我们专业的技术团队为您提供 7×24 在线支持，解决您在使用产品过程中遇到的问题。',
        service2Title: 'OEM',
        service2Desc: '为全球品牌提供OEM生产和原始设计制造服务。',
        service3Title: '批量生产',
        service3Desc: '高效大规模生产，满足客户订单需求。',
        service4Title: '定制开发',
        service4Desc: '量身定制开发服务，满足您的特定需求，为您打造独一无二的产品。',
        contactTitle: '联系我们',
        contactDesc: '如果您有任何问题或建议，请随时联系我们，我们将尽快回复您。',
        contactInfoTitle: '联系信息',
        contactAddressTitle: '公司地址',
        contactAddressDesc: '中国广东省惠州市惠城区汝湖镇明华工业园',
        contactPhoneTitle: '联系电话',
        contactEmailTitle: '电子邮箱',
        viewOnMap: '在地图上查看',
        footerAbout: '引领电子设备创新，为全球企业和消费者提供高品质的电源解决方案。',
        Partnership:'合作伙伴',
        footerCopyright: '@ 2025 惠州明玮科技有限公司 保留所有权利。'
    },
    de: {
        companyName: 'Huizhou Minwe Electronic Technology',
        navHome: 'Startseite',
        navAbout: 'Über uns',
        navProducts: 'Produkte',
        navServices: 'Dienstleistungen',
        navContact: 'Kontaktieren Sie uns',
        heroTitle: 'Innovative Technologie',
        heroTitle2: 'Treibt die Zukunft',
        heroContactBtn: 'Kontaktieren Sie uns',
        heroLearnMore: 'Mehr erfahren',
        aboutTitle: 'Über uns',
        aboutDesc: 'Minwe hält sich an den Geist der Innovation und konzentriert sich auf die Forschung, Entwicklung und Produktion von modernsten Elektronikprodukten. Wir bieten hochwertige intelligente Lösungen für globale Kunden.',
        aboutFeature1Title: 'Innovationsgeist',
        aboutFeature1Desc: 'Wir fördern eine Kultur der kontinuierlichen Erkundung und Innovation. Unser F&E-Team ist immer auf der Suche nach neuen Technologien, Trends und Ideen. Durch die Nutzung neuester Fortschritte in Materialwissenschaften, Elektroniktechnik und Softwareentwicklung können wir eine Reihe innovativer Produkte und Lösungen auf den Markt bringen, die neue Maßstäbe in der Branche setzen.',
        aboutFeature2Title: 'Kundenorientierung',
        aboutFeature2Desc: 'Bei Minwe Technology stehen unsere Kunden im Mittelpunkt unseres Handelns. Wir investieren erhebliche Zeit und Ressourcen, um ihre Bedürfnisse, Schmerzpunkte und Wünsche zu verstehen. Durch offene Kommunikationskanäle und personalisierte Unterstützung stellen wir sicher, dass jeder Kunde eine hervorragende Produkt- und Serviceerfahrung hat. Unser Engagement für Kundenzufriedenheit ist unerschütterlich, und wir streben ständig danach, langfristige Beziehungen auf der Grundlage von Vertrauen und gegenseitigem Nutzen aufzubauen.',
        aboutFeature3Title: 'Streben nach Perfektion',
        aboutFeature3Desc: 'Wir glauben, dass Exzellenz keine Option, sondern eine Notwendigkeit ist. In jedem Aspekt unseres Geschäfts, von der Produktgestaltung und -entwicklung bis hin zur Herstellung und zum After-Sales-Service, streben wir nach Perfektion. Unser Qualitätssicherungsteam hält sich an strenge Standards und führt in jeder Phase des Produktionsprozesses strenge Inspektionen durch. Durch die Beachtung kleinster Details stellen wir sicher, dass unsere Produkte und Dienstleistungen die höchsten Qualitätsanforderungen erfüllen.',
        aboutFeature4Title: 'Globale Vision',
        aboutFeature4Desc: 'Obwohl wir in unserer lokalen Gemeinschaft verwurzelt sind, richten wir unseren Blick auf den globalen Markt. Wir nehmen aktiv an internationalen Technologiemessen teil, arbeiten mit globalen Partnern zusammen und behalten die Branchentrends weltweit im Auge. Diese globale Perspektive ermöglicht es uns, das Beste aus beiden Welten für unsere Kunden zu vereinen und lokale Einblicke mit internationaler Expertise zu kombinieren.',
        productsTitle: 'Unsere Produkte',
        productsDesc: 'Entdecken Sie unsere innovative Elektronikproduktreihe, um Ihrem Leben und Ihrer Arbeit Komfort und Effizienz zu bringen.',
        product1Title: 'Outdoor Power Bank',
        product1Desc: '40000mAh Ultra-Großkapazitäts-Powerbank, erfüllt mühelos die Energiebedürfnisse mehrerer Geräte und schützt Ihr digitales Leben jederzeit und überall!',
        product2Title: 'Marine-Batterieladegerät',
        product2Desc: 'Unterstützt mehrere Batterietypen, mit wasserdichten, Kurzschlussschutz- und intelligenten Ladefunktionen, ist es eine ideale Ladelösung für Schiffe und elektrische Geräte.',
        product3Title: 'Multifunktionaler Strombooster',
        product3Desc: 'Integriert Notstart, Luftpumpe und USB-Ladefunktionen, geeignet für 12V-Fahrzeuge mit einem Spitzenstartstrom von 1000A, der die meisten Fahrzeuge schnell starten kann.',
        productsViewAllBtn: 'Alle Produkte anzeigen',
        servicesTitle: 'Unsere Dienstleistungen',
        servicesDesc: 'Neben hochwertigen Produkten bieten wir auch professionellen technischen Support und eine Reihe von Dienstleistungen an.',
        service1Title: 'Technische Unterstützung',
        service1Desc: 'Unser professionelles Technikteam bietet Ihnen 7×24-Online-Support, um die Probleme zu lösen, die Sie beim Verwenden der Produkte auftreten.',
        service2Title: 'OEM',
        service2Desc: 'Bereitstellung von OEM-Produktion und Original-Design-Herstellung für globale Marken.',
        service3Title: 'Serienproduktion',
        service3Desc: 'Effiziente und großangelegte Produktion zur Erfüllung der Kundenbestellanforderungen.',
        service4Title: 'Maßgeschneiderte Entwicklung',
        service4Desc: 'Maßgeschneiderte Entwicklungsservices, um Ihre spezifischen Anforderungen zu erfüllen und einzigartige Produkte für Sie zu schaffen.',
        contactTitle: 'Kontaktieren Sie uns',
        contactDesc: 'Wenn Sie Fragen oder Vorschläge haben, zögern Sie nicht, uns zu kontaktieren. Wir werden Ihnen so bald wie möglich antworten.',
        contactInfoTitle: 'Kontaktinformationen',
        contactAddressTitle: 'Firmenanschrift',
        contactAddressDesc: 'Minghua Industrial Park, Ruhu Town, Huicheng District, Huizhou City, Guangdong Province, China',
        contactPhoneTitle: 'Kontakttelefon',
        contactEmailTitle: 'E-Mail',
        viewOnMap: 'Auf Karte anzeigen',
        footerAbout: 'Spitze bei der Innovation in Elektronikgeräten, bieten hochwertige Energielösungen für Unternehmen und Verbraucher weltweit.',
        Partnership:'Partnerschaft',
        footerCopyright: '@ 2025 Huizhou Minwe Technology Co., Ltd. Alle Rechte vorbehalten.'
    },
    fr: {
        companyName: 'Huizhou Minwe Electronic Technology',
        navHome: 'Accueil',
        navAbout: 'À propos de nous',
        navProducts: 'Produits',
        navServices: 'Services',
        navContact: 'Contactez-nous',
        heroTitle: 'Technologie Innovante',
        heroTitle2: 'Conduit l\'Avenir',
        heroContactBtn: 'Contactez-nous',
        heroLearnMore: 'En savoir plus',
        aboutTitle: 'À propos de nous',
        aboutDesc: 'Minwe adhère à l\'esprit d\'innovation, se concentrant sur la recherche, le développement et la production de produits électroniques de pointe, offrant des solutions intelligentes de haute qualité aux clients mondiaux.',
        aboutFeature1Title: 'Esprit d\'Innovation',
        aboutFeature1Desc: 'Nous favorisons une culture d\'exploration et d\'innovation continue. Notre équipe de R&D est toujours à la recherche de nouvelles technologies, tendances et idées. En tirant parti des dernières avancées en sciences des matériaux, en ingénierie électronique et en développement logiciel, nous sommes capables de lancer une série de produits et de solutions innovants qui établissent de nouvelles références dans l\'industrie.',
        aboutFeature2Title: 'Client d\'abord',
        aboutFeature2Desc: 'Chez Minwe Technology, nos clients sont au cœur de tout ce que nous faisons. Nous investissons beaucoup de temps et de ressources pour comprendre leurs besoins, points de douleur et aspirations. En maintenant des canaux de communication ouverts et en fournissant un support personnalisé, nous garantissons à chaque client une excellente expérience produit et service. Notre engagement envers la satisfaction client est inébranlable, et nous nous efforçons constamment de construire des relations à long terme basées sur la confiance et le bénéfice mutuel.',
        aboutFeature3Title: 'Recherche de la Perfection',
        aboutFeature3Desc: 'Nous croyons que l\'excellence n\'est pas une option mais une nécessité. Dans tous les aspects de notre entreprise, de la conception et du développement de produits à la fabrication et au service après-vente, nous recherchons la perfection. Notre équipe de contrôle qualité suit des normes strictes et effectue des inspections rigoureuses à chaque étape du processus de production. En prêtant attention aux moindres détails, nous garantissons que nos produits et services répondent aux exigences de qualité les plus élevées.',
        aboutFeature4Title: 'Vision Globale',
        aboutFeature4Desc: 'Bien que nous soyons ancrés dans notre communauté locale, nous avons les yeux rivés sur le marché mondial. Nous participons activement à des salons technologiques internationaux, collaborons avec des partenaires mondiaux et surveillons de près les tendances de l\'industrie dans le monde entier. Cette perspective mondiale nous permet d\'apporter le meilleur des deux mondes à nos clients, en combinant des perspectives locales avec une expertise internationale.',
        productsTitle: 'Nos produits',
        productsDesc: 'Explorez notre série innovante de produits électroniques pour apporter commodité et efficacité à votre vie et à votre travail.',
        product1Title: 'Batterie externe pour extérieur',
        product1Desc: 'Batterie externe de 40000mAh à ultra grande capacité, répond facilement aux besoins énergétiques de plusieurs appareils, protégeant votre vie numérique à tout moment et en tout lieu !',
        product2Title: 'Chargeur de batterie marine',
        product2Desc: 'Supporte plusieurs types de batteries, avec des fonctions d\'étanchéité, de protection contre les courts-circuits et de charge intelligente, c\'est une solution de charge idéale pour les navires et les équipements électriques.',
        product3Title: 'Booster de puissance multifonction',
        product3Desc: 'Intégrant des fonctions de démarrage d\'urgence, de pompe à air et de charge USB, il est adapté aux véhicules 12V avec un courant de démarrage de pointe de 1000A, capable de démarrer rapidement la plupart des véhicules.',
        productsViewAllBtn: 'Voir tous les produits',
        servicesTitle: 'Nos services',
        servicesDesc: 'En plus de produits de haute qualité, nous offrons également un support technique professionnel et une gamme de services.',
        service1Title: 'Support technique',
        service1Desc: 'Notre équipe technique professionnelle vous offre un support en ligne 7×24 pour résoudre les problèmes que vous rencontrez lors de l\'utilisation des produits.',
        service2Title: 'OEM',
        service2Desc: 'Fourniture de production OEM et de fabrication de conception originale pour les marques mondiales.',
        service3Title: 'Production en série',
        service3Desc: 'Production efficace et à grande échelle pour répondre aux exigences de commande des clients.',
        service4Title: 'Développement sur mesure',
        service4Desc: 'Services de développement sur mesure pour répondre à vos besoins spécifiques et créer des produits uniques pour vous.',
        contactTitle: 'Contactez-nous',
        contactDesc: 'Si vous avez des questions ou des suggestions, n\'hésitez pas à nous contacter, nous vous répondrons dès que possible.',
        contactInfoTitle: 'Informations de contact',
        contactAddressTitle: 'Adresse de l\'entreprise',
        contactAddressDesc: 'Minghua Industrial Park, Ruhu Town, Huicheng District, Huizhou City, Guangdong Province, China',
        contactPhoneTitle: 'Téléphone de contact',
        contactEmailTitle: 'E-mail',
        viewOnMap: 'Voir sur la carte',
        footerAbout: 'Leader de l\'innovation dans les appareils électroniques, offrant des solutions d\'alimentation de haute qualité pour les entreprises et les consommateurs du monde entier.',
        Partnership: 'Partenariat',
        footerCopyright: '@ 2025 Huizhou Minwe Technology Co., Ltd. Tous droits réservés.'
    }
};

function updateLanguage(language) {
    const elements = document.querySelectorAll('[data-lang-key]');
    console.log('Found ' + elements.length + ' elements with data-lang-key');
    elements.forEach((element) => {
        const key = element.getAttribute('data-lang-key');
        if (translations[language] && translations[language][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[language][key];
            } else {
                if (key === 'contactHours') {
                    // 对于 contactHours，使用 innerHTML 来解析 HTML 标签
                    element.innerHTML = translations[language][key];
                } else {
                    element.textContent = translations[language][key];
                }
            }
        } else {
            console.warn(`Translation key "${key}" not found for language "${language}"`);
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // 初始化页面语言为英文
    updateLanguage('en');

    // 获取语言选择框
    const languageSelector = document.getElementById('language-selector');

    // 监听语言选择框的变化
    if (languageSelector) {
        languageSelector.addEventListener('change', function () {
            const selectedLanguage = this.value;
            updateLanguage(selectedLanguage);
        });
    }
});