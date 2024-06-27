const newTrieNode = () => ({
  children: {},
  isEnd: false,
});
class WordDictionary {
  private trie = newTrieNode();
  addWord(word: string): void {
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
    let node = this.trie;
    return this.__search(word, node);
  }

  __search(word: string, node: ReturnType<typeof newTrieNode>): boolean {
    if (word == "") return node.isEnd;
    if (word[0] == ".") {
      let result = false;
      for (const key of Object.keys(node.children)) {
        result = result || this.__search(word.substring(1), node.children[key]);
        if (result) {
          return result;
        }
      }
      return result;
    } else {
      if (node.children[word[0]]) {
        return this.__search(word.substring(1), node.children[word[0]]);
      } else {
        return false;
      }
    }
  }
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
export {};
