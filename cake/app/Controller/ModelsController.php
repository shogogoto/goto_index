<?php

	App::uses('AppController', 'Controller');
	App::uses('Sanitize', 'Utility');
	App::uses("File", "Utility");
	App::uses("JsonDatabase","Lib");
	
	class ModelsController extends AppController {
		public $autoRender = false;
		public $uses = null;
		//public $datas = $this->Concept->find("all");
			
		public function __construct($request, $response){
			parent::__construct($request, $response);
			$this->jd = new JsonDatabase("data/concept.txt");
		}
		
		public function init(){
			$this->jd->init();
		}
		
		// fetch without id
		public function index() {
			$data = $this->jd->read();
			return json_encode($data);
		}

		// fetch with id
		public function view($id) {

		}

		// save without id
		public function add() {
			$req = $this->request->data;
			$this->jd->add($req);
			//　空のjsonを返さないとsave時にエラー
			echo json_encode([]);
		}

		// save with id
		public function edit($id){
		}
		
		// delete with id
		public function delete($id){
		}
	}