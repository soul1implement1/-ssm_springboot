package com.j.ssm.tool;

import com.j.ssm.bean.UserBean;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.stereotype.Component;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import javax.servlet.http.Cookie;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

//第三方签名

/**
 * JWT验证
 * io.jsonwebtoken
 *
 * @author joker
 */
@Component
public class JWT {

    // jti：jwt的唯一身份标识
    //util.UUID
    //全球唯一用户uid
    public static final String JWT_ID = UUID.randomUUID().toString();

    // 加密密文，私钥
    public static final String JWT_SECRET = "ee3a060c62ac6ecc7c2e05d072770835";

    // 过期时间，单位毫秒
    public static final int EXPIRE_TIME = 60 * 60 * 1000; // 一个小时

    // 由字符串生成加密key
    public static SecretKey generalKey() {
        // 本地的密码解码
        byte[] encodedKey = Base64.decodeBase64(JWT_SECRET);
        // 根据给定的字节数组使用AES加密算法构造一个密钥
        SecretKey key = new SecretKeySpec(encodedKey, 0, encodedKey.length, "AES");
        return key;
    }

    /**
     * @param userBean

     */
    public static String createJWT(UserBean userBean) throws Exception {
        // 设置头部信息
//		Map<String, Object> header = new HashMap<String, Object>();
//		header.put("typ", "JWT");
//		header.put("alg", "HS256");
        // 或
        // 指定header那部分签名的时候使用的签名算法，jjwt已经将这部分内容封装好了，只有{"alg":"HS256"}
        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.HS512;
        // 创建payload的私有声明（根据特定的业务需要添加，如果要拿这个做验证，一般是需要和jwt的接收方提前沟通好验证的方式）
        Map<String, Object> claims = new HashMap<>();
        claims.put("id", userBean.id);
        claims.put("name", userBean.name);
        claims.put("sd", TA.myGetRequest().getSession().getId());
        // jti用户id，例如：20da39f8-b74e-4a9b-9a0f-a39f1f73fe64
        String jwtId = JWT_ID;
        // 生成JWT的时间
        long nowTime = System.currentTimeMillis();
        Date issuedAt = new Date(nowTime);
        // 生成签名的时候使用的秘钥secret，切记这个秘钥不能外露，是你服务端的私钥，在任何场景都不应该流露出去，一旦客户端得知这个secret，那就意味着客户端是可以自我签发jwt的
        SecretKey key = generalKey();
        // 为payload添加各种标准声明和私有声明
        JwtBuilder builder = Jwts.builder() // 表示new一个JwtBuilder，设置jwt的body
                .setClaims(claims) // 如果有私有声明，一定要先设置自己创建的这个私有声明，这是给builder的claim赋值，一旦写在标准的声明赋值之后，就是覆盖了那些标准的声明
                .setId(jwtId) // jti(JWT ID)：jwt的唯一身份标识，根据业务需要，可以设置为一个不重复的值，主要用来作为一次性token，从而回避重放攻击
                .setIssuedAt(issuedAt) // iat(issuedAt)：jwt的签发时间
                .setIssuer("签发人joker") // iss(issuer)：jwt签发者
                .setSubject("jwt网站使用") // sub(subject)：jwt所面向的用户，放登录的用户名，一个json格式的字符串，可存放userid，roldid之类，作为用户的唯一标志
                .signWith(signatureAlgorithm, key); // 设置签名，使用的是签名算法和签名使用的秘钥
        // 设置过期时间
        long expTime = EXPIRE_TIME;
        if (expTime >= 0) {
            long exp = nowTime + expTime;
            builder.setExpiration(new Date(exp));
        }
        builder.setAudience("所有人");
        return builder.compact();
    }

    // 解密jwt
    public static Claims parseJWT() throws Exception {
//在cookie中获取token
        Cookie[] cookie =TA.myGetRequest().getCookies();
        System.out.println( cookie[0].getName());
        String token=cookie[0].getValue();
        SecretKey key = generalKey(); // 签名秘钥，和生成的签名的秘钥一模一样
        Claims claims = Jwts.parser() // 得到DefaultJwtParser
                .setSigningKey(key) // 设置签名的秘钥
                .parseClaimsJws(token).getBody(); // 设置需要解析的jwt
        return claims;
    }

}
