package com.j.ssm.serviceimpl;

import java.util.LinkedList;
import java.util.List;

import com.j.ssm.dao.BaseMapperImpl;
import com.j.ssm.tool.TS;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;



/**
 
 * @author joker
 *
 */
public abstract class BaseServiceImpl<T> {
    @Autowired
    public BaseMapperImpl<T> baseMapperImpl;
    // null不用产生消耗就小
    public Object object = null;
    /**
     * 保存对象
     *
     * @return
     */
    @Transactional
    public String saveS() {
        @SuppressWarnings("unchecked")
        T t = (T) object;
        if (TS.getDealRequestFrom(t) == 0) {
            return TS.ERROR;
        }
        if (baseMapperImpl.saveD(t) == 1) {
            return TS.SUCCESS;
        }
        return TS.ERROR;
    }

    /**
     * 
     *
     * @param idInteger
     * @return
     */
    @Transactional
    public String deleteS(Integer idInteger) {
        if (baseMapperImpl.deleteD(idInteger) == 1) {
            return TS.SUCCESS;
        }
        return TS.ERROR;

    }

    /**
     * 
     * @param idInteger
     * @return
     */
    @Transactional
    public String updateS(Integer idInteger) {

        @SuppressWarnings("unchecked")
        T t = (T) object;
		if (TS.getDealRequestFrom(t) == 0) {
			return TS.ERROR;
		}

        if (baseMapperImpl.updateD(t) == 1) {
            return TS.SUCCESS;
        }
        return TS.ERROR;
    }

    /**
     * @param startpage
     * @param limit
     * @return
     */
    public String selectAllByPageS(Integer startpage, Integer limit) {

        List<T> list = baseMapperImpl.selectAllByPageD(startpage, limit);

        return TS.getJsonArray(list);
    }

    /**

     *
     * @param idInteger
     * @return
     */
    public String selectAllByIdS(Integer idInteger) {
        // 查询
        List<Object> list = new LinkedList<Object>();
        try {
            object = baseMapperImpl.selectAllByIdD(idInteger);
        } catch (NumberFormatException e) {
            // TODO 自动生成的 catch 块
            e.printStackTrace();
            return TS.ERROR;
        }
        list.add(object);
        // json
        return TS.getJsonArray(list);
    }

    /**
     *
     * @param className
     * @return
     */
    public String selectCountS() {
        return baseMapperImpl.selectCountD();
    }

}
