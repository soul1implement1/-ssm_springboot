package com.j.ssm.serviceimpl;

import com.j.ssm.bean.UserBean;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

/**
 * userService层--使用mybatis
 * @author joker
 */
@Service
@Scope(value = "prototype")
public class UserServiceImpl extends BaseServiceImpl<UserBean>{
    @Override
    public String saveS() {
        super.object=new UserBean();
        return super.saveS();
    }

    @Override
    public String deleteS(Integer idInteger) {
        return super.deleteS(idInteger);
    }

    @Override
    public String updateS(Integer idInteger) {
        super.object=new UserBean();
        return super.updateS(idInteger);
    }
}
