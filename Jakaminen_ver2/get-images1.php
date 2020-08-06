<!--list  files from directorie in to listBox "listOfallListBox"  -->
<?php
if (isset($_POST['dir'])) {
   $dir = $_POST['dir'];
   $files = glob($dir . '*');
   foreach ($files as $file) {
      echo '<option data-dir="' . $dir . '">' . pathinfo($file, PATHINFO_BASENAME) . '</option>';
   }
}
?>

<!--list  files from directorie in to ma,ti,ke,to,pe,la,su -->
<?php

if (isset($_POST['dir1'])) {
   $dir1 = $_POST['dir1'];
   $files1 = glob($dir1 . '*');
   foreach ($files1 as $file) {
      echo '<option data-dir="' . $dir1 . '">' . pathinfo($file, PATHINFO_BASENAME) . '</option>';
   }
}
if (isset($_POST['dir2'])) {
   $dir2 = $_POST['dir2'];
   $files2 = glob($dir2 . '*');
   foreach ($files2 as $file) {
      echo '<option data-dir="' . $dir2 . '">' . pathinfo($file, PATHINFO_BASENAME) . '</option>';
   }
}

if (isset($_POST['dir3'])) {
   $dir3 = $_POST['dir3'];
   $files3 = glob($dir3 . '*');
   foreach ($files3 as $file) {
      echo '<option data-dir="' . $dir3 . '">' . pathinfo($file, PATHINFO_BASENAME) . '</option>';
   }
}
if (isset($_POST['dir4'])) {
   $dir4 = $_POST['dir4'];
   $files4 = glob($dir4 . '*');
   foreach ($files4 as $file) {
      echo '<option data-dir="' . $dir4 . '">' . pathinfo($file, PATHINFO_BASENAME) . '</option>';
   }
}

if (isset($_POST['dir5'])) {
   $dir5 = $_POST['dir5'];
   $files5 = glob($dir5 . '*');
   foreach ($files5 as $file) {
      echo '<option data-dir="' . $dir5 . '">' . pathinfo($file, PATHINFO_BASENAME) . '</option>';
   }
}

if (isset($_POST['dir6'])) {
   $dir6 = $_POST['dir6'];
   $files6 = glob($dir6 . '*');
   foreach ($files6 as $file) {
      echo '<option data-dir="' . $dir6 . '">' . pathinfo($file, PATHINFO_BASENAME) . '</option>';
   }
}

if (isset($_POST['dir7'])) {
   $dir7 = $_POST['dir7'];
   $files7 = glob($dir7 . '*');
   foreach ($files7 as $file) {
      echo '<option data-dir="' . $dir7 . '">' . pathinfo($file, PATHINFO_BASENAME) . '</option>';
   }
}
?>