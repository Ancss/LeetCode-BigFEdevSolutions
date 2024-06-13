class TimeLimitedCache {
  private cache: Map<number, any> = new Map();
  constructor() {
    this.cache = new Map();
  }

  set(key: number, value: number, duration: number): boolean {
    if (this.get(key) !== -1) {
      this.cache.set(key, { value, duration: Date.now() + duration });
      return true;
    } else {
      this.cache.set(key, { value, duration: Date.now() + duration });
      return false;
    }
  }

  get(key: number): number {
    if (this.cache.has(key)) {
      if (Date.now() < this.cache.get(key)!.duration) {
        return this.cache.get(key)!.value;
      } else {
        this.cache.delete(key);
        return -1;
      }
    }
    return -1;
  }

  count(): number {
    this.cache.forEach((value, key) => {
      this.get(key);
    });
    return this.cache.size;
  }
}

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
