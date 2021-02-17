export const primeAt = (index) => {
  if (index < 1 || !Number.isInteger(index)) {
    return 'invalid input'
  }
  const primes = [2, 3]
  let n = 5
  for (let i = 2; i <= index; i++) {
    while (!isPrime(n)) {
      n += 2
    }
    primes.push(n)
    n += 2
  }
  return primes[index - 1]
}

const isPrime = (number) => {
  let isPrime = true
  if (number === 1) {
    isPrime = false
    return isPrime
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false
      }
    }
    return isPrime
  }
}
