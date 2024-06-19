class LRUCache {
  private capacity: number;
  private cache: Map<number, number> = new Map();
  constructor(capacity: number) {
    this.capacity = capacity;
  }

  get(key: number): number {
    console.log(this.cache);
    if (this.cache.has(key)) {
      const n = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, n!);
      return n!;
    }
    return -1;
  }

  put(key: number, value: number): void {
    console.log(this.cache);
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      const cachedKey = this.cache.keys().next().value;
      this.cache.delete(cachedKey);
    }
    this.cache.set(key, value);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// const lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1); // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2); // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1); // return -1 (not found)
// lRUCache.get(3); // return 3
// lRUCache.get(4); // return 4

console.log("Start of LRUCache operations:");

const operations = [
  ["LRUCache", "get", "put", "get", "put", "put", "get", "get"],
  [[2], [2], [2, 6], [1], [1, 5], [1, 2], [1], [2]],
] as const;

const lRUCache = new LRUCache(operations[1][0][0] as number);
console.log("LRUCache object instantiated with capacity:", operations[1][0][0]);

for (let i = 1; i < operations[0].length; i++) {
  const operation = operations[0][i];
  const params = operations[1][i];
  let result;

  if (operation === "get") {
    result = lRUCache.get(params[0]);
    console.log(`get(${params[0]}) => ${result}`);
  } else if (operation === "put") {
    lRUCache.put(params[0], params[1]!);
    console.log(`put(${params[0]}, ${params[1]})`);
  }
}

console.log("End of LRUCache operations.");

type LRUCacheData = {
  key: number;
  value: number;
};

class LRUCache2 {
  capacity: number;
  list: DoublyLinkedList<LRUCacheData>;
  map: Map<number, DoublyLinkedListNode<LRUCacheData>>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.list = new DoublyLinkedList();
    this.map = new Map();
  }

  get(key: number): number {
    if (!this.map.has(key)) {
      return -1;
    } else {
      const node = this.map.get(key);
      this.list.remove(node!);
      this.list.addLast(node!);
      return node!.data.value;
    }
  }

  put(key: number, value: number): void {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node!.data.value = value;
      this.list.remove(node!);
      this.list.addLast(node!);
    } else {
      const node = new DoublyLinkedListNode({ key, value });
      this.map.set(key, node);
      this.list.addLast(node);
      if (this.list.size > this.capacity) {
        this.map.delete(this.list.head!.data.key);
        this.list.removeFirst();
      }
    }
  }
}

class DoublyLinkedList<T> {
  size: number;
  head: DoublyLinkedListNode<T> | null;
  tail: DoublyLinkedListNode<T> | null;

  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  addLast(node: DoublyLinkedListNode<T>) {
    if (this.size == 0) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail!.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
    this.size++;
  }

  removeFirst() {
    if (this.size == 0) {
      throw new Error("Cannot remove from empty linked list.");
    } else if (this.size == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head!.next;
      this.head!.prev = null;
    }
    this.size--;
  }

  removeLast() {
    if (this.size <= 1) {
      this.removeFirst();
    } else {
      this.tail = this.tail!.prev;
      this.tail!.next = null;
      this.size--;
    }
  }

  remove(node: DoublyLinkedListNode<T>) {
    if (node == this.head) {
      this.removeFirst();
    } else if (node == this.tail) {
      this.removeLast();
    } else {
      node.prev!.next = node.next;
      node.next!.prev = node.prev;
      this.size--;
    }
  }
}

class DoublyLinkedListNode<T> {
  data: T;
  next: DoublyLinkedListNode<T> | null;
  prev: DoublyLinkedListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
