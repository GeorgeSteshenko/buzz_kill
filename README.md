# Buzz Kill
JS one button short minigame
Link: https://georgesteshenko.github.io/buzz_kill/

## Objective:

Exsercise JS and create an application that performs the following tasks:

# Specification:

## Bees:

*There are three types of bees in this game:*

- *Queen Bee*
-- The Queen Bee has a lifespan of 100 Hit Points.
-- When the Queen Bee is hit, 8 Hit Points are deducted from her lifespan.
-- If/When the Queen Bee has run out of Hit Points, All remaining alive Bees automatically run out of hit points.
-- There is only 1 Queen Bee.

- *Worker Bee*
-- Worker Bees have a lifespan of 75 Hit Points.
-- When a Worker Bee is hit, 10 Hit Pointsare deducted from his lifespan.
-- There are 5 Worker Bees.

- *Drone Bee*
-- Drone Bees have a lifespan of 50 Hit Points.
-- When a Drone Bee is hit, 12 Hit Points are deducted from his lifespan.
-- There are 8 Drone Bees.

## Gameplay:

To play the game, there is a button that enables a user to “hit” a random bee. 
When the bees are all dead, the game resets itself with full life bees for another round.

_The application runs through a browser_

- amount of bees counted as: var swarm = $('.bee').length;
- random.math - randomly select a bee and add to it's class "hit" from swarm variable.
- helth power is a data attr with 100/75/50, every takes out certain HP's depends on the bee's class.
- bee are `<div class="bee bee-queen" />`, `<div class="bee bee-worker" />`, `<div class="bee bee-drone" />` 
when hit: `<div class="bee bee-queen hit" />`.
