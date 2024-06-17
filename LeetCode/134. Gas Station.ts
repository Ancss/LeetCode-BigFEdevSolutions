// function canCompleteCircuit(gas: number[], cost: number[]): number {
//   for (let k = 0; k < gas.length; k++) {
//     // find the starting point where they can left over gas
//     const startPoint = k;
//     let j = 0;
//     let i = startPoint;
//     let tank = 0;
//     console.log("k -------------- ", k);
//     // while loop to check if we can complete the circuit
//     while (j < gas.length) {
//       tank = gas[i] + tank - cost[i];
//       console.log("tank", tank);
//       if (tank < 0) break;
//       i++;
//       i = i % gas.length;
//       console.log("i", i);
//       j++;
//       // console.log(i, j, tank, startPoint);
//     }
//     if (tank >= 0) return startPoint;
//   }
//   return -1;
// }

function canCompleteCircuit(gas: number[], cost: number[]): number {
  let total = 0;
  let tank = 0;
  let ans = 0;
  for (let i = 0; i < gas.length; i++) {
    tank = tank + gas[i] - cost[i];
    total = total + gas[i] - cost[i];
    // if tank is 0 or negative, we can't reach the next station
    // try next station as starting point
    if (tank < 0) {
      tank = 0;
      ans = i + 1;
    }
  }
  // if all stations are visited and total is greater than or equal to 0
  // it is mean at some point we have visited all stations and we have enough gas to reach the next station
  return total >= 0 ? ans : -1;
}

console.log(canCompleteCircuit([5, 1, 2, 3, 4], [4, 4, 1, 5, 1]));
