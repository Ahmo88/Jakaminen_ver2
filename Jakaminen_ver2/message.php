
<?php

if (isset($_POST['action']) && $_POST['action'] == "1") {
 // if osaasto1 contain file with prefix "ma" move it in another directory 
$fromDirectory = "osaasto1/ma*.*"; 
$toDirectory="osaasto1/maanantai/";
$files = glob($fromDirectory);  
foreach($files as $file) { 
  $baseName=basename($file);
   
    if(is_file($file))  {
      rename($file ,$toDirectory.$baseName);
         
} 
}
// if osaasto1 contain file with prefix "ti" move it in another directory 
$fromDirectory2 = "osaasto2/ma*.*"; 
$toDirectory2="osaasto2/maanantai/";
$files2 = glob($fromDirectory2);  
foreach($files2 as $file2) { 
  $baseName2=basename($file2);
   
    if(is_file($file2))  {
      rename($file2,$toDirectory2.$baseName2);
         
} 
}

}

?>
<!----------------------------------------------------------------------------->
<!--this is messages from server index.js-->
<?php 
//save file from textBox in to file 
if (isset($_POST['value1'])){
    $text1 = $_POST['value1'];
    $filename ="messages/osaastot/receivemsg1.txt";
    $file = fopen( $filename, "w" );
    fwrite( $file, $text1);
    fclose( $file );
    }
    ?>
 
 <?php
//save file from textBox in to file 
if (isset($_POST['value2'])){
    $text1 = $_POST['value2'];
    $filename ="messages/osaastot/receivemsg2.txt";
    $file = fopen( $filename, "w" );
    fwrite( $file, $text1);
    fclose( $file );
    }

?>

<?php
//save file from textBox in to file 
if (isset($_POST['value3'])){
    $text1 = $_POST['value3'];
    $filename ="messages/osaastot/receivemsg3.txt";
    $file = fopen( $filename, "w" );
    fwrite( $file, $text1);
    fclose( $file );
    }

?>

<?php
//save file from textBox in to file 
if (isset($_POST['value4'])){
    $text1 = $_POST['value4'];
    $filename ="messages/osaastot/receivemsg4.txt";
    $file = fopen( $filename, "w" );
    fwrite( $file, $text1);
    fclose( $file );
    }

?>

<?php
//save file from textBox in to file 
if (isset($_POST['value5'])){
    $text1 = $_POST['value5'];
    $filename ="messages/osaastot/receivemsg5.txt";
    $file = fopen( $filename, "w" );
    fwrite( $file, $text1);
    fclose( $file );
    }

?>

<?php
//save file from textBox in to file 
if (isset($_POST['value6'])){
    $text1 = $_POST['value6'];
    $filename ="messages/osaastot/receivemsg6.txt";
    $file = fopen( $filename, "w" );
    fwrite( $file, $text1);
    fclose( $file );
    }

?>

<!----------------------------------------------------------------------------->
<!--this is messenger from osaasto1-->
<?php
//save file from textBox in to file 
if (isset($_POST['valueClient1'])){
    $text1 = $_POST['valueClient1'];
    $filename ="messages/osaastot/receivemsg1ForServer.txt";
    $file = fopen( $filename, "w" );
    fwrite( $file, $text1);
    fclose( $file );
    }

?>

<?php
//save file from textBox in to file 
if (isset($_POST['valueClient2'])){
    $text1 = $_POST['valueClient2'];
    $filename ="messages/osaastot/receivemsg2ForServer.txt";
    $file = fopen( $filename, "w" );
    fwrite( $file, $text1);
    fclose( $file );
    }

?>

<?php
//save file from textBox in to file 
if (isset($_POST['valueClient3'])){
    $text1 = $_POST['valueClient3'];
    $filename ="messages/osaastot/receivemsg3ForServer.txt";
    $file = fopen( $filename, "w" );
    fwrite( $file, $text1);
    fclose( $file );
    }

?>

<?php
//save file from textBox in to file 
if (isset($_POST['valueClient4'])){
    $text1 = $_POST['valueClient4'];
    $filename ="messages/osaastot/receivemsg4ForServer.txt";
    $file = fopen( $filename, "w" );
    fwrite( $file, $text1);
    fclose( $file );
    }

?>

<?php
//save file from textBox in to file 
if (isset($_POST['valueClient5'])){
    $text1 = $_POST['valueClient5'];
    $filename ="messages/osaastot/receivemsg5ForServer.txt";
    $file = fopen( $filename, "w" );
    fwrite( $file, $text1);
    fclose( $file );
    }

?>

<?php
//save file from textBox in to file 
if (isset($_POST['valueClient6'])){
    $text1 = $_POST['valueClient6'];
    $filename ="messages/osaastot/receivemsg6ForServer.txt";
    $file = fopen( $filename, "w" );
    fwrite( $file, $text1);
    fclose( $file );
    }

?>


