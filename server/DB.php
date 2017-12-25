<?php
	class DB {
		const DSN = "mysql:dbname=test;host=127.0.0.1;charset=utf8";
		const USER = 'root@localhost';
		const PASSWORD = NULL;
		//const DSN = "mysql:dbname=gotoon_db;host=157.112.147.201;charset=utf8";
		//const USER = 'gotoon_db';
		//const PASSWORD = "goto510db";
		const OPTIONS = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
			PDO::MYSQL_ATTR_INIT_COMMAND=>"SET CHARACTER SET 'utf8'"
			);
		
		
		//private $pdo;
		//public function __construct() {
		//	$this->pdo	=	$this->createPDO();
		//}
		
		public function createPDO(){
			try{
				$pdo = new PDO( self::DSN, 
					self::USER, 
					self::PASSWORD, 
					self::OPTIONS
				);
				return $pdo;
			}catch(PDOException $e){
				echo $e->getMessage();
				exit;
			}
		}
		public function query($sql){
			$pdo	= $this->createPDO();
			$stmt	= $pdo->query($sql);
			return $stmt->fetchAll(PDO::FETCH_ASSOC);
		}
		

		
		public function showTables(){
			$res	=	$this->query("show tables");
			return $res;
		}
		
		public function showColumns($table_name){
			return $this->query("show columns from $table_name");
		}
		
		public function showRecords($table_name){
			return $this->query("select * from $table_name");			
		}
	
	}