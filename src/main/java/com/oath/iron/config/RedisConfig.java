package com.oath.iron.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;

import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

//@Configuration
public class RedisConfig {
	
	@Value("${spring.redis.host}")
	private String host;
	@Value("${spring.redis.port}")
	private Integer port;
	@Value("${spring.redis.pool.max-active}")
	private Integer maxActive;
	@Value("${spring.redis.pool.max-idle}")
	private Integer maxIdle;
	
	
	@Bean
	public JedisPool getJedisPool(){
		JedisPoolConfig config = new JedisPoolConfig();
		config.setMaxTotal(maxActive);
		config.setMaxIdle(maxIdle);
		return new JedisPool(config, host, port);
	}
}
