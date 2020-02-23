package com.j.ssm.filter;

import org.springframework.stereotype.Component;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletResponse;

/**
 * cors跨域访问
 * 
 * @author joker
 *
 */
@Component()
public class CrossAccessFilter implements Filter {

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		// TODO 自动生成的方法存根
		HttpServletResponse response2 = (HttpServletResponse) response;

		// 允许所有域的访问
		response2.setHeader("Access-Control-Allow-Origin", "*");
		// 允许携带cookies
		response2.setHeader("Access-Control-Allow-Credentials", "true");
		// p3p协议
		response2.setHeader("P3P", "CP=CAO PSA OUR");
		chain.doFilter(request, response2);
	}

}
