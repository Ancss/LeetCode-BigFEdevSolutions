// There is a pile of n (n > 0) stones.

// Player A and Player B take turns to pick 1 or 2 stones from the pile. A starts first.

// Who picks the last stone loses the game.

// Now here is the question, is there a winning strategy for A or B ? If so, returns the player name. If there is none, return null.

canWinStonePicking(1)
// 'B'

canWinStonePicking(2)
// 'A'

canWinStonePicking(3)
// 'A'

canWinStonePicking(4)
// 'B'

function canWinStonePicking(n: number): 'A' | 'B' | null {
  // your code here
  if(n===0){
    return null
  }
  return n%3===1?'B':'A'
}
