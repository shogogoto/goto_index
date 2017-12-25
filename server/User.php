<?php
	require_once 'DB.php';
	require_once 'absTable.php';
	class User extends absTable {
		
		protected function create(){
			$db	=	new DB();
			$db->query("create table user	("
				. "id	char(32),"
				. "pwd	char(64),"
				. "registerDate datetime,"
				. "primary key(id)"
				. ");");
			$db	=	null;
		}
		
		protected function register( $id, $pwd){
			$date	= date("Y-m-d H:i:s", time() );
			$hash	=	hash_hmac( "sha256", $pwd );	//長さ64の文字列を返す
			
			$db	=	new DB();
			$pdo	=	$db->createPDO();
			$stmt = $pdo -> prepare("INSERT INTO user VALUES (:id, :pwd, :date)");
			$stmt->bindParam(':id', $id, PDO::PARAM_STR);
			$stmt->bindParam(':pwd', $pwd, PDO::PARAM_STR);
			$stmt->bindParam(':date', $date, PDO::PARAM_STR);
			$stmt->execute();	
			$db	= null;
		}		
		
	}
	
	$hash	=	hash_hmac("sha256", "goto510web", FALSE);
	echo $hash;
	echo "<br/>";
	echo strlen($hash);