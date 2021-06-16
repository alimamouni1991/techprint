<?php

if($_POST['id'] === "") {
	$to = ""; // Your e-mail address here.
	$headers= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
	$data_array = json_decode($_POST['data']);
	foreach ($data_array as $key => $value) {
		$body .= $value->name.': '.$value->value.'<br>';
	}
	$subject = ""; // Your e-mail address here.
	mail($to, $subject, $body, $headers); // E-Mail subject here.
}