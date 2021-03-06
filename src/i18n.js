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
            "Do you agree with our terms and conditions?": "Do you agree with our terms and conditions?",
            "Please read our terms and conditions!": "Please read our terms and conditions!",
            "Send": "Send",
            "Success!": "Success!"
        }
    },
    mne: {
        translation: {
            "Registration Form": "Registraciona Forma",
            "First Name": "Ime",
            "Insert your first name": "Unesite Va??e ime",
            "Required": "Obavezno polje!",
            "First name must have at least 2 characters!": "Ime mo??e imati minimum 2 slova!",
            "First name can have max 25 characters!": "Ime mo??e imati maximum 25 slova!",
            "Last name must have at least 2 characters!": "Prezime mo??e imati minimum 2 slova!",
            "Last name can have max 25 characters!": "Prezime mo??e imati maximum 25 slova!",
            "Last Name": "Prezime",
            "Insert your last name": "Unesite Va??e prezime",
            "Next Step": "Slede??i korak",
            "E-mail": "E-mail",
            "Insert your email": "Unesite Va?? e-mail",
            "Wrong type of email!": "Pogre??an format e-mail-a!",
            "Username": "Korisni??ko ime",
            "Insert your username": "Unesite Va??e korisni??ko ime",
            "Username must have at least 4 characters!": "Korisni??ko ime mo??e imati minimum 4 slova!",
            "Username can have max 20 characters!": "Korisni??ko ime mo??e imati maximum 25 slova!",
            "Insert characters from a-z and numbers from 0-9 only!": "Unesite slova od a-z i brojeve od 0-9!",
            "Password": "Lozinka",
            "Insert your password": "Unesite Va??u lozinku",
            "Password must have at least 6 characters!": "Lozinka mo??e imati minimum 6 slova!",
            "Insert stronger password!": "Unesite sigurniju lozinku!",
            "Password Confirmation": "Potvrdite lozinku",
            "Insert your password again": "Poku??ajte ponovo!",
            "Password doesn't match!": "Lozinke se ne poklapaju!",
            "Do you agree with our terms and conditions?": "Sla??ete li se sa uslovima kori????enja",
            "Please read our terms and conditions!": "Molim Vas pro??itajte uslove kori????enja!",
            "Send": "Po??alji",
            "Success!": "Uspje??no poslati podaci!"
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
