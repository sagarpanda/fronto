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

	$categories = array('Other', 'Public', 'Internal', 'Personal');
	$fileTypes = array('Image', 'PDF', 'DOC');

	$data = array(
		'categories' => $categories,
		'fileTypes' => $fileTypes
	);

	$output = array(
		'success'=> true,
		'items' => $data
	);

	
	print json_encode($output);
?>