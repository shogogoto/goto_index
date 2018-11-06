<?php
	require_once(dirname(__FILE__).'\..\..\User.php');
	$user	=	new User();

	try{
		$res = $user->queryId();
		echo json_encode( $res );
		
	}catch(PDOException $e){
		//echo $e->getMessage();
		echo "エラーが発生しました";
		exit;
	}
	
	//$user->clear();
	//echo json_encode( $user->queryName() );