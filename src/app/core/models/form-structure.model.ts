import { ValidatorFn } from "@angular/forms";

export interface FormStructure {
    id: number;
    type: string;
    label: string;
    controlName: string;
    value: string | number | boolean;
    isRequired: boolean;
    pattern: RegExp;
    validatorList: ValidatorFn[];
    errorMessage: string;
    placeholder?: string;
    isDisabled?: boolean;
    maxlength?: number;
    minlength?: number;
    hint?: string;
    optionList?: OptionalFieldStructure[];
    childFormDetails?: FormStructure[];
}

export interface OptionalFieldStructure {
    name: string;
    value: string | number;
    isSelected: boolean;
}

export interface StepFormStructure {
    step: number;
    name: string;
    data: FormStructure[];
    isFirstStep: boolean;
    isFinalStep:boolean
}