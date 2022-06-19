import React, {useEffect, useState} from 'react';
import './registration-form.css';
import fieldsData from '../../sampleData.json';
import {Dialog} from "@mui/material";
import {useTranslation} from "react-i18next";

function RegistrationForm() {
    const {t, i18n} = useTranslation();

    const [firstNameValue, setFirstNameValue] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [isValidFirstName, setIsValidFirstName] = useState(false);

    const [lastNameValue, setLastNameValue] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [isValidLastName, setIsValidLastName] = useState(false);

    const [emailValue, setEmailValue] = useState("");
    const [emailError, setEmailError] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(false);

    const [usernameValue, setUsernameValue] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [isValidUsername, setIsValidUsername] = useState(false);

    const [passwordValue, setPasswordValue] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isValidPassword, setIsValidPassword] = useState(false);

    const [passwordConfirmationValue, setPasswordConfirmationValue] = useState("");
    const [passwordConfirmationError, setPasswordConfirmationError] = useState("");
    const [isValidPasswordConfirmation, setIsValidPasswordConfirmation] = useState(false);

    const [isTermsChecked, setIsTermsChecked] = useState(false);
    const [termsAndConditionsError, setTermsAndConditionsError] = useState("");

    const [changeForm, setChangeForm] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [isUKLanguageVisible, setIsUKLanguageVisible] = useState(false);

    const validateFirstName = () => {
        if ((firstNameValue.length) === 0) {
            let lang = t('Required');
            setFirstNameError(lang);
            setIsValidFirstName(false);
        } else {
            if ((firstNameValue.length) < fieldsData.fields[3].validators[0].parameters.targetLength) {
                let lang = t('First name must have at least 2 characters!');
                setFirstNameError(lang);
                setIsValidFirstName(false);
            } else if ((firstNameValue.length) > fieldsData.fields[3].validators[1].parameters.targetLength) {
                let lang = t('First name can have max 25 characters!');
                setFirstNameError(lang);
                setIsValidFirstName(false);
            } else {
                setFirstNameError("");
                setIsValidFirstName(true);
            }
        }
    };

    const validateLastName = () => {
        if ((lastNameValue.length) === 0) {
            let lang = t('Required');
            setLastNameError(lang);
            setIsValidLastName(false);
        } else {
            if ((lastNameValue.length) < fieldsData.fields[4].validators[0].parameters.targetLength) {
                let lang = t('Last name must have at least 2 characters!');
                setLastNameError(lang);
                setIsValidLastName(false);
            } else if ((lastNameValue.length) > fieldsData.fields[4].validators[1].parameters.targetLength) {
                let lang = t('Last name can have max 25 characters!');
                setLastNameError(lang);
                setIsValidLastName(false);
            } else {
                setLastNameError("");
                setIsValidLastName(true);
            }
        }
    };

    const validateEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if ((emailValue.length) === 0) {
            let lang = t('Required');
            setEmailError(lang);
            setIsValidEmail(false);
        } else {
            if (regex.test(emailValue)) {
                setEmailError("");
                setIsValidEmail(true);
            } else {
                let lang = t('Wrong type of email!');
                setEmailError(lang);
                setIsValidEmail(false);
            }
        }
    };

    const validateUsername = () => {
        const regex = /^[a-z0-9\-\_]+$/;
        if ((usernameValue.length) === 0) {
            let lang = t('Required');
            setUsernameError(lang);
            setIsValidUsername(false);
        } else {
            if ((usernameValue.length) < fieldsData.fields[2].validators[0].parameters.targetLength) {
                let lang = t('Username must have at least 4 characters!');
                setUsernameError(lang);
                setIsValidUsername(false);
            } else if ((usernameValue.length) > fieldsData.fields[2].validators[1].parameters.targetLength) {
                let lang = t('Username can have max 20 characters!');
                setUsernameError(lang);
                setIsValidUsername(false);
            } else if (!regex.test(usernameValue)) {
                let lang = t('Insert characters from a-z and numbers from 0-9 only!');
                setUsernameError(lang);
                setIsValidUsername(false);
            } else {
                setUsernameError("");
                setIsValidUsername(true);
            }
        }
    };

    const validatePassword = () => {
        const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if ((passwordValue.length) === 0) {
            let lang = t('Required');
            setPasswordError(lang);
            setIsValidPassword(false);
        } else {
            if ((passwordValue.length) < fieldsData.fields[8].validators[0].parameters.targetLength) {
                let lang = t('Password must have at least 6 characters!');
                setPasswordError(lang);
                setIsValidPassword(false);
            } else if (!regex.test(passwordValue)) {
                let lang = t('Insert stronger password!');
                setPasswordError(lang);
                setIsValidPassword(false);
            } else {
                setPasswordError("");
                setIsValidPassword(true);
            }
        }
    };

    const validatePasswordConfirmation = () => {
        if ((passwordConfirmationValue.length) === 0) {
            let lang = t('Required');
            setPasswordConfirmationError(lang);
            setIsValidPasswordConfirmation(false);
        } else {
            if (passwordConfirmationValue !== passwordValue) {
                let lang = t("Password doesn't match!");
                setPasswordConfirmationError(lang);
                setIsValidPasswordConfirmation(false);
            } else {
                setPasswordConfirmationError("");
                setIsValidPasswordConfirmation(true);
            }
        }
    };

    const validateTermsAndConditions = () => {
        if (!isTermsChecked) {
            let lang = t('Please read our terms and conditions!');
            setTermsAndConditionsError(lang);
        } else {
            setTermsAndConditionsError("");
        }
    }

    const changeNextStepForm = () => {
        if (isValidFirstName && isValidLastName) {
            setChangeForm(true);
        }
    };

    const sendData = () => {
        setIsOpenModal(true);
    }

    const handleClose = () => {
        setIsOpenModal(false)
        setFirstNameValue("");
        setLastNameValue("");
        setEmailValue("");
        setUsernameValue("");
        setPasswordValue("");
        setPasswordConfirmationValue("");
        setIsTermsChecked(false);
        setChangeForm(false);
    }

    const handleLanguageClick = () => {
        if (!isUKLanguageVisible) {
            i18n.changeLanguage('mne');
            setIsUKLanguageVisible(true);
            setFirstNameError("");
            setLastNameError("");
            setEmailError("");
            setUsernameError("");
            setPasswordError("");
            setPasswordConfirmationError("");
            setTermsAndConditionsError("");
        } else {
            i18n.changeLanguage('en');
            setIsUKLanguageVisible(false);
            setFirstNameError("");
            setLastNameError("");
            setEmailError("");
            setUsernameError("");
            setPasswordError("");
            setPasswordConfirmationError("");
            setTermsAndConditionsError("");
        }
    }

    useEffect(() => {
        validateFirstName();
    }, [firstNameValue]);

    useEffect(() => {
        validateLastName();
    }, [lastNameValue]);

    useEffect(() => {
        validateEmail();
    }, [emailValue]);

    useEffect(() => {
        validateUsername();
    }, [usernameValue]);

    useEffect(() => {
        validatePasswordConfirmation();
        validatePassword();
    }, [passwordConfirmationValue, passwordValue]);

    useEffect(() => {
        validateTermsAndConditions();
    }, [isTermsChecked]);

    return (
        <>
            <Dialog
                open={isOpenModal}
                onClose={() => handleClose()}
            >
                <h2>{t('Success!')}</h2>
            </Dialog>
            <div className={"registration-form-container"}>
                <div>
                    <span
                        onClick={() => {
                            handleLanguageClick();
                        }}
                        className={"flag"}
                    >
                        {isUKLanguageVisible ? (
                            <img src="./images/uk-flag.png" alt=""/>
                        ) : (
                            <img src="./images/mne-flag.png" alt=""/>
                        )}
                    </span>
                    <h1>{t('Registration Form')}</h1>
                    {!changeForm ?
                        <>
                            <div className={"first-name-container"}>
                                <legend>
                                    <label htmlFor="first-name">{t('First Name')}</label>
                                </legend>
                                <input
                                    type="text"
                                    id={"first-name"}
                                    placeholder={t('Insert your first name')}
                                    value={firstNameValue}
                                    onChange={(e) => {
                                        setFirstNameValue(e.target.value);
                                        validateFirstName();
                                    }}
                                    className={firstNameError !== "" ? "first-name-error" : "first-name"}
                                />
                                <p className={"error"}>{firstNameError}</p>
                            </div>
                            <div className={"last-name-container"}>
                                <legend>
                                    <label htmlFor="last-name">{t('Last Name')}</label>
                                </legend>
                                <input
                                    type="text"
                                    id={"last-name"}
                                    placeholder={t('Insert your last name')}
                                    value={lastNameValue}
                                    onChange={(e) => {
                                        setLastNameValue(e.target.value);
                                        validateLastName();
                                    }}
                                    className={lastNameError !== "" ? "last-name-error" : "last-name"}
                                />
                                <p className={"error"}>{lastNameError}</p>
                            </div>
                            <div className={"next-step-button-container"}>
                                <button
                                    disabled={!isValidFirstName || !isValidLastName}
                                    onClick={() => {
                                        changeNextStepForm();
                                    }}
                                >
                                    {t('Next Step')}
                                </button>
                            </div>
                        </>
                        : <>
                            <div className={"email-container"}>
                                <legend>
                                    <label htmlFor="email"> {t('E-mail')}</label>
                                </legend>
                                <input
                                    type="text"
                                    id={"email"}
                                    placeholder={t('Insert your email')}
                                    value={emailValue}
                                    onChange={(e) => {
                                        setEmailValue(e.target.value);
                                        validateEmail();
                                    }}
                                    className={emailError !== "" ? "email-error" : "email"}
                                />
                                <p className={"error"}>{emailError}</p>
                            </div>
                            <div className={"username-container"}>
                                <legend>
                                    <label htmlFor="username">{t('Username')}</label>
                                </legend>
                                <input
                                    type="text"
                                    id={"username"}
                                    placeholder={t('Insert your username')}
                                    value={usernameValue}
                                    onChange={(e) => {
                                        setUsernameValue(e.target.value);
                                        validateUsername();
                                    }}
                                    className={usernameError !== "" ? "username-error" : "username"}
                                />
                                <p className={"error"}>{usernameError}</p>
                            </div>
                            <div className={"password-container"}>
                                <legend>
                                    <label htmlFor="password">{t('Password')}</label>
                                </legend>
                                <input
                                    type="password"
                                    id={"password"}
                                    placeholder={t('Insert your password')}
                                    value={passwordValue}
                                    onChange={(e) => {
                                        setPasswordValue(e.target.value);
                                        validatePassword();
                                    }}
                                    className={passwordError !== "" ? "password-error" : "password"}
                                />
                                <p className={"error"}>{passwordError}</p>
                            </div>
                            <div className={"password-confirmation-container"}>
                                <legend>
                                    <label htmlFor="password-confirmation">{t('Password Confirmation')}</label>
                                </legend>
                                <input
                                    type="password"
                                    id={"password-confirmation"}
                                    placeholder={t('Insert your password again')}
                                    value={passwordConfirmationValue}
                                    onChange={(e) => {
                                        setPasswordConfirmationValue(e.target.value)
                                    }}
                                    className={passwordConfirmationError !== "" ? "password-confirmation-error" : "password-confirmation"}
                                />
                                <p className={"error"}>{passwordConfirmationError}</p>
                            </div>
                            <div className={"terms-and-conditions-container"}>
                            <span>
                                <label
                                    htmlFor="terms-and-conditions">{t('You agree with our terms and conditions?')}</label>
                            </span>
                                <input
                                    type="checkbox"
                                    id={"terms-and-conditions"}
                                    onClick={(e) => {
                                        setIsTermsChecked(!isTermsChecked)
                                    }}
                                />
                                <p className={"error"}>{termsAndConditionsError}</p>
                            </div>
                            <div className={"send-button-container"}>
                                <button
                                    disabled={(isTermsChecked === false || (!isValidUsername || !isValidEmail || !isValidPassword || !isValidPasswordConfirmation || !isValidPasswordConfirmation))}
                                    onClick={() => {
                                        sendData();
                                    }}
                                >
                                    {t('Send')}
                                </button>
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default RegistrationForm;
