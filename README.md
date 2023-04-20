# NODEJS FUNDAMENTALS

Repo to practice on node using the gidelines of the platzi course: Fundamentos de Node.js

## Learning

### Monohilo: implicaciones
- setinterval(fun,t) is a function with 2 params that execute 'fun' each 't' miliseconds
- Set interval does not block the main execution thread
- the eventLoop (EvLp) gives the order to execute it, but continues its way with the next instructions meanwhile
- A function writen after a setInterval() will execute immediately after the EvLp touch the setinterval() and its result will prompt before the timeout of the first
- Single threaded implies that an exception in any operation breaks all the application
- It is MANDATORY to have a careful error handling