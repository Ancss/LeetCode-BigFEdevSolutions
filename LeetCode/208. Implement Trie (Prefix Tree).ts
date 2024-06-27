const newTrieNode = () => ({
  children: {},
  isEnd: false,
});

class Trie {
  private trie: { [key: string]: any } = newTrieNode();
  constructor() {}

  insert(word: string): void {
    let current = this.trie;
    for (let char of word) {
      if (!current.children[char]) {
        current.children[char] = newTrieNode();
      }
      current = current.children[char];
    }
    current.isEnd = true;
  }

  search(word: string): boolean {
    let current = this.trie;
    for (let char of word) {
      if (!current.children[char]) return false;
      current = current.children[char];
    }
    return current.isEnd;
  }

  startsWith(prefix: string): boolean {
    let current = this.trie;
    for (let char of prefix) {
      if (!current.children[char]) return false;
      current = current.children[char];
    }
    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
