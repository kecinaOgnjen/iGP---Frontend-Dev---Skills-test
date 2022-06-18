import React, {useState} from 'react';
import './registration-form.css';
import fieldsData from '../../sampleData.json';

function RegistrationForm(props) {
    const [firstNameValue, setFirstNameValue] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameValue, setLastNameValue] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [nextStepCheck, setNextStepCheck] = useState(true);

    const validateFirstName = () => {
        if ((firstNameValue.length + 1) === 0) {
            setFirstNameError("You must enter a first name!");
            setNextStepCheck(false);
        } else {
            if ((firstNameValue.length + 1) < fieldsData.fields[3].validators[0].parameters.targetLength) {
                setFirstNameError("First name must have at least 2 characters!");
                setNextStepCheck(false);
            } else if ((firstNameValue.length + 1) > fieldsData.fields[3].validators[1].parameters.targetLength) {
                setFirstNameError("First name can have max 25 characters!");
                setNextStepCheck(false);
            } else {
                setFirstNameError("");
                setNextStepCheck(true);
            }
        }
    }

    const validateLastName = () => {
        if ((lastNameValue.length + 1) === 0) {
            setLastNameError("You must enter a last name!");
            setNextStepCheck(false);
        } else {
            if ((lastNameValue.length + 1) < fieldsData.fields[4].validators[0].parameters.targetLength) {
                setLastNameError("Last name must have at least 2 characters!");
                setNextStepCheck(false);
            } else if ((lastNameValue.length + 1) > fieldsData.fields[4].validators[1].parameters.targetLength) {
                setLastNameError("Last name can have max 25 characters!");
                setNextStepCheck(false);
            } else {
                setLastNameError("");
                setNextStepCheck(true);
            }
        }
    }

    return (
        <div className={"registration-form-container"}>
            <div>
                <h1>Registration Form</h1>
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
                    <button disabled={!nextStepCheck}>Next Step</button>
                </div>
            </div>
        </div>
    );
}

export default RegistrationForm;
