
<?php

//set timezone for Finland
date_default_timezone_set('Europe/Helsinki');

if (isset($_POST['pathDir']) && !empty($_POST["pathDir"] && isset($_POST['name']) && !empty($_POST["name"]))) {
  $pathDir = ($_POST['pathDir']);
  $data = $_POST['name'];
  $dateTime = date('d.m.Y_H.i.s_');
  $destDirectory = "osaasto6/valmis/";
  $file = $data;
  rename($pathDir . $data, $destDirectory . $dateTime . $data);
}

if (isset($_POST['pathDir2']) && !empty($_POST["pathDir2"] && isset($_POST['name2']) && !empty($_POST["name2"]))) {
  $pathDir2 = ($_POST['pathDir2']);
  $data2 = $_POST['name2'];
  $destDirectory2 = "osaasto6/historia/";
  rename($pathDir2 . $data2, $destDirectory2 . $data2);
}


if (isset($_POST['pathDir3']) && !empty($_POST["pathDir3"])) {
  $pathDir3 = ($_POST['pathDir3']);
  $data3 = $_POST['name3'];
  unlink($pathDir3 . $data3);
}


?>

