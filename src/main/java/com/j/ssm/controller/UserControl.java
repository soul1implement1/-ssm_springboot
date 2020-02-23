package com.j.ssm.controller;

import com.j.ssm.bean.UserBean;
import org.springframework.context.annotation.Scope;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * user控制层--使用springmvc
 *
 * @author joker
 */
@RestController
@Scope(value = "prototype")
@RequestMapping("/U")
public class UserControl extends BaseControlImpl<UserBean> {
    /**
     * 保存user信息
     *
     * @return
     */
    @Override
    //    ,produces = "application/json;charset=utf-8"
    @RequestMapping(value = "/saveU", method = RequestMethod.POST)
    public void save() {
        super.save();
    }

    /**
     * 删除user信息
     *
     * @return
     */
    @Override
    @RequestMapping(value = "/deleteU", method = RequestMethod.POST)
    public void delete() {
        super.delete();
    }

    /**
     * 更新user信息
     *
     * @return
     */
    @Override
    @RequestMapping(value = "/updateU", method = RequestMethod.POST)
    public void update() {
        super.update();
    }
}
