# Challenge 4: Custom Random Number Generator in C++

This is a solution for Challenge 4 in the **Global Hack Week Beginner** series, where I created a custom random number generator (RNG) using a Linear Congruential Generator (LCG) method in C++.

## About the Challenge

The task was to create a random number generator using our own method in C++. I used the **Linear Congruential Generator (LCG)** to generate pseudo-random numbers. The random number generator was seeded with the current time (`time(0)`) to ensure randomness across different runs of the program.

## Approach

The random number generation was implemented using the following formula:

\[
X\_{n+1} = (a \times X_n + c) \mod m
\]

Where:

- `a = 1103515245`
- `c = 12345`
- `m = 2^{31} - 1` (Maximum value for a 32-bit signed integer)

### Steps Taken:

1. Implemented the LCG formula to generate random numbers.
2. Used `time(0)` to seed the random number generator.
3. Scaled the generated numbers to a user-defined range.
4. Displayed 10 random numbers as examples.
