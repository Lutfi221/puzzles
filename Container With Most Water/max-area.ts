function maxArea(height: number[]): number {
  let a = 0;
  let b = height.length - 1;
  let water = 0;

  while (a < b) {
    water = Math.max(water, (b - a) * Math.min(height[a], height[b]));
    if (height[a] < height[b]) a++;
    else b--;
  }

  return water;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
