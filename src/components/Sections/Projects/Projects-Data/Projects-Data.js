
const imgs = {
    f3Offshore: require('../Projects-Images/f3_offshore.png').default,
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
        id: 0,
        websiteName: 'F3 Offshore Vessels Information System',
        websiteUrl: '',
        img: imgs.f3Offshore,
        technology: 'Material-UI, ReactJs, Redux, NodeJs, ExpressJs, PostgreSQL',
        description: `This project is still under development`,
        integration: 'Cloudinary',
        status: 'Under Development'
    },
    {
        id: 1,
        websiteName: 'Ecommerce Demo Shop',
        websiteUrl: 'https://demo-shop-by-eudin.netlify.app/',
        img: imgs.demoShop,
        technology: 'ReactJs, Redux, Scss, Firebase',
        description: 'Ecommerce website with firebase integration for user and password authentication and validation, stripe checkout payment integration test mode.',
        integration: 'Stripe',
        status: 'Completed'
    },
    {
        id: 2,
        websiteName: 'Corner2Corner UAE',
        websiteUrl: 'https://corner2corner.ae/',
        img: imgs.corner2corner,
        technology: 'WordPress, Elementor',
        description: 'Cleaning company website with whatsapp live chat support.',
        integration: 'Whatsapp Live Chat',
        status: 'Completed'
    },
    {
        id: 3,
        websiteName: 'Findway Nuvola',
        websiteUrl: 'https://findway.nuvola.co.il/',
        img: imgs.findwayNuvola,
        technology: 'WordPress, Elementor',
        description: 'Implementation of a single page website with custom design from figma for software company.',
        integration: '',
        status: 'Completed'
    },
    {
        id: 4,
        websiteName: 'Play A Maze',
        websiteUrl: 'https://plmaze.com/',
        img: imgs.plmaze,
        technology: 'WordPress, Elementor',
        description: 'Custom design single page website with mailchimp integration.',
        integration: 'Mailchimp Integration',
        status: 'Completed'
    },
    {
        id: 5,
        websiteName: 'Mittal Facility LLC',
        websiteUrl: 'https://www.mittalfacility.com/',
        img: imgs.mittalFacility,
        technology: 'WordPress',
        description: 'Facility management website with live chat support and dedicated contact forms for regular clients.',
        integration: 'Live Chat',
        status: 'Completed'
    },
    {
        id: 6,
        websiteName: 'Agatha Chic',
        websiteUrl: 'https://agathachic.com/',
        img: imgs.agathaChic,
        technology: 'WordPress, WooCommerce',
        description: 'Simple ecommerce website for fashion clothing for women. Payment gateway removed as the owner refer direct contact for orders.',
        integration: 'WhatsApp Live Chat',
        status: 'Completed'
    },
    {
        id: 7,
        websiteName: 'Mittal Contracting LLC',
        websiteUrl: 'https://www.mittalconstruction.com/',
        img: imgs.mittalContracting,
        technology: 'HTML, CSS, Bootstrap, JQuery',
        description: 'Static website for construction company.',
        integration: '',
        status: 'Completed'
    },
    {
        id: 8,
        websiteName: 'Bible Quick Search',
        websiteUrl: 'https://eudinson.github.io/quick-search-bible/',
        img: imgs.bibleQuickSearch,
        technology: 'HTML, CSS, Javascript, REST Api',
        description: 'Personal project. Simple web app for searching Bible passages. Single version only.',
        integration: '',
        status: 'Under Development'
    },
    {
        id: 9,
        websiteName: 'Bible Quiz Game',
        websiteUrl: 'https://eudinson.github.io/Bible-Quiz-Game/',
        img: imgs.bibleQuizGame,
        technology: 'C#.Net winforms, SQLite Database',
        description: 'Personal project. For Windows PC application only with installer ready. Bible quiz game for fun, testing, and learning. Trivias included.',
        integration: '',
        status: 'Completed'
    },
    {
        id: 10,
        websiteName: 'Single Face Detection App.',
        websiteUrl: 'https://awesome-face-detect-app.herokuapp.com/',
        img: imgs.faceDetectionApp,
        technology: 'ReactJs, PostgreSQL, NodeJs, ExpressJs, HTML, CSS',
        description: 'Personal project. Single face detection app with username and password registration just for fun.',
        integration: 'Clarifai API',
        status: 'Completed'
    }
]