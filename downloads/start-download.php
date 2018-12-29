<?php
$download_link = 'KarthikSRao-Portfolio.pdf';
ob_start();
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename="'.basename($download_link).'"');
header('Content-Length: ' . filesize($download_link));
readfile($download_link);
?>