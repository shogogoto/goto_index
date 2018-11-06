<?php
	App::uses("IO","Lib");
	
	// CRUDを提供しなければならない
	class JsonDatabase extends IO {
		public function init(){
			$empty = [];
			$this->write($empty);
		}
		
		public function add($elm){
			$data = $this->read();
			$added = $this->grantId($elm);
			array_push($data, $added);
			$this->write($data);
		}
		
		public function grantId($elm){
			$d = date("YmdHis");
			$hash = hash_hmac("sha256", $d, false);
			return $elm + array("id" => $hash);
		}
		
		public function update(){
		}	
		public function delete(){
		}	
		
	}