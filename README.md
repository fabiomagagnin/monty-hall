# Monty Hall Problem
> The Monty Hall problem is a brain teaser, in the form of a probability puzzle, loosely based on the American television game show Let's Make a Deal and named after its original host, Monty Hall.

> Suppose you're on a game show, and you're given the choice of three doors: Behind one door is a car; behind the others, goats. You pick a door, say No. 1, and the host, who knows what's behind the doors, opens another door, say No. 3, which has a goat. He then says to you, "Do you want to pick door No. 2?"

In this case, what is the best option, keep with door number one or switch to number two?!

The intuitive answer is: Now I have a new game where the odds are 50%, so it does'nt matter!

The correct answer is: The best option is switch to door number 2, switching your probabily will be 66,6% while remain it will be 33,3%.

You can find the detailed explanation here, but I like to think this way:
# What is this code?
This code is a simulation to prove that best option is always switching to the other door.
It simulates the game one milion times and shows that always switching you would win on 66,66% of times.
# How to run?
Once you have Node JS, just run `node index.js`. You will see something like this:
```
--- Not switching the door ---
 runs: 1000000
 wins: 333413 (0.333413)
losts: 666587 (0.666587)

--- Switching the door ---
 runs: 1000000
 wins: 666074 (0.666074)
losts: 333926 (0.333926)
```
