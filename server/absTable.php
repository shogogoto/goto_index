<?php
	require_once 'DB.php';

	abstract class absTable {
		private $tableName;


		abstract protected function create();

		public function clear(){
			//truncate book;
		}
		
		public function write($res){
			echo json_encode( $res );
		}
	}