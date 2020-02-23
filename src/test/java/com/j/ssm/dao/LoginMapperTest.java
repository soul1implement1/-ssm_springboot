package com.j.ssm.dao;

import com.alibaba.fastjson.JSONObject;
import com.j.ssm.SsmApplication;
import com.j.ssm.bean.UserBean;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;


/**
 * 测试查询部分数据并返回到相应对象
 */
@RunWith(SpringRunner.class)
@SpringBootTest(classes = SsmApplication.class)
class LoginMapperTest {
    @Autowired
    protected LoginMapper loginMapper;
    @Test
    void loginD() { System.out.println(loginMapper);
        UserBean userBean=loginMapper.loginD("test","root");
        if (userBean!=null){
           System.out.println(JSONObject.toJSONString(userBean));
        }else
            System.out.println("nononononononoonono");
    }
}