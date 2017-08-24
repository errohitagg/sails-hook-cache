# sails-hook-cache (In Development)
A configurable cache hook for SailsJS supporting various cache engines

## Note
This is a work in-progress. Please don't use it on production servers.

## Install
```
npm install sails-hook-cache
```

## Configuration

By default the hook is disabled. To enable the hook, create a file `config/cache.js` with the following configuration:

```
module.exports.cache = {
	enabled: true,
	adapter: "file",
	path: <path where the keys will be stored>
};
```

## Description

All functions can be accessed as `sails.cache.<function>(<params>)`. Following function are available:

 - `get(<key>)`
 - `set(<key>, <value>)`
 - `check(<key>)`
 - `unset(<key>)`


## Author
**Rohit Aggarwal**

[Gmail](mailto:er.rohitaggarwal1989@gmail.com) | 
[Linkedin](https://in.linkedin.com/in/errohitaggarwal)

## License
MIT
