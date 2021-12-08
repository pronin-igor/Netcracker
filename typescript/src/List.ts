export class List<T> {
    private _data: T;
    private _left: List<T> | null;
    private _right: List<T> | null;
    constructor(data: T) {
        this._data = data;
        this._left = null;
        this._right = null;
    }

    get left(): List<T> | null {
        return this._left;
    }

    set left(value: List<T> | null) {
        this._left = value;
    }

    get right(): List<T> | null {
        return this._right;
    }

    set right(value: List<T> | null) {
        this._right = value;
    }

    get data(): T {
        return this._data;
    }

    set data(value: T) {
        this._data = value;
    }
}
