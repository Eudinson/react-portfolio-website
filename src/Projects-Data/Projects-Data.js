
const imgs = {
    demoShop: require('../Projects-Images/demo_shop.jpg').default,
    corner2corner: require('../Projects-Images/corner2corner.jpg').default,
    findwayNuvola: require('../Projects-Images/findway_nuvola.jpg').default,
    plmaze: require('../Projects-Images/playamaze.jpg').default,
    mittalFacility: require('../Projects-Images/mittal_facility.jpg').default,
    agathaChic: require('../Projects-Images/agatha_chic.jpg').default,
    mittalContracting: require('../Projects-Images/mittal_contracting.jpg').default,
    bibleQuickSearch: require('../Projects-Images/bible_quick_search.jpg').default,
    bibleQuizGame: require('../Projects-Images/bible_quiz_game.png').default,
    faceDetectionApp: require('../Projects-Images/face_detection_app.jpg').default
}


export const projectsData = [
    {
        id: 1,
        websiteName: 'Ecommerce Demo Shop',
        websiteUrl: 'https://demo-shop-by-eudin.netlify.app/',
        img: imgs.demoShop,
        technology: 'ReactJs, Redux, Scss, Firebase, Stripe Checkout Integration',
        description: 'Ecommerce website for demo purpose with firebase integration for user and password authentication and validation, stripe checkout payment integration test mode.'
    },
    {
        id: 2,
        websiteName: 'Corner2Corner UAE',
        websiteUrl: 'https://corner2corner.ae/',
        img: imgs.corner2corner,
        technology: 'WordPress, Elementor, Whatsapp Live Chat Integration',
        description: 'Cleaning company website with whatsapp live chat support.'
    },
    {
        id: 3,
        websiteName: 'Findway Nuvola',
        websiteUrl: 'https://findway.nuvola.co.il/',
        img: imgs.findwayNuvola,
        technology: 'WordPress, Elementor',
        description: 'Implementation of a single page website with custom design from figma for software company.'
    },
    {
        id: 4,
        websiteName: 'Play A Maze',
        websiteUrl: 'https://plmaze.com/',
        img: imgs.plmaze,
        technology: 'WordPress, Elementor, Mailchimp Integration',
        description: 'Custom design single page website with mailchimp integration.'
    },
    {
        id: 5,
        websiteName: 'Mittal Facility LLC',
        websiteUrl: 'https://www.mittalfacility.com/',
        img: imgs.mittalFacility,
        technology: 'WordPress, Live Chat Integration',
        description: 'Facility management website with live chat support and dedicated contact forms for regular clients.'
    },
    {
        id: 6,
        websiteName: 'Agatha Chic',
        websiteUrl: 'https://agathachic.com/',
        img: imgs.agathaChic,
        technology: 'WordPress, WooCommerce, WhatsApp Live Chat Integration',
        description: 'Simple ecommerce website for fashion clothing for women. Payment gateway removed as the owner refer direct contact for orders.'
    },
    {
        id: 7,
        websiteName: 'Mittal Contracting LLC',
        websiteUrl: 'https://www.mittalconstruction.com/',
        img: imgs.mittalContracting,
        technology: 'HTML, CSS, Bootstrap, JQuery',
        description: 'Static website for construction company.'
    },
    {
        id: 8,
        websiteName: 'Bible Quick Search',
        websiteUrl: 'https://eudinson.github.io/quick-search-bible/',
        img: imgs.bibleQuickSearch,
        technology: 'HTML, CSS, Javascript, REST Api',
        description: 'Simple web app for searching Bible passages. Single version only.'
    },
    {
        id: 9,
        websiteName: 'Bible Quiz Game',
        websiteUrl: 'https://eudinson.github.io/Bible-Quiz-Game/',
        img: imgs.bibleQuizGame,
        technology: 'C#.Net winforms, SQLite Database',
        description: 'For Windows PC application only with installer ready. Bible quiz game for fun, testing, and learning. Trivias included.'
    },
    {
        id: 10,
        websiteName: 'Single Face Detection App.',
        websiteUrl: 'https://awesome-face-detect-app.herokuapp.com/',
        img: imgs.faceDetectionApp,
        technology: 'ReactJs, PostgreSQL, Node & Express, RESTful API, Clarifai API, HTML, CSS',
        description: 'Single face detection app with username and password registration just for fun.'
    }
]