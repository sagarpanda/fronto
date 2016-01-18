<?php
	header('Access-Control-Allow-Origin: *');
	header('Access-Control-Allow-Methods: GET, POST, PUT');
	header('Access-Control-Allow-Credentials: true');
	header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

	sleep(2);

	function generateRandomString($length = 10) {

	    $characters = 'abcdefghijklmnopqrstuvwxyz';
	    $charactersLength = strlen($characters);
	    $randomString = '';
	    for ($i = 0; $i < $length; $i++) {
	        $randomString .= $characters[rand(0, $charactersLength - 1)];
	    }
	    return $randomString;
	}

	$data = array();

	$page  = isset($_GET['page']) ? $_GET['page'] : 1;
	$start = isset($_GET['start']) ? $_GET['start'] : 0;
	$limit = isset($_GET['limit']) ? $_GET['limit'] : 10;

	for ($i=0; $i < $limit; $i++) { 
		$str = generateRandomString(6);
		$data[] = array('id' => ($i+1), 'name' => ucfirst($str), 'email' => $str.'@gmail.com', 'phone' => '555-111-1224');
	}

	$output = array(
		'total' => 30,
		'results' => $limit,
		'success'=> true,
		'items' => $data
	);

	
	print json_encode($output);
?>