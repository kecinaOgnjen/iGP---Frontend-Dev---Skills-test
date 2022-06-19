import React, {useEffect, useState} from 'react';
import './registration-form.css';
import fieldsData from '../../sampleData.json';

function RegistrationForm() {
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

    const validateFirstName = () => {
        if ((firstNameValue.length) === 0) {
            setFirstNameError("Required!");
            setIsValidFirstName(false);
        } else {
            if ((firstNameValue.length) < fieldsData.fields[3].validators[0].parameters.targetLength) {
                setFirstNameError("First name must have at least 2 characters!");
                setIsValidFirstName(false);
            } else if ((firstNameValue.length) > fieldsData.fields[3].validators[1].parameters.targetLength) {
                setFirstNameError("First name can have max 25 characters!");
                setIsValidFirstName(false);
            } else {
                setFirstNameError("");
                setIsValidFirstName(true);
            }
        }
    };

    const validateLastName = () => {
        if ((lastNameValue.length) === 0) {
            setLastNameError("Required!");
            setIsValidLastName(false);
        } else {
            if ((lastNameValue.length) < fieldsData.fields[4].validators[0].parameters.targetLength) {
                setLastNameError("Last name must have at least 2 characters!");
                setIsValidLastName(false);
            } else if ((lastNameValue.length) > fieldsData.fields[4].validators[1].parameters.targetLength) {
                setLastNameError("Last name can have max 25 characters!");
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
            setEmailError("Required!");
            setIsValidEmail(false);
        } else {
            if (regex.test(emailValue)) {
                setEmailError("");
                setIsValidEmail(true);
            } else {
                setEmailError("Wrong type of email!");
                setIsValidEmail(false);
            }
        }
    };

    const validateUsername = () => {
        const regex = /^[a-z0-9\-\_]+$/;
        if ((usernameValue.length) === 0) {
            setUsernameError("Required!");
            setIsValidUsername(false);
        } else {
            if ((usernameValue.length) < fieldsData.fields[2].validators[0].parameters.targetLength) {
                setUsernameError("Username must have at least 4 characters!");
                setIsValidUsername(false);
            } else if ((usernameValue.length) > fieldsData.fields[2].validators[1].parameters.targetLength) {
                setUsernameError("Username can have max 20 characters!");
                setIsValidUsername(false);
            } else if (!regex.test(usernameValue)) {
                setUsernameError("Insert characters from a-z and numbers from 0-9 only!");
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
            setPasswordError("Required!");
            setIsValidPassword(false);
        } else {
            if ((passwordValue.length) < fieldsData.fields[8].validators[0].parameters.targetLength) {
                setPasswordError("Password must have at least 6 characters!");
                setIsValidPassword(false);
            } else if (!regex.test(passwordValue)) {
                setPasswordError("Insert stronger password!");
                setIsValidPassword(false);
            } else {
                setPasswordError("");
                setIsValidPassword(true);
            }
        }
    };

    const validatePasswordConfirmation = () => {
        if ((passwordConfirmationValue.length) === 0) {
            setPasswordConfirmationError("Required!");
            setIsValidPasswordConfirmation(false);
        } else {
            if (passwordConfirmationValue !== passwordValue) {
                setPasswordConfirmationError("Password doesn't match!");
                setIsValidPasswordConfirmation(false);
            } else {
                setPasswordConfirmationError("");
                setIsValidPasswordConfirmation(true);
            }
        }
    };

    const validateTermsAndConditions = () => {
        if (!isTermsChecked) {
            setTermsAndConditionsError("Please read our terms and conditions!");
        } else {
            setTermsAndConditionsError("");
        }
    }

    const changeNextStepForm = () => {
        if (isValidFirstName && isValidLastName) {
            setChangeForm(true);
        }
    };

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
        <div className={"registration-form-container"}>
            <div>
                <h1>Registration Form</h1>
                {!changeForm ?
                    <>
                        <div className={"first-name-container"}>
                            <legend>
                                <label htmlFor="first-name">{fieldsData.fields[3].name}</label>
                            </legend>
                            <input
                                type="text"
                                id={"first-name"}
                                placeholder={"Insert your first name"}
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
                                <label htmlFor="last-name">Last Name</label>
                            </legend>
                            <input
                                type="text"
                                id={"last-name"}
                                placeholder={"Insert your last name"}
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
                                Next Step
                            </button>
                        </div>
                    </>
                    : <>
                        <div className={"email-container"}>
                            <legend>
                                <label htmlFor="email">{fieldsData.fields[5].name}</label>
                            </legend>
                            <input
                                type="text"
                                id={"email"}
                                placeholder={"Insert your email"}
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
                                <label htmlFor="username">{fieldsData.fields[2].name}</label>
                            </legend>
                            <input
                                type="text"
                                id={"username"}
                                placeholder={"Insert your username"}
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
                                <label htmlFor="password">{fieldsData.fields[8].name}</label>
                            </legend>
                            <input
                                type="password"
                                id={"password"}
                                placeholder={"Insert your password"}
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
                                <label htmlFor="password-confirmation">{fieldsData.fields[9].name}</label>
                            </legend>
                            <input
                                type="password"
                                id={"password-confirmation"}
                                placeholder={"Insert your password again"}
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
                                <label htmlFor="terms-and-conditions">You agree with our terms and conditions?</label>
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
                                // onClick={() => {
                                //     changeFormInputs();
                                // }}
                            >
                                Send
                            </button>
                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default RegistrationForm;
