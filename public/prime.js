// JS Prime number checker
const isPrime = num => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false
  return num !== 1 && num !== 0
}

// Check numbers 0 - {primes}
const checkPrimes = num => {
  let count = 0
  for (let i = 0; i < num; i++) {
    if (isPrime(i)) count++
  }
  return count
}