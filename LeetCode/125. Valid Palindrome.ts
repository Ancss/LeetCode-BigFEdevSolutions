function isPalindrome(s: string): boolean {
  if (s.length === 0) return true;
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }
  return true;
}

const s = "A man, a plan, a canal: Panamas";
console.log(isPalindrome(s));
