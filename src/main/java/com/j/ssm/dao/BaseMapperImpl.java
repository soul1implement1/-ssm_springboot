package com.j.ssm.dao;
import java.util.List;

/**
 * @author joker
 */
public interface BaseMapperImpl<T>  {
    /**
     *
     * @param t
     * @return 0|1
     */

    public int saveD(T t);

    /**
     * @param id
     * @return 0|1
     */
    public int deleteD( Integer id);

    /**
     *
     * @param t
     * @return 0|1
     */
    public int updateD(T t) ;

    /**
     *
     * @param page
     * @param limit
     * @return
     */
    public List<T> selectAllByPageD(Integer startpage, Integer limit);

    /**
   
     * @param id
     * @return
     */
    public T selectAllByIdD(Integer id) ;

    /**
     * @return
     */

    public String selectCountD();
}
