export {}; // робить файл модулем

declare global {
    interface Array<T> {
        customFilter(callback: (value: T) => boolean): T[];
    }

    interface Array<T> {
        forEachCustom(callback: (value: T) => void): void;
    }

    interface Array<T> {
        mapCustom<U>(callback: (value: T) => U): U[];
    }
}

