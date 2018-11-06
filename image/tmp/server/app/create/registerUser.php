<?php
	require_once(dirname(__FILE__).'\..\..\User.php');
	$user	=	new User();
	//$user->create();
	
	$id	=	$_REQUEST["val0"];
	$pwd	=	$_REQUEST["val1"];
	
	try{
		$user->register($id, $pwd);
		echo "${id}を登録しました。";
		
	}catch(PDOException $e){
		//echo $e->getMessage();
		echo "${id}を登録できませんでした。";


		exit;
	}
	
	//$user->clear();
	//echo json_encode( $user->queryName() );