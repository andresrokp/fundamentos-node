# NODEJS FUNDAMENTALS

Repo to practice on node using the gidelines of the platzi course: Fundamentos de Node.js

## Learning

### L4 - Monohilo: implicaciones
- setInterval(fun,t) is a function with 2 params that execute 'fun' each 't' miliseconds
- Set interval does not block the main execution thread
- the eventLoop (EvLp) gives the order to execute it, but continues its way with the next instructions meanwhile
- A function writen after a setInterval() will execute immediately after the EvLp touch the setinterval() and its result will prompt before the timeout of the first
- Single threaded implies that an exception in any operation breaks all the application
- It is MANDATORY to have a careful error handling

### L5 - Configurar las variables de entorno en Node.js

- I can acces env vars with process.env.VAR_NAME
- an env var get assigned from the run line in the OS terminal > 'MY_VAR_NAME={varValue} node file.js'
- It is a pretty Common practice to write the environment variable names in snake uppercase
- All important and secret values like passwords and tokens should be treat in this way or alike

### L6 - Herramientas para ser más felices: Nodemon y PM2

- Nodemon is a demon, or an utility that watches the functioning of programs to manage the restart of the execution on hot reload. It detects a code change (file save) and re-compile-excute . 
- Install with: ```npm install -g nodemon```
- Use with:
    nodemon path/to/file.js
- Works well on long runs like http server test. It is suited for development activities
- We have to kill it on porpuse ctrl+c
- commands
    - pm2 . production . full monitoring . breaks, logs
    - pm2 start {file} to initiate
    - pm2 monitor
    - pm2 status
    - pm2 logs
    - pm2 stop {id} or {path}
- i can retry a process as much i want
- on exceptions it restart automatically
- the logs get stored into ~/.pm2/logs/...

## Pending

- Package managing
- Async JS

## To research

- nvm
- Event Loop, message queue, call stack L4
- librería dotenv L5
- var de entornos con la powershell L5
- demons L6
- npm install -g xxxxx
- ```node --watch```