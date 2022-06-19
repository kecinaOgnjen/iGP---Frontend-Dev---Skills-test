import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "Registration Form": "Registration Form",
            "First Name": "First Name",
            "Insert your first name": "Insert your first name",
            "Required": "Required!",
            "First name must have at least 2 characters!": "First name must have at least 2 characters!",
            "First name can have max 25 characters!": "First name can have max 25 characters!",
            "Last name must have at least 2 characters!": "Last name must have at least 2 characters!",
            "Last name can have max 25 characters!": "Last name can have max 25 characters!",
            "Last Name": "Last Name",
            "Insert your last name": "Insert your last name",
            "Next Step": "Next Step",
            "E-mail": "E-mail",
            "Insert your email": "Insert your email",
            "Wrong type of email!": "Wrong type of email!",
            "Username": "Username",
            "Insert your username": "Insert your username",
            "Username must have at least 4 characters!": "Username must have at least 4 characters!",
            "Username can have max 20 characters!": "Username can have max 20 characters!",
            "Insert characters from a-z and numbers from 0-9 only!": "Insert characters from a-z and numbers from 0-9 only!",
            "Password": "Password",
            "Insert your password": "Insert your password",
            "Password must have at least 6 characters!": "Password must have at least 6 characters!",
            "Insert stronger password!": "Insert stronger password!",
            "Password Confirmation": "Password Confirmation",
            "Insert your password again": "Insert your password again",
            "Password doesn't match!": "Password doesn't match!",
            "You agree with our terms and conditions?": "Do you agree with our terms and conditions?",
            "Please read our terms and conditions!": "Please read our terms and conditions!",
            "Send": "Send",
            "Success!": "Success!"
        }
    },
    mne: {
        translation: {
            "Registration Form": "Registraciona Forma",
            "First Name": "Ime",
            "Insert your first name": "Unesite Vaše ime",
            "Required": "Obavezno polje!",
            "First name must have at least 2 characters!": "Ime može imati minimum 2 slova!",
            "First name can have max 25 characters!": "Ime može imati maximum 25 slova!",
            "Last name must have at least 2 characters!": "Prezime može imati minimum 2 slova!",
            "Last name can have max 25 characters!": "Prezime može imati maximum 25 slova!",
            "Last Name": "Prezime",
            "Insert your last name": "Unesite Vaše prezime",
            "Next Step": "Sledeći korak",
            "E-mail": "E-mail",
            "Insert your email": "Unesite Vaš e-mail",
            "Wrong type of email!": "Pogrešan format e-mail-a!",
            "Username": "Korisničko ime",
            "Insert your username": "Unesite Vaše korisničko ime",
            "Username must have at least 4 characters!": "Korisničko ime može imati minimum 4 slova!",
            "Username can have max 20 characters!": "Korisničko ime može imati maximum 25 slova!",
            "Insert characters from a-z and numbers from 0-9 only!": "Unesite slova od a-z i brojeve od 0-9!",
            "Password": "Lozinka",
            "Insert your password": "Unesite Vašu lozinku",
            "Password must have at least 6 characters!": "Lozinka može imati minimum 6 slova!",
            "Insert stronger password!": "Unesite sigurniju lozinku!",
            "Password Confirmation": "Potvrdite lozinku",
            "Insert your password again": "Pokušajte ponovo!",
            "Password doesn't match!": "Lozinke se ne poklapaju!",
            "Do you agree with our terms and conditions?": "Slažete li se sa uslovima korišćenja",
            "Please read our terms and conditions!": "Molim Vas pročitajte uslove korišćenja!",
            "Send": "Pošalji",
            "Success!": "Uspješno poslati podaci!"
        }
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
