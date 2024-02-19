### Happy Chicken

How to run:
```
yarn dev
```

# Game Rules:
- we have a 10x10 grid 
- each grid will have 3 possible states: empty, chicken, egg
- if position is chicken, it is not clickable
- if position is egg, it can hatch into a chicken in 1 - 5 seconds, randomly.
- if position is empty, it is clickable and can be clicked to place an egg
- if all grids are chicken, we will display a message at the top: "Congratulations!"