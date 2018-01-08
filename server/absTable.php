<?php
	require_once(dirname(__FILE__).'\DB.php');

	abstract class absTable {
		protected $dbName;


		abstract protected function create();

		public function clear(){
			$db	=	new DB();
			$db->query("truncate $this->dbName;");
			$db	=	null;
		}
	}