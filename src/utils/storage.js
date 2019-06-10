function add(key, value) {
    window.localStorage.setItem(key, value);
}

function remove(key) {
    try {
        window.localStorage.removeItem(key);
    } catch (error) {
        return error;
    }
}

function get(key) {
    return window.localStorage.getItem(key);
}

export default { add, remove, get };