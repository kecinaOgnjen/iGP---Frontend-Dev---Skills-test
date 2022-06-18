import React, {useState} from 'react';
import './registration-form.css';
import fieldsData from '../../sampleData.json';

function RegistrationForm(props) {
    const [firstNameValue, setFirstNameValue] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [isValidFirstName, setIsValidFirstName] = useState(false);

    const [lastNameValue, setLastNameValue] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [isValidLastName, setIsValidLastName] = useState(false);

    const [emailValue, setEmailValue] = useState("");
    const [emailError, setEmailError] = useState("");
    const [isValidEmail, setIsValidEmail] = useState(false);

    const [nextStepCheck, setNextStepCheck] = useState(true);
    const [changeForm, setChangeForm] = useState(false);

    const validateFirstName = () => {
        if ((firstNameValue.length + 1) === 0) {
            setFirstNameError("You must enter a first name!");
            setNextStepCheck(false);
            setIsValidFirstName(false);
        } else {
            if ((firstNameValue.length + 1) < fieldsData.fields[3].validators[0].parameters.targetLength) {
                setFirstNameError("First name must have at least 2 characters!");
                setNextStepCheck(false);
                setIsValidFirstName(false);
            } else if ((firstNameValue.length + 1) > fieldsData.fields[3].validators[1].parameters.targetLength) {
                setFirstNameError("First name can have max 25 characters!");
                setNextStepCheck(false);
                setIsValidFirstName(false);
            } else {
                setFirstNameError("");
                setNextStepCheck(true);
                setIsValidFirstName(true);
            }
        }
    }

    const validateLastName = () => {
        if ((lastNameValue.length + 1) === 0) {
            setLastNameError("You must enter a last name!");
            setNextStepCheck(false);
            setIsValidLastName(false);
        } else {
            if ((lastNameValue.length + 1) < fieldsData.fields[4].validators[0].parameters.targetLength) {
                setLastNameError("Last name must have at least 2 characters!");
                setNextStepCheck(false);
                setIsValidLastName(false);
            } else if ((lastNameValue.length + 1) > fieldsData.fields[4].validators[1].parameters.targetLength) {
                setLastNameError("Last name can have max 25 characters!");
                setNextStepCheck(false);
                setIsValidLastName(false);
            } else {
                setLastNameError("");
                setNextStepCheck(true);
                setIsValidLastName(true);
            }
        }
    }

    const changeFormInputs = () => {
        if (isValidFirstName && isValidLastName) {
            setChangeForm(true);
        }
    }

    const validateEmail = () => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if ((emailValue.length + 1) === 0) {
            setEmailError("You must enter an email!");
            setNextStepCheck(false);
            setIsValidEmail(false);
        } else {
            if (regex.test(emailValue)) {
                setEmailError("");
                setNextStepCheck(true);
                setIsValidEmail(true);
            }else {
                setEmailError("Wrong type of email!");
                setNextStepCheck(false);
                setIsValidEmail(false);
            }
        }
    }

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
                                disabled={!nextStepCheck}
                                onClick={() => {
                                    changeFormInputs();
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
                    </>
                }
            </div>
        </div>
    );
}

export default RegistrationForm;
