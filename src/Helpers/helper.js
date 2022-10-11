export const encodeData = (data) => {
    return btoa(data);
}

export const decodeData = (data) => {
    return atob(data);
}

export const localStorage = () => {
    const get = (key) =>{
        return window.localStorage.getItem(key);
    }

    const set = (key, value) => {
        return window.localStorage.setItem(key, value);
    }

    const clear = key => {
        return window.localStorage.removeItem(key);
    }

    const clearAll = () => {
        return window.localStorage.clear();
    }

    const setJson = (key, jsonData) => {
        return set(key, encodeData(JSON.stringify(jsonData)));
    }

    const getJson = (key) => {
        const value = get(key);

        return value ? JSON.parse(decodeData(value)) : null ;
    }

    return {
        get, set, clear, clearAll, getJson, setJson
    }
}
