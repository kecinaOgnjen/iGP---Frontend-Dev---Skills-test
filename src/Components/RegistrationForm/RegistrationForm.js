import React from 'react';
import './registration-form.css';
import fieldsData from '../../sampleData.json';

function RegistrationForm(props) {
    return (
        <div className={"registration-form-container"}>
            <div>
                <h1>Registration Form</h1>
                <div className={"first-name-container"}>
                    <legend>
                        <label htmlFor="first-name">{fieldsData.fields[3].name}</label>
                    </legend>
                    <input type="text" id={"first-name"} placeholder={"Insert your first name"}/>
                </div>
                <div className={"last-name-container"}>
                    <legend>
                        <label htmlFor="last-name">Last Name</label>
                    </legend>
                    <input type="text" id={"last-name"} placeholder={"Insert your last name"}/>
                </div>
                <div className={"next-step-button-container"}>
                    <button>Next Step</button>
                </div>
            </div>
        </div>
    );
}

export default RegistrationForm;
