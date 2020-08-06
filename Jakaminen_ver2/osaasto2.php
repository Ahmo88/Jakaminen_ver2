<!DOCTYPE html>
<html>
<title>Osasto_2</title>

<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="osaasto2.js" type="text/javascript"></script>
  <script type="text/javascript" src="http://cdnjs.cloudflare.com/ajax/libs/EaselJS/0.7.1/easeljs.min.js"></script>
  <link rel="stylesheet" type="text/css" href="osaasto1.css">
</head>

<body id="body" class="body" name="body">


  <div class="valmisDiv" id="valmisDiv">
    <select id="listBoxValmis" name="listBoxValmis" class="listBoxValmis" multiple></select>
    <label id="labelValmis" class="labelValmis">Valmis</label>
    <input type="submit" id="valmisOk" class="valmisOk" value="OK" name="valmisOk">
  </div>

  <div class="historiaDiv" id="historiaDiv">
    <label id="labelHistoria" class="labelHistoria">Historia</label>
    <select id="listBoxHistoria" name="listBoxHistoria" class="listBoxHistoria" multiple></select>
    <input type="submit" id="historiaDelete" class="historiaDelete" value="Poista">
    <input type="submit" id="etsi" class="etsi" value="Etsi"></input>
    <input type="text" id="text1" class="text1"></input>
  </div>

  <div class="listOfallListBoxDiv" id="listOfallListBoxDiv">
    <select id="listOfallListBox" name="listOfallListBox" class="listOfallListBox" multiple></select>
    <label id="labelKaikki" class="labelKaikki">Ma - Su</label>

  </div>

  <div id="divLabel" class="divLabel">
    <label id="label1" class="label1">Maanantai </label>
    <label id="label1" class="label2">Tiisatai </label>
    <label id="label1" class="label3">Keskiviikko </label>
    <label id="label1" class="label4">Torstai </label>
    <label id="label1" class="label5">Perjantai </label>
    <label id="label1" class="label6">Lauantai </label>
    <label id="label1" class="label7">Sunnuntai </label>


  </div>
  
  <select id="listBox7" name="listBox7" class="listBox" multiple></select>
  <select id="listBox6" name="listBox6" class="listBox" multiple></select>
  <select id="listBox5" name="listBox5" class="listBox" multiple></select>
  <select id="listBox4" name="listBox4" class="listBox" multiple></select>
  <select id="listBox3" name="listBox3" class="listBox" multiple></select>
  <select id="listBox2" name="listBox2" class="listBox" multiple></select>
  <select id="listBox1" name="listBox1" class="listBox" multiple></select>


  <div class="divCanvasOptions" id="divCanvasOptions">
    <div id="updateCheckBoxDiv" class="updateCheckBoxDiv">
      <input type="checkBox" name="updataCheckBox" class="updataCheckBox" id="updataCheckBox"></input>
    </div>
    <input type="submit" id="mainMsgButton" class="mainMsgButton" value="Msg"></input>
    <input type="submit" id="updateButton" value="Virkistä" class="updateButton" name="updateButton"></input>
    <select id="selWidth" class="setSize">
    <option value="1" selected="selected">1</option>
      <option value="3">3</option>
      <option value="5">5</option>
      <option value="7">7</option>
      <option value="9">9</option>
      <option value="11">11</option>
    </select>
    
    <select id="selColor" class="setColor">
      <option value="black">musta</option>
      <option value="blue">sininen</option>
      <option value="red">punainen</option>
      <option value="green" selected="selected">vihreä</option>
      <option value="yellow">keltainen</option>
      <option value="gray">harmaa</option>
    </select>
    
    <button onclick="javascript:cUndo();return false;" class="undo">Undo</button>
    <button onclick="javascript:cRedo();return false;" class="redo">Redo</button>
    <button onclick="javascript:count();return false;" class="count"></button>
    <input type="submit" name="btSave" class="saveCanvas" id="btSave" value="Tallena"></input>
    <!-- <input type="checkbox" name="listBoxCanvasSize" class="listBoxCanvasSize" id="listBoxCanvasSize">Maximize</input> -->
    <!-- <input type="checkbox" name="listBoxCanvasSize2" class="listBoxCanvasSize" id="listBoxCanvasSize2">Normal</input>-->
    <input type="submit" name="close" class="close" id="close" value="Hide"></input>

    <div id="drawingCheckBoxDiv" class="drawingCheckBoxDiv">
      <input type="checkBox" name="drawingCheckBox" class="drawingCheckBox" id="drawingCheckBox"></input>
    </div>

    <input type="text" name="nameField" class="nameField" id="nameField" value="Tekijä:"></input>
    <input type="checkBox" name="nameFieldCheckBox" class="nameFieldCheckBox" id="nameFieldCheckBox"></input>


  </div>

  <div class="buttonValmisDiv" name="buttonValmisDiv" id="buttonValmisDiv">

    <input type="submit" id="btValmis1" name="btValmis1" class="btValmis1" value="Valmis"></input>
    <input type="submit" id="btDelete1" name="btDelete1" class="btDelete1" value="Poista"></input>
    <input type="submit" id="btValmis2" name="btValmis2" class="btValmis2" value="Valmis"></input>
    <input type="submit" id="btDelete2" name="btDelete2" class="btDelete2" value="Poista"></input>
    <input type="submit" id="btValmis3" name="btValmis3" class="btValmis3" value="Valmis"></input>
    <input type="submit" id="btDelete3" name="btDelete3" class="btDelete3" value="Poista"></input>
    <input type="submit" id="btValmis4" name="btValmis4" class="btValmis4" value="Valmis"></input>
    <input type="submit" id="btDelete4" name="btDelete4" class="btDelete4" value="Poista"></input>
    <input type="submit" id="btValmis5" name="btValmis5" class="btValmis5" value="Valmis"></input>
    <input type="submit" id="btDelete5" name="btDelete5" class="btDelete5" value="Poista"></input>
    <input type="submit" id="btValmis6" name="btValmis6" class="btValmis6" value="Valmis"></input>
    <input type="submit" id="btDelete6" name="btDelete6" class="btDelete6" value="Poista"></input>
    <input type="submit" id="btValmis7" name="btValmis7" class="btValmis7" value="Valmis"></input>
    <input type="submit" id="btDelete7" name="btDelete7" class="btDelete7" value="Poista"></input>

  </div>


  <textarea id="ShowSelectedName" class="ShowSelectedName"></textarea>

  <canvas id="canvas" class="canvas" name="canvas"></canvas>

  <div id="messangerDiv" class="messangerDiv">
    <label class="messangerLabe2">Viesti esimiehelle:</label>
    <label class="messangerLabe3">Viesti esimiehelta:</label>
    <textarea id="msgFromClient" class="msgFromClient"></textarea>
    <textarea id="msgFromServer" class="msgFromServer" name="msgFromServer"></textarea>
    <input type="submit" id="buttonSendMsg" class="buttonSendMsg" value="Lähetä viesti">
    <input type="submit" id="buttonReadedMsg" class="buttonReadedMsg" value="OK">
  </div>


</body>

</html>



<!--//////////////////////////////////////////////////////////////////////////-->

<?php
// save image to server using jquery cod
if (isset($_POST["data"]) && !empty($_POST["data"])) {

  // get the image data
  $data = $_POST['data'];
  $data2 = $_POST['name'];
  // remove the prefix
  $uri =  substr($data, strpos($data, ",") + 1);
  // create a filename for the new image
  $destDirectory = "osaasto2/maanantai/";
  $file = $data2;
  // decode the image data and save it to file
  file_put_contents($destDirectory . $file, base64_decode($uri));
}
?>

<?php
// save image to server using jquery cod
if (isset($_POST["data2"]) && !empty($_POST["data2"])) {

  // get the image data
  $data = $_POST['data2'];
  $data2 = $_POST['name2'];
  // remove the prefix
  $uri =  substr($data, strpos($data, ",") + 1);
  // create a filename for the new image
  $destDirectory = "osaasto2/tiistai/";
  $file = $data2;
  // decode the image data and save it to file
  file_put_contents($destDirectory . $file, base64_decode($uri));
}
?>

<?php
// save image to server using jquery cod
if (isset($_POST["data3"]) && !empty($_POST["data3"])) {

  // get the image data
  $data = $_POST['data3'];
  $data2 = $_POST['name3'];
  // remove the prefix
  $uri =  substr($data, strpos($data, ",") + 1);
  // create a filename for the new image
  $destDirectory = "osaasto2/keskiviikko/";
  $file = $data2;
  // decode the image data and save it to file
  file_put_contents($destDirectory . $file, base64_decode($uri));
}
?>

<?php
// save image to server using jquery cod
if (isset($_POST["data4"]) && !empty($_POST["data4"])) {

  // get the image data
  $data = $_POST['data4'];
  $data2 = $_POST['name4'];
  // remove the prefix
  $uri =  substr($data, strpos($data, ",") + 1);
  // create a filename for the new image
  $destDirectory = "osaasto2/torstai/";
  $file = $data2;
  // decode the image data and save it to file
  file_put_contents($destDirectory . $file, base64_decode($uri));
}
?>

<?php
// save image to server using jquery cod
if (isset($_POST["data5"]) && !empty($_POST["data5"])) {

  // get the image data
  $data = $_POST['data5'];
  $data2 = $_POST['name5'];
  // remove the prefix
  $uri =  substr($data, strpos($data, ",") + 1);
  // create a filename for the new image
  $destDirectory = "osaasto2/perjantai/";
  $file = $data2;
  // decode the image data and save it to file
  file_put_contents($destDirectory . $file, base64_decode($uri));
}
?>

<?php
// save image to server using jquery cod
if (isset($_POST["data6"]) && !empty($_POST["data6"])) {

  // get the image data
  $data = $_POST['data6'];
  $data2 = $_POST['name6'];
  // remove the prefix
  $uri =  substr($data, strpos($data, ",") + 1);
  // create a filename for the new image
  $destDirectory = "osaasto2/lauantai/";
  $file = $data2;
  // decode the image data and save it to file
  file_put_contents($destDirectory . $file, base64_decode($uri));
}
?>

<?php
// save image to server using jquery cod
if (isset($_POST["data7"]) && !empty($_POST["data7"])) {

  // get the image data
  $data = $_POST['data7'];
  $data2 = $_POST['name7'];
  // remove the prefix
  $uri =  substr($data, strpos($data, ",") + 1);
  // create a filename for the new image
  $destDirectory = "osaasto2/sunnuntai/";
  $file = $data2;
  // decode the image data and save it to file
  file_put_contents($destDirectory . $file, base64_decode($uri));
}
?>