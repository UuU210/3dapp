<?php
require_once __DIR__."/../model/model.php";
require_once __DIR__."/../model/jsondata.php";
class Controller {
    public function load() {
        $action = isset($_GET['action']) ? $_GET['action'] : 'index';
		
        switch ($action) {
            case 'index':
                $this->index();
                break;

			case 'getTextData':
				$this->getAllText();
				break;
			case 'get3DImgs':
				$this->get3DImgs();
				break;
			
            default:
                http_response_code(404);
                echo "Not Found";
                break;
        }
    }

    public function index() {
		$db=new JsonData();
		// var_dump($db);
		// $db->createMyTable();
		// $getData=$db->getAll('jsondata');
		// var_dump($getData);

        include __DIR__.'/../view/homeview.php';
    }


	
	
	public function getAllText(){
		$db = new JsonData();
		$data = [
			'allText' => $db->getAll('jsondata'),
		];
		header('Content-Type: application/json');
		echo json_encode($data);
		exit;
	}
	
	
	public function get3DImgs(){
		$directory = 'assets/images/gallery_images';
		$allowed_extensions = array('jpg','jpeg','gif','png');
		$file_parts = array();
		$response = "";
		$dir_handle = opendir($directory);
		while ($file = readdir($dir_handle)) {
			if (substr($file, 0, 1) != '.') {
				$file_components = explode('.', $file);
				$extension = strtolower(array_pop($file_components));
				if (in_array($extension, $allowed_extensions))
				{
					
					$response .= '/'.$file.'~';
				}
			}
		}
		closedir($dir_handle);
		echo substr_replace($response,"",-1);
	}
	
	
}
?>
