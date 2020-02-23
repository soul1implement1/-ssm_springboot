package com.j.ssm.tool;

import com.j.ssm.bean.UserBean;
import io.jsonwebtoken.Claims;
import org.junit.jupiter.api.Test;


/**
 * jwt-test
 * @author joker
 */
class JWTTest {

    @Test
    void JWT() {
        UserBean userBean=new UserBean();
        userBean.setId(2);
        userBean.setName("jwt=====test中文");
        Claims claims= null;
        try {
            String token= JWT.createJWT(userBean);
            System.out.println(token);
            claims = JWT.parseJWT();
        } catch (Exception e) {
            e.printStackTrace();
            return;
        }
        System.out.println(claims.get("id"));
        System.out.println(claims.get("name"));
    }

    /**
     * 测试char[]toString
     */
    @Test
    void other(){
        char[] a={'q','a','Q'};
        System.out.println(a.toString());
        System.out.println(String.valueOf(a));
    }
}