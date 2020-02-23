package com.j.ssm.tool;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

/**
 * redis基本操作封装
 * @author joker
 */
@Component
public class RedisUtil {
    //    原因：
    //    在工具类中
    //    template与redis默认处理装载redis的对象{RedisAutoConfiguration.class}中定义的方法重名
    @Autowired
    public  RedisTemplate redisTemplate;// 通过构造方法注入该对象

    /**
     *普通存值
     * @param key
     * @param value
     */
    public  void setValue(String key, Object value) {
        redisTemplate.opsForValue().set(key, value);
    }

    /**
     * 普通取值
     * @param key
     * @return
     */
    public  Object getValue(String key) {
        return redisTemplate.opsForValue().get(key);
    }
    public  void delValue(String key) {
        redisTemplate.delete(key);
    }
    /**
     * 存值并，设置超时时间
     * @param key
     * @param value
     * @param time
     * @param unit
     */
    public  void setValue(String key, Object value, long time, TimeUnit unit) {
        redisTemplate.opsForValue().set(key, value, time, unit);
    }

    /**
     * 存一个MAP--多值
     * @param map
     */
    public  void multiSet(Map<String, Object> map) {
        redisTemplate.opsForValue().multiSet(map);
    }

    /**
     * 取多个值
     * @param keys
     * @return list
     */
    public  List<Object> multiGet(Collection<String> keys) {
        return redisTemplate.opsForValue().multiGet(keys);
    }

    /**
     * 取号
     * @param key
     * @param delta
     * @return
     */
    public  long incr(String key, long delta) {
        return redisTemplate.opsForValue().increment(key, delta);
    }



}
