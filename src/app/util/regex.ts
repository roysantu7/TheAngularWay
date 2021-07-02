export const regExpressions: { [key: string] : RegExp } = {
    emailPattern: /^([a-z0-9]+((\.|'|-|)?))+[a-z0-9]+@([a-z0-9]+(\.|-|)?)+[a-z0-9]+\.([a-zA-Z]{2,5})$/i,
    passwordPattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    alphaNumeric: /^[a-z0-9]+$/i,
    alpha: /^[a-z]+$/i,
    alphaSpace: /^[a-z ]+$/i,
    numeric: /^[0-9]+$/i,
    addressPattern: /^[a-zA-Z0-9#&()_<>/, \\. -]*$/
}