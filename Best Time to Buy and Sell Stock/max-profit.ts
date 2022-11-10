// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// [7,1,5,3,6,4,0,100]
// [7,100,1,5,3,6,4,0]

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

// O(n)
function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let buy = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
      continue;
    }
    maxProfit = Math.max(prices[i] - buy, maxProfit);
  }
  return maxProfit;
}

// O(n)
function maxProfitOld(prices: number[]): number {
  const sellBuys: [number, number][] = [];
  let buy = prices[0];
  let sell = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < buy) {
      sellBuys.push([sell, buy]);
      sell = buy = prices[i];
      continue;
    }
    if (prices[i] > sell) {
      sell = prices[i];
    }
  }

  let maxProfit = sell - buy;
  for (let sellBuy of sellBuys)
    maxProfit = Math.max(maxProfit, sellBuy[0] - sellBuy[1]);
  return maxProfit;
}
