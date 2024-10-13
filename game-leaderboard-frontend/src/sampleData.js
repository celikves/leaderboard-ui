const sampleData = Array.from({ length: 100 }, (v, i) => ({
  country: i % 2 === 0 ? 'USA' : 'Canada',
  username: `Player${i + 1}`,
  rank: i + 1,
  money: Math.floor(Math.random() * 10000),
  dailyDiff: Math.floor(Math.random() * 11) - 5 
}));

export default sampleData;
