package com.j.ssm.tool;

import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 * action工具类 1.解决response乱码问题;跨域带上cookies，返回时对response设置
 *
 * @author joker
 */
@Component
public class TA {
    /**
     * TA-NONE ;未解决，为什么小写可以正确相应大写不行; 无法解析的编译问题： NONE 无法解析为变量
     */
//    public static String NONE = "none";
////从session里面获取对应的值
//	String myValue = (String) requestAttributes.getAttribute("my_value",RequestAttributes.SCOPE_SESSION);

    /**
     * 获取request
     *
     * @return HttpServletRequest
     */
    public static HttpServletRequest myGetRequest() {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        return requestAttributes.getRequest();
    }

    /**
     * 获取response
     *
     * @return HttpServletResponse
     */
    public static HttpServletResponse myGetResponse() {
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        return requestAttributes.getResponse();
    }

    /**
     * 解决response乱码问题&输出result-json； 将responseresult设置为utf-8然后改回iso-8859-1；
     * 可使前端正常显示；
     *
     * @param result(json格式)
     * @throws IOException
     * @throws Exception
     */
    public static void encodeResponseResultPrint(String result) {
        //获取response
        ServletRequestAttributes requestAttributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletResponse response = requestAttributes.getResponse();
        //设置编码
        response.setCharacterEncoding("UTF-8");
        //设置返回格式为JSON
        response.setContentType("application/json;charset=utf-8");
        try {
            response.getWriter().print(result);
        } catch (IOException e) {
            // TODO 自动生成的 catch 块
            e.printStackTrace();
        }
        response.setCharacterEncoding("ISO-8859-1");
    }

}
