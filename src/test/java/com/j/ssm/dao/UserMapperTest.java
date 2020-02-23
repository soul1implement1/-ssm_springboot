package com.j.ssm.dao;

import com.j.ssm.SsmApplication;
import com.j.ssm.bean.UserBean;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import org.springframework.test.context.junit4.SpringRunner;

//springboot测试
@RunWith(SpringRunner.class)
@SpringBootTest(classes = SsmApplication.class)
class UserMapperTest{
    @Autowired
    protected UserMapper userMapper;
    /**
     * 测试mapper--insert----xml方式----注解方式
     */
    @Test
    void saveD() {
        System.out.println("start-mapper");
        UserBean userBean=new UserBean();
        userBean.setAge(21);
        userBean.setName("test-注解");
        int a=userMapper.saveD(userBean);
        System.out.println("test-mapper-success---------"+a);
    }
    @Test
    void testFile(){
//        org.springframework.web.multipart.MultipartFile multipartFile;
//        multipartFile.getOriginalFilename();
//        multipartFile.transferTo();
    }
}