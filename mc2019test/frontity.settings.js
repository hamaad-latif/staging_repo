const settings = {
    "name": "mc2019test",
    "state": {
        "frontity": {
            "url": "https://staging.moosaconsulting.com/MC-ACF/",
            "title": "MC-2020",
            // "description": "WordPress installation for Frontity development"
        }
    },
    "packages": [{
            "name": "frontity-chakra-theme",
            "state": {
                "theme": {
                    // The logo can be a text or an image url
                    logo: 'https://staging.moosaconsulting.com/MC_2019/wp-content/uploads/2019/08/logo-transparent-300x92-New.png',
                    // show background pattern
                    showBackgroundPattern: true,
                    // show social links
                    showSocialLinks: true,
                    // the top-level navigation labels and links
                    menu: [
                        ["Home", "/"],
                        ["Our Work", "/our-work/"],
                        ["Services", "/services/"],
                        ["Clients", "/clients/"],
                        ["Blog", "/blog/"],
                        ["About US", "/about-us/"],
                        ["Contact", "/contact/"],

                    ],
                    // the social links
                    socialLinks: [
                        ["pinterest", "#"],
                        ["facebook", "#"],
                        ["instagram", "#"],
                    ],
                    "featured": {
                        "showOnList": false,
                        "showOnPost": false
                    }
                }
            }
        },
        {
            "name": "@frontity/wp-source",
            "state": {
                "source": {
                    "api": "https://staging.moosaconsulting.com/MC-ACF/wp-json"
                }
            }
        },
        "@frontity/tiny-router",
        "@frontity/html2react",
        "frontity-contact-form-7",

    ]
};

export default settings;