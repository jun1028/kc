<%@ page language="java" pageEncoding="UTF-8"%>
<% 
	String username = (String)session.getAttribute("username");
 %>
<script>
	var username = "<%=username%>";
</script>
<html>
  <head>
  	<title>成品仓库库存查询</title>
    <link rel="stylesheet" type="text/css" href="../../ext/resources/css/ext-all.css">
    <link rel="stylesheet" type="text/css" href="../../css/ext-icon.css">
    <script type="text/javascript" src="../../ext/adapter/ext/ext-base.js"></script>
    <script type="text/javascript" src="../../ext/ext-all.js"></script>
    <script type="text/javascript" src="../../ext/ext-lang-zh_CN.js"></script>
    <script type="text/javascript" src="../../js/utils.js"></script>
    <script type="text/javascript" src="../../js/grid2Excel.js"></script>
    <script type="text/javascript" src="chpkcsearch.js"></script>
  </head>
  <body>
  </body>
</html>