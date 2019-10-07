# Social Networking Kata
This is an implementation of Social Networking Kata as describe [in their github page](https://github.com/xpeppers/social_networking_kata).

### To install
Just clone the repository and install packages with npm or yarn. For that, you'll need node.js (version 10 at least).
So to install, just run
```
yarn install
```

### Commands
Inside Kata, you can submit commands by command line. Supported commands are:
* **To post a message**: <username> -> <message>
* **To read a username timeline**: <username>
* **To follow a username**: <follower> follows <following>
* **To read a username's wall**: <username> wall
* **To quit**: bye
 
### Implementation
This is an inmemory implementation, so any time you quit, you'll lose the state.