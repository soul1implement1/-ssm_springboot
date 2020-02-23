package com.j.ssm.tool;

import com.j.ssm.SsmApplication;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.*;
import java.util.concurrent.TimeUnit;

import static org.junit.jupiter.api.Assertions.*;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = SsmApplication.class)
class redisUtilTest {
    @Autowired
    RedisUtil redisUtil;

    @Test
    void Value() {
        redisUtil.setValue("myKey", "6666");
        System.out.println(redisUtil.getValue("myKey"));
//        redisUtil.delValue("myKey");
        System.out.println(redisUtil.getValue("myKey"));
    }
    @Test
    void time(){
        //三分钟
        redisUtil.setValue("newk","17272737",  3, TimeUnit.MINUTES);
    }


    @Test
    void multi() {
        String[] strings = {"1", "2", "33"};
        Map<String, Object> X = new HashMap<>();
        Collection<String> c = new LinkedList<>();
        for (String string : strings) {
            X.put(string, string);
            c.add(string);
        }
        redisUtil.multiSet(X);
        List<Object> X1 = redisUtil.multiGet(c);
        for (Object O : X1) {
            System.out.println((String) O);
        }
    }


    @Test
    void incr() {
        System.out.println(redisUtil.incr("6666", new Date().getTime()));
    }
}