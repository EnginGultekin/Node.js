import nodemailer from 'nodemailer';

const getIndexPage = (req, res) => {
    console.log(req.session.userID);
    res.status(200).render('index', {
        page_name: 'index',
    });
};

const getAboutPage = (req, res) => {
    res.status(200).render('about', {
        page_name: 'about',
    });
};

const getRegisterPage = (req, res) => {
    res.status(200).render('register', {
        page_name: 'register',
    });
};

const getLoginPage = (req, res) => {
    res.status(200).render('login', {
        page_name: 'login',
    });
};

const getContactPage = (req, res) => {
    res.status(200).render('contact', {
        page_name: 'contact',
    });
};

const sendEmail = async (req, res) => {

    try {
        const outputMessage = `
        <h1> Message Detail </h1>
        <ul>
            <li>Name: ${req.body.name} </li>
            <li>Email: ${req.body.email} </li>
        <ul>
        <h1> Message </h1>
        <p>${req.body.message}</p>
        `
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                user: 'examplemail@gmail.com', // gmail account
                pass: 'password'  // gmail password
            }
        });

        // send mail with defined transport object
        const info = await transporter.sendMail({
            from: '"Smart EDU Contact Form 👻" <examplesender@gmail.com>', // sender address
            to: "exampleto@gmail.com", // list of receivers
            subject: "Smart EDU Contact Form New Message ✔", // Subject line
            html: outputMessage, // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        req.flash("success", "We Received your message succesfully")
        res.status(200).redirect('/contact')
    } catch (err) {
        req.flash("error", `Something happened: ERROR!`)
        res.status(400).redirect('/contact')
    }
};

export default {
    getIndexPage,
    getAboutPage,
    getRegisterPage,
    getLoginPage,
    getContactPage,
    sendEmail,
}