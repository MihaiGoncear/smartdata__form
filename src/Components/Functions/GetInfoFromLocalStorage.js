export function GetInfoFromLocalStorage() {
    return JSON.parse(localStorage.getItem('inputInfo'))
}