class LocalStorageService {
    get(key) {
        const result = localStorage.getItem(key);

        if (result) {
            return JSON.parse(result);
        }

        return null;
    }

    set(key, data) {
        localStorage.setItem(key, JSON.stringify(data))
    }
}

export const localStorageService = new LocalStorageService();