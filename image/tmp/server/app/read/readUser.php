<?php
	require_once(dirname(__FILE__).'\..\..\User.php');
	$user	=	new User();
	//$user->create();
	
	$name	=	$_REQUEST["val0"];
	$pwd	=	$_REQUEST["val1"];

	try{
		//$user->register($name, $pwd);
		echo "$name を登録しました";
		
	}catch(PDOException $e){
		//echo $e->getMessage();
		echo "エラーが発生しました";
		exit;
	}
	