<?php

	$output = array(
		'total' => 30,
		'results' => $limit,
		'success'=> true,
		'items' => []
	);

	
	print json_encode($output);
?>