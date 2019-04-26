# Struts: No getter method for property name problem

https://coderanch.com/t/45795/frameworks/Struts-getter-method-property

> The reason is that application servers are totally case-sensitive and also have to conform to Sun�s JavaBean specification.
So when the application server reads a JSP and sees a reference to a property on a bean, it will capitalize the first letter of the property name and append �get� or �set� to the front:
<html:text property="passWord" size="16" value="" />
myBean.getPassWord()
myBean.setPassWord()
Now you capitalized the first letter of the property in your HTML tag. That's not meant to be. The effect is probably undefined by the Javabean specification.
Adam

***


## まとめ
**変数名の最初の文字は小文字にすること**


# Validator

http://www.javaroad.jp/opensource/js_struts19.htm