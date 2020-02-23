package com.j.ssm.tool;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import org.apache.commons.beanutils.BeanUtils;
import org.springframework.stereotype.Component;

/**
 * Service层的tool包
 * 
 * @author joker
 */
@Component
public class TS {
	/**
	 * 操作成功常量status:SUCCESS
	 */
	public static String SUCCESS = "{\"status\":\"SUCCESS\"}";
	/**
	 * 操作失败常量{}
	 */
	public static String ERROR = "{}";

	/**
	 * 服务端错误信息返回
	 * @param Message
	 * @return
	 */
	public static String getMessage(String Message) {
		return "{\"msg\":\""+Message+"\"}";
	}

	/**
	 * map->json
	 * 
	 * @param xMap
	 * @return json
	 */
	public static String getJson(Map<String, Object> xMap) {
		return JSONObject.toJSONString(xMap);
	}

	
	/**
	 *  * layui-json 返回layui所需数据格式 //将list最后的页数条件返回，移除
	 * //layui框架处理工具2.0，code：200，msg:操作成功，count:count
	 * @param count
	 * @param result
	 * @return
	 */
	public static String layuiGetJsonArray(String count,String resultString) {
		resultString = "{\"code\":200,\"count\":" + count+ ",\"data\":" + resultString + "}";
		return resultString;
	}
//	/**
//	 * layui-list->json 返回layui所需数据格式 //将list最后的页数条件返回，移除
//	 * //layui框架处理工具1.0，code：200，msg:操作成功，count:object(count(*))
//	 * 
//	 * @param list
//	 * @return json
//	 */
//	public static String layuiGetJsonArray(List<Object> list) {
//		Object object = list.get(list.size() - 1);
//		list.remove(list.size() - 1);
//
//		String resultString = JSONArray.fromObject(list).toString();
//		// layui框架处理工具，code：200，msg:操作成功，count:object(count(*))
//		resultString = "{\"code\":200,\"count\":" + object + ",\"data\":" + resultString + "}";
//		return resultString;
//	}

	/**
	 * list->json
	 * @param <T>
	 * 
	 * @param list
	 * @return
	 */
	public static <T> String getJsonArray(List<T> list) {
		String resultString = JSONArray.toJSONString(list);
		// 处理
		//resultString = resultString.substring(1, resultString.length() - 1);
		return resultString;
	}

	/**
	 *
	 * * 封装前端提交的request请求 ;判断是否有空 ；是否合法 ;依赖BeanUtils.populate(obj,
	 * reqMap);不判断前端是否字段正确;但可在此源码调试字段名称合法性
	 * 
	 * @param object，请求对应的bean
	 * @return 0非法，1合法
	 */
	public static int getDealRequestFrom(Object object) {
		// 获取请求
		HttpServletRequest req = TA.myGetRequest();
		// 获取请求参数
		Map<String, String[]> reqMap = req.getParameterMap();
		// 判断
		System.out.println("==================================");
		for (String key : reqMap.keySet()) {
			// 有空
			// System.out.println(key);
			if (req.getParameter(key) == null || req.getParameter(key).equals("")) {
				System.out.print("空了" + key);
				return 0;
			}
			// 调试点
			else
				System.out.println(key + "       " + req.getParameter(key));
//			// 不合法
		}
		System.out.println("==================================");
		try {
			
			// 利用工具
			BeanUtils.populate(object, reqMap);
		} catch (Exception e) {
			// TODO 自动生成的 catch 块
			e.printStackTrace();
			return 0;
		}
		return 1;
	}
/**
 * 返回图片存储网络相对路径
 *
 * @return 返回网络相对路径
 */
    public static String getFrontHttpPath() {
        return "http://172.16.13.31:5502/tempImg/";
    }
	/**
	 * 返回图片存储物理相对路径
	 *
	 * @return 返回物理绝对路径
	 */
	public static String getFrontAbsPath() {
		return "D:\\springBOOTfront\\ssmfront\\tempImg\\";
	}
}
