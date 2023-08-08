const contacts = [
    {
        id: 'email',
        type: 1, // 1 = link to contact, 2 = Just a text
        label: 'Or Email Me',
        link_title: 'Send message via mail',
        value: 'robertsonmorales23@gmail.com',
        redirect: 'mailto:robertsonmorales23@gmail.com?cc=trebormoralesson@gmail.com',
    },
    {
        id: 'call',
        type: 1, // 1 = link to contact, 2 = Just a text
        label: 'Or Call Me',
        link_title: 'Open and send a message to Whatsapp',
        value: '+63 9552808438',
        redirect: 'https://api.whatsapp.com/send?phone=639552808438',
    },
    {
        id: 'address',
        type: 2, // 1 = link to contact, 2 = Just a text
        label: `Or Let's Hang out!`,
        link_title: null,
        value: 'San Jose Del Monte, Bulacan, Philippines',
        redirect: null,
    }
];

export default contacts;