import { Validators } from "@angular/forms"
import { FormStructure } from "../core/models/form-structure.model"
import { regExpressions } from "../util/regex"

export const signUpFormFields : FormStructure[] = [
    {
        id: 1,
        type: 'text',
        label: 'First Name',
        controlName: 'firstname',
        value: '',
        isRequired: true,
        maxlength: 25,
        pattern: regExpressions.alpha,
        validatorList: [Validators.required, Validators.pattern(regExpressions.alpha)],
        hint: null,
        errorMessage: 'Please enter your First Name',
        optionList: []
    },
    {
        id: 2,
        type: 'text',
        label: 'Last Name',
        controlName: 'lastname',
        value: '',
        isRequired: true,
        maxlength: 25,
        pattern: regExpressions.alpha,
        validatorList: [Validators.required, Validators.pattern(regExpressions.alpha)],
        hint: null,
        errorMessage: 'Please enter your Last Name',
        optionList: []
    },
    {
        id: 3,
        type: 'text',
        label: 'Email',
        controlName: 'email',
        value: '',
        isRequired: true,
        maxlength: 45,
        pattern: regExpressions.emailPattern,
        validatorList: [Validators.required, Validators.pattern(regExpressions.emailPattern)],
        hint: null,
        errorMessage: 'Please enter your Email',
        optionList: []
    },
    {
        id: 4,
        type: 'radio',
        label: 'Gender',
        controlName: 'gender',
        value: '',
        isRequired: true,
        maxlength: 25,
        pattern: null,
        validatorList: [Validators.required],
        hint: '',
        errorMessage: 'Please select a Gender',
        optionList: [
            {
                name: 'Male',
                value: 'm',
                isSelected: false
            },
            {
                name: 'Female',
                value: 'f',
                isSelected: false
            },
            {
                name: 'Others',
                value: 'o',
                isSelected: false
            },
        ]
    },
    {
        id: 5,
        type: 'password',
        label: 'Password',
        controlName: 'password',
        value: '',
        isRequired: true,
        maxlength: 45,
        pattern: regExpressions.passwordPattern,
        validatorList: [Validators.required, Validators.pattern(regExpressions.passwordPattern)],
        hint: null,
        errorMessage: 'Please enter a Password',
        optionList: []
    },
    {
        id: 6,
        type: 'password',
        label: 'Confirm Password',
        controlName: 'confirmPassword',
        value: '',
        isRequired: true,
        maxlength: 45,
        pattern: null,
        validatorList: [Validators.required, Validators.pattern(regExpressions.passwordPattern)],
        hint: null,
        errorMessage: 'Please confirm your Password',
        optionList: []
    },
]

// export const signUpFormGroup = {
//     title : 'Sign Up Form',
//     subtitle: '',
//     formGroupName: 'accountInfo',
//     data: signUpFormFields
// }

export const addressFormFields: FormStructure[] = [
    {
        id: 1,
        type: 'text',
        label: 'Address Line 1',
        controlName: 'address1',
        value: '',
        isRequired: true,
        maxlength: 25,
        pattern: regExpressions.addressPattern,
        hint: null,
        validatorList: [Validators.required, Validators.pattern(regExpressions.addressPattern)],
        errorMessage: 'Please enter your Address',
        optionList: []
    },
    {
        id: 2,
        type: 'text',
        label: 'Address Line 2',
        controlName: 'address2',
        value: '',
        isRequired: false,
        maxlength: 25,
        pattern: regExpressions.addressPattern,
        validatorList: [Validators.pattern(regExpressions.addressPattern)],
        hint: null,
        errorMessage: 'Please provide a correct address',
        optionList: []
    },
    {
        id: 3,
        type: 'text',
        label: 'City',
        controlName: 'city',
        value: '',
        isRequired: true,
        maxlength: 45,
        pattern: regExpressions.addressPattern,
        validatorList: [Validators.required, Validators.pattern(regExpressions.addressPattern)],
        hint: null,
        errorMessage: 'Please enter your City',
        optionList: []
    },
    {
        id: 4,
        type: 'select',
        label: 'State',
        controlName: 'state',
        value: '',
        isRequired: true,
        maxlength: 25,
        pattern: null,
        validatorList: [Validators.required],
        hint: '',
        errorMessage: 'Please select your State',
        optionList: [
            {
                name: 'Andhra Pradesh',
                value: 'ap',
                isSelected: false
            },
            {
                name: 'Delhi',
                value: 'dh',
                isSelected: false
            },
            {
                name: 'West Bengal',
                value: 'wb',
                isSelected: false
            },
        ]
    },
    {
        id: 5,
        type: 'text',
        label: 'Pincode',
        controlName: 'pincode',
        value: '',
        isRequired: true,
        maxlength: 6,
        pattern: regExpressions.numeric,
        validatorList: [Validators.required, Validators.pattern(regExpressions.numeric), Validators.maxLength(6)],
        hint: null,
        errorMessage: 'Please enter a valid Pincode',
        optionList: []
    },
    {
        id: 6,
        type: 'checkbox',
        label: 'I agree to the <a href="/">Terms and Conditions</a>',
        controlName: 'terms',
        value: '',
        isRequired: true,
        maxlength: 25,
        pattern: null,
        validatorList: [Validators.requiredTrue],
        hint: '',
        errorMessage: 'Please select the Terms and Conditions checkbox in order to proceed',
        optionList: []
    },
]

// export const addressFormGroup = {
//     title : 'Address Form',
//     subtitle: '',
//     formGroupName: 'addressInfo',
//     data: addressFormFields
// }

export const signUpStepsInfo = [
    {
        step: 1,
        name: 'accountInfo',
        data: signUpFormFields,
        isFirstStep: true,
        isFinalStep: false
    },
    {
        step: 2,
        name: 'addressInfo',
        data: addressFormFields,
        isFirstStep: false,
        isFinalStep: true
    },
]
