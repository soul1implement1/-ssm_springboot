package com.j.ssm.dao;

import com.j.ssm.bean.UserBean;

import org.apache.ibatis.annotations.*;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * userDao层--使用mybatis
 *
 * @author joker
 */

//@MapperScan   //声明是一个Mapper,与springbootApplication中的@MapperScan二选一写上即可
@Repository
@Scope(value = "prototype")
public interface UserMapper extends BaseMapperImpl<UserBean> {
    @Override
    @Insert("INSERT INTO `tb_user` (`NAME`, `AGE`,`PASSWORD`) VALUES (#{name},#{age},#{password})")
    @ResultType(UserBean.class)
    int saveD(UserBean userBean);

    @Override
    @Delete("DELETE FROM `tb_user` WHERE `ID`=#{id}")
    int deleteD(Integer id);

    @Override
    @Update("UPDATE `tb_user` SET  `NAME`=#{name}, `AGE`=#{age} WHERE `ID`=#{id}")
    int updateD(UserBean userBean);

}
