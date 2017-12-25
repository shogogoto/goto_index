<?php
	require_once 'DB.php';
	require_once 'absTable.php';

	
	class	Book extends absTable {
		private $tableName;
		
		public function __construct() {
			$tableName	=	"book";
		}

		public function create(){
			$db	=	new DB();
			$res	=	$db->query("create table $this->tableName"
				. "("
				. "id int unsigned auto_increment,"
				. "name	char(128),"
				. "author	char(128),"
				. "date1st date,"
				. "primary key(id)"
				. ");");
			$this->write( $res );
		}
		
		public function register($name, $author, $date1st){
			$db	=	new DB();
			$pdo	=	$db->createPDO();
			$stmt = $pdo -> prepare("INSERT INTO  $this->tableName" 
				. "( name, author, date1st )"
				. " VALUES (:name, :author, :date1st);");
			$stmt->bindParam(':name', $name, PDO::PARAM_STR);
			$stmt->bindParam(':author', $author, PDO::PARAM_STR);
			$stmt->bindParam(':date1st', $date1st, PDO::PARAM_STR);
			$stmt->execute();	
		}
		
	}
	$b	= new Book();
	$b->create();
	$name			=	$_REQUEST["val0"];
	$author		=	$_REQUEST["val1"];
	$date1st	=	$_REQUEST["val2"];
	
	//$b->register( $name, $author, $date1st);
	echo json_encode([$_REQUEST]);