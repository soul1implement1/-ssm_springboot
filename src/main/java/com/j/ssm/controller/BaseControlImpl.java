package com.j.ssm.controller;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;

import com.j.ssm.serviceimpl.BaseServiceImpl;
import com.j.ssm.tool.TA;
import com.j.ssm.tool.TS;
import org.springframework.beans.factory.annotation.Autowired;


/**
 *
 * @author joker
 */
public abstract class BaseControlImpl<T> {
    @Autowired
    public BaseServiceImpl<T> baseServiceImpl;

    /**
     *
     * @return
     * @throws IOException
     * @throws Exception
     */
    public void save() {
        String result = baseServiceImpl.saveS();
        // 输出result-josn
        TA.encodeResponseResultPrint(result);


    }

    /**
     *
     * @return
     */
    public void delete() {
        HttpServletRequest request = TA.myGetRequest();
        String id = request.getParameter("id");
        Integer idInteger = -1;
        try {
            idInteger = Integer.valueOf(id);
        } catch (NumberFormatException e) {
            // TODO 自动生成的 catch 块
            e.printStackTrace();
            TA.encodeResponseResultPrint(TS.ERROR);
            return;
        }
        String result = baseServiceImpl.deleteS(idInteger);
        TA.encodeResponseResultPrint(result);

    }

    /**
     *
     * @return
     */
    public void update() {
        HttpServletRequest req = TA.myGetRequest();
        String id = req.getParameter("id");
        Integer idInteger = -1;
        try {
            idInteger = Integer.valueOf(id);
        } catch (NumberFormatException e) {
            // TODO 自动生成的 catch 块
            e.printStackTrace();
            TA.encodeResponseResultPrint(TS.ERROR);
            return;
        }
        String result = baseServiceImpl.updateS(idInteger);
        TA.encodeResponseResultPrint(result);

    }

    /**
     * @return
     */
    public void selectCount() {
        String result = baseServiceImpl.selectCountS();
        TA.encodeResponseResultPrint(result);

    }

    /**
     * @return
     */

    public void selectAllById() {
        
        HttpServletRequest req = TA.myGetRequest();
        String id = req.getParameter("id");
        Integer idInteger = -1;
        try {
            idInteger = Integer.valueOf(id);
        } catch (NumberFormatException e) {
            // TODO 自动生成的 catch 块
            e.printStackTrace();
            TA.encodeResponseResultPrint(TS.ERROR);
            return;
        }
        String result = baseServiceImpl.selectAllByIdS(idInteger);
        TA.encodeResponseResultPrint(result);

    } 

    /**
     * 
     * selectAllByPage
     *
     * @return
     */
    public void select() {
        HttpServletRequest request = TA.myGetRequest();
        int startpage = 0;
        int limit = 0;
        try {
            startpage = Integer.valueOf(request.getParameter("page"));
            limit = Integer.valueOf(request.getParameter("limit"));
        } catch (Exception e) {
            // TODO: handle exception
            e.printStackTrace();
            TA.encodeResponseResultPrint(TS.ERROR);
            return;
        }
 
        if (limit > 20) {
            TA.encodeResponseResultPrint(TS.ERROR);
        } else {
            String result = baseServiceImpl.selectAllByPageS(startpage, limit);
            TA.encodeResponseResultPrint(result);
        }

    }

}
