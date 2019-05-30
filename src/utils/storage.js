function $storage(key, ...value) {
    if (!key) {
        throw new Error('缺少key值');
    }

    if (value.length > 0) {
        window.localStorage.setItem(key, value[0]);

        return window.localStorage.getItem(key);
    }

    return window.localStorage.getItem(key);

}

export default $storage;