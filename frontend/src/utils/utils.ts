export class LocalStorage {
  constructor() {}

  static setItem(key: string, item: string) {
    if (typeof window !== "undefined") {
      const prev = localStorage.getItem(key);
      if (prev === null) {
        localStorage.setItem(key, item);
      } else {
        const arr = prev.split("/");
        if (arr.length > 5) {
          arr.shift();
        }
        arr.push(item);
        localStorage.setItem(key, arr.join("/"));
      }
    }
  }

  static getItem(key: string) {
    if (typeof window !== "undefined") {
      return localStorage.getItem(key);
    }
    return null;
  }

  static removeItem(key: string) {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  }
}
