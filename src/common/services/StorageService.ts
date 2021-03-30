export default class StorageService {
    private storage = window.localStorage;

    constructor(private key: string) {
    }

    getData(): string | null {
        return this.storage.getItem(this.key);
    }

    setData(value: string): void {
        this.storage.setItem(this.key, value);
    }
}