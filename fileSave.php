
<?php
	// php script for file save
	// this script is used to save json file 
	// $filePath = '/var/www/nginxsite.com/json-server-api-faker/dist/angular-json-server/db.json';
	$filePath = 'E:\Programmings\Angular\backend-faker-app\angular-json-server\db.json';
	
	if($_SERVER['REQUEST_METHOD'] == 'POST'){
		
		//$data = file_get_contents('php://input');
		$data = json_decode(file_get_contents('php://input'), true);
		
		if($data){
			$jsonContent = json_encode($data, JSON_PRETTY_PRINT);

			try{
				$fp = fopen($filePath, 'w');
				fwrite($fp, $jsonContent);
				fclose($fp);
				http_response_code(200);
				echo  json_encode("file saved") ;	
			}catch(Exception $e) {
			  echo 'Message: ' .$e->getMessage();
			}
				
		}
		
	}
	
	//get json data
	if($_SERVER['REQUEST_METHOD'] == 'GET'){
		$fp = fopen($filePath, 'r');
		$contents = fread($fp, filesize($filePath));
		fclose($fp);
		header('Content-Type: application/json');
		echo json_encode($contents);
	}
	
?>
