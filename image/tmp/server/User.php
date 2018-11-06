<?php
	require_once(dirname(__FILE__).'\DB.php');
	require_once(dirname(__FILE__).'\absTable.php');
	class User extends absTable {
		protected $dbName	= "user";
		
		public function create(){
			$db	=	new DB();
			$db->query("create table $this->dbName	("
				. "id char(32)"
				. "name char(32)"
				. "pwd	char(64),"
				. "registerDate datetime,"
				. "primary key(id)"
				. ");");
			$db	=	null;
		}
		
		public function register( $id, $pwd ){
			$hash	=	hash_hmac( "sha256", $pwd, FALSE );	//長さ64の文字列を返す
			$date	= date("Y-m-d H:i:s", time() );
			$stamp	=	date("Ymd", time() );
			
			$db	=	new DB();
			$pdo	=	$db->createPDO();
			$stmt = $pdo -> prepare("INSERT INTO $this->dbName"
				. " VALUES (:id, :pwd, :date)");
			$stmt->bindParam(':id', $id, PDO::PARAM_STR);
			$stmt->bindParam(':pwd', $hash, PDO::PARAM_STR);
			$stmt->bindParam(':date', $date, PDO::PARAM_STR);
			$stmt->execute();	
			$db	= null;
		}		
	
	
		public function queryId(){
			$db	=	new DB();
			$res	=	$db->query("select id "
				. "from $this->dbName;");
			return $res;
		}
		
		public function existsUser( $id, $pwd ){
			$hash	=	hash_hmac( "sha256", $pwd, FALSE );	//長さ64の文字列を返す
			$db = new DB();
			$sql = "select *"
				. " from $this->dbName"
				. " where id = '$id'"
				. " and pwd = '$hash';";
			
			$res	=	$db->query( $sql );
			return $res;
		}
		
		
	}