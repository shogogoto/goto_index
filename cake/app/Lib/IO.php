<?php
	App::uses("File", "Utility");
	
	class IO {
		//private static $path = "data/text.txt";
		
		public function __construct($path){
			$this->path = $path;
		}
		
		public function read(){
			$f = new File($this->path);
			$f->open("r");
			$f->lock = true;
			while (true) {
				$data = json_decode($f->read());
				if ($data !== false) {
					break;
				}
			}
			$f->close();
			return $data;
		}
		
		public function write($data){
			$f = new File($this->path);
			$f->open("w+");
			$f->lock = true;
			while (true) {
				$success = $f->write(json_encode($data, JSON_PRETTY_PRINT));
				if ($success) {
					break;
				}
			}
			$f->close();
		}
		
	}