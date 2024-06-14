# node-os

## Globals

- \_\_dirname and \_\_filename are known as globals in node

- we can see the directory name and its path by using \_\_dirname

- we can see filename along with its path by using \_\_filename

```js
console.log(__dirname);
console.log(__filename);
```

### OS

#### os.type()

- os.type() returns the operating system name (string type). Ex:'Linux' for linux and 'Darwin' for 'macOS'

```js
console.log(os.type());
```

#### os.version()

- os.version() returns a string identifying the kernel version

```js
console.log(os.version());
```

#### os.homedir()

- os.homedir() returns a string identifying the home directory of your system

```js
console.log(os.homedir());
```

#### os.uptime()

- os.uptime() returns the uptime of your system

- **uptime :** _Uptime of a system refers to the amount of time that a computer, server, or network has been running and operational without any interruptions._

```js
console.log(os.uptime());
```

#### os.machine()

- os.machine() returns the machine type such as _arm, arm64, x86_64_

```js
console.log(os.machine());
```

##### Note:

- **_There are many methods are there in os module to refer other methods in os modules click below 👇_**
- click here for official docs [node docs](https://nodejs.org/docs/latest/api/os.html)
