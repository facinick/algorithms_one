function randomNumberBetween(min: number, max: number): number {
  // Ensure min <= max
  if (min > max) {
    throw new Error("Minimum value cannot be greater than maximum value.");
  }

  // Use Math.floor and Math.random to get a random integer between min (inclusive) and max (inclusive)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { randomNumberBetween };
