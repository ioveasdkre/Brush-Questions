const map = new Map<string, number>();

for (let i = 65; i <= 90; i++) {
  map.set(String.fromCharCode(i), i - 64);
}