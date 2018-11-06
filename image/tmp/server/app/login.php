<?php
	require_once(dirname(__FILE__).'\..\User.php');
	$user	=	new User();
	
	$id	=	$_REQUEST["val0"];
	$pwd	=	$_REQUEST["val1"];

	
	
	try{
		$res	=	$user->existsUser($id, $pwd);
		if ( count( $res ) == 1 ) {
			echo json_encode(true);
		} else {
			echo json_encode(false);
		}
	
		//echo "login";
	}catch(PDOException $e){
		//echo $e->getMessage();
		echo "エラーが発生しました";
		exit;
	}
	