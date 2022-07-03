export function formToObject(form) {
    let formData = new FormData(form);
    
    let obj = {};
    
    let entries = formData.entries();
    for (let entry of entries) obj[entry[0]] = entry[1];
    
    return obj;
}


export function submithandler(handler) {
    return function (event) {
        event.preventDefault();
        handler(formToObject(event.target))
    }
}