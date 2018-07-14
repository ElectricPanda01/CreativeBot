// Import NPM Modules
const redis = require('redis');

// Promisify redis.multi
redis.Multi.prototype.then = function (func) {
	let promise = new Promise((resolve, reject) => {
		this.exec((error, replies) => {
			if (error)
				reject(error)
			else
				resolve(replies)
		})
	})
	return promise.then(func)
}

// Create redis class
class RedisDB {
	constructor (port = 6379, ip = '127.0.0.1') {
		let options = {
			host: ip,
			port: port
		};
		this.client = redis.createClient(options);
		this.applyMethods([
			'set', 'get', 'exists', 'keys', 'incr', 'del',
			'hset', 'hget', 'hexists', 'hkeys', 'hincrby', 'hdel', 'hgetall', 'hlen', 'hvals',
			'expire', 'ttl',
			'sismember', 'sadd', 'srem', 'smembers', 'scard',
			'zrevrange', 'zrevrank', 'zrem', 'zincrby', 'zscore'
		]);
	}

	applyMethods (methods) {
		for (let method of methods) {
			this[method] = (...params) => {
				return new Promise((resolve, reject) => {
					this.client[method](params, (error, result) => {
						if (error) reject(error);
						else resolve(result);
					});
				});
			};
		}
	}

	multi () {
		return this.client.multi();
	}

	on (event, func) {
		this.client.on(event, func);
		return this;
	}
}

// Export RedisDB class
module.exports = RedisDB;
