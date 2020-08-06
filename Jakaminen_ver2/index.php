<!DOCTYPE html>
<html>
<title>Osastot</title>
<link rel="shortcut icon" href=""> <!--otklanja bug u chrome browseru
ako  ovog nema u developerTools se pojavljuje greska-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
<script src="index.js" type="text/javascript"></script>
<link rel="stylesheet" type="text/css" href="index.css">

<body id="body" class="body">
  <label id=""></label>

  <label class="labelTitle">Osaastot/Konet</label>

  <div id="div1" class="div1">
    <div class="divForBt1">
      <label class="labelmsg1" id="labelmsg1">Viesti osaastolle 1</label>
      <label class="labelmsg2" id="labelmsg2">Viesti osaastolle 2</label>
      <label class="labelmsg3" id="labelmsg3">Viesti osaastolle 3</label>
      <label class="labelmsg4" id="labelmsg4">Viesti osaastolle 4</label>
      <label class="labelmsg5" id="labelmsg5">Viesti osaastolle 5</label>
      <label class="labelmsg6" id="labelmsg6">Viesti osaastolle 6</label>

      <label class="labelreceivemsg1" id="labelreceivemsg1">Viesti osaastolta 1</label>
      <label class="labelreceivemsg2" id="labelreceivemsg2">Viesti osaastolta 2</label>
      <label class="labelreceivemsg3" id="labelreceivemsg3">Viesti osaastolta 3</label>
      <label class="labelreceivemsg4" id="labelreceivemsg4">Viesti osaastolta 4</label>
      <label class="labelreceivemsg5" id="labelreceivemsg5">Viesti osaastolta 5</label>
      <label class="labelreceivemsg6" id="labelreceivemsg6">Viesti osaastolta 6</label>


      <textarea class="msg1" id="msg1" name="msg1"></textarea>
      <textarea class="msg2" id="msg2" name="msg2"></textarea>
      <textarea class="msg3" id="msg3" name="msg3"></textarea>
      <textarea class="msg4" id="msg4" name="msg4"></textarea>
      <textarea class="msg5" id="msg5" name="msg5"></textarea>
      <textarea class="msg6" id="msg6" name="msg6"></textarea>


      <textarea class="receivemsg1" id="receivemsg1"></textarea>
      <textarea class="receivemsg2" id="receivemsg2"></textarea>
      <textarea class="receivemsg3" id="receivemsg3"></textarea>
      <textarea class="receivemsg4" id="receivemsg4"></textarea>
      <textarea class="receivemsg5" id="receivemsg5"></textarea>
      <textarea class="receivemsg6" id="receivemsg6"></textarea>

      <input type="submit" id="sendmsg1" class="sendmsg1" value="Lähetä"></input>
      <input type="submit" id="sendmsg2" class="sendmsg2" value="Lähetä"></input>
      <input type="submit" id="sendmsg3" class="sendmsg3" value="Lähetä"></input>
      <input type="submit" id="sendmsg4" class="sendmsg4" value="Lähetä"></input>
      <input type="submit" id="sendmsg5" class="sendmsg5" value="Lähetä"></input>
      <input type="submit" id="sendmsg6" class="sendmsg6" value="Lähetä"></input>

      <input type="submit" id="msgok1" class="msgok1" value="OK"></input>
      <input type="submit" id="msgok2" class="msgok2" value="OK"></input>
      <input type="submit" id="msgok3" class="msgok3" value="OK"></input>
      <input type="submit" id="msgok4" class="msgok4" value="OK"></input>
      <input type="submit" id="msgok5" class="msgok5" value="OK"></input>
      <input type="submit" id="msgok6" class="msgok6" value="OK"></input>


      <!-- DROP ZONE -->
      <button id="bt1" class="buttons" name="bt1">Osaasto 1

        <!-- FALLBACK -->


      </button>
    </div>

    <div class="divForBt2">
      <!-- DROP ZONE -->
      <button id="bt2" class="buttons" name="bt2">Osaasto 2

        <!-- FALLBACK -->

      </button>
    </div>

    <div class="divForBt3">
      <!-- DROP ZONE -->
      <button id="bt3" class="buttons" name="bt3">Osaasto 3

        <!-- FALLBACK -->

      </button>
    </div>

    <div class="divForBt4">
      <!-- DROP ZONE -->
      <button id="bt4" class="buttons" name="bt4">Osaasto 4

        <!-- FALLBACK -->

      </button>
    </div>

    <div class="divForBt5">
      <!-- DROP ZONE -->
      <button id="bt5" class="buttons" name="bt5">Osaasto 5

        <!-- FALLBACK -->

      </button>
    </div>

    <div class="divForBt6">
      <!-- DROP ZONE -->
      <button id="bt6" class="buttons" name="bt6">Osaasto 6

        <!-- FALLBACK -->

      </button>
    </div>

  </div>
</body>

</html>

<!---drag drop form ajax index.js Osaasto 1,2,3,4,5,6 --->

<?php

if (isset($_FILES["osaasto1"]["tmp_name"])) {

  $source = $_FILES["osaasto1"]["tmp_name"];
  $destination = "osaasto1/" . $_FILES["osaasto1"]["name"];
  $error = "";

  // CHECK IF FILE ALREADY EXIST
  if (file_exists($destination)) {
    $error = $destination . " already exist.";
  }

  // ALL CHECKS OK - MOVE FILE
  if ($error == "") {
    if (!move_uploaded_file($source, $destination)) {
      $error = "Error moving $source to $destination";
    }
  }
}

///////////////////////////////////////////////2

if (isset($_FILES["osaasto2"]["tmp_name"])) {

  $source2 = $_FILES["osaasto2"]["tmp_name"];
  $destination2 = "osaasto2/" . $_FILES["osaasto2"]["name"];
  $error2 = "";

  // CHECK IF FILE ALREADY EXIST
  if (file_exists($destination2)) {
    $error2 = $destination2 . " already exist.";
  }

  // ALL CHECKS OK - MOVE FILE
  if ($error2 == "") {
    if (!move_uploaded_file($source2, $destination2)) {
      $error2 = "Error moving $source2 to $destination2";
    }
  }
}

///////////////////////////////////////////////3

if (isset($_FILES["osaasto3"]["tmp_name"])) {

  $source3 = $_FILES["osaasto3"]["tmp_name"];
  $destination3 = "osaasto3/" . $_FILES["osaasto3"]["name"];
  $error3 = "";

  // CHECK IF FILE ALREADY EXIST
  if (file_exists($destination3)) {
    $error3 = $destination3 . " already exist.";
  }

  // ALL CHECKS OK - MOVE FILE
  if ($error3 == "") {
    if (!move_uploaded_file($source3, $destination3)) {
      $error3 = "Error moving $source3 to $destination3";
    }
  }
}

///////////////////////////////////////////////4

if (isset($_FILES["osaasto4"]["tmp_name"])) {

  $source4 = $_FILES["osaasto4"]["tmp_name"];
  $destination4 = "osaasto4/" . $_FILES["osaasto4"]["name"];
  $error4 = "";

  // CHECK IF FILE ALREADY EXIST
  if (file_exists($destination4)) {
    $error4 = $destination4 . " already exist.";
  }

  // ALL CHECKS OK - MOVE FILE
  if ($error4 == "") {
    if (!move_uploaded_file($source4, $destination4)) {
      $error4 = "Error moving $source4 to $destination4";
    }
  }
}

///////////////////////////////////////////////5

if (isset($_FILES["osaasto5"]["tmp_name"])) {

  $source5 = $_FILES["osaasto5"]["tmp_name"];
  $destination5 = "osaasto5/" . $_FILES["osaasto5"]["name"];
  $error5 = "";

  // CHECK IF FILE ALREADY EXIST
  if (file_exists($destination5)) {
    $error5 = $destination5 . " already exist.";
  }

  // ALL CHECKS OK - MOVE FILE
  if ($error5 == "") {
    if (!move_uploaded_file($source5, $destination5)) {
      $error5 = "Error moving $source5 to $destination5";
    }
  }
}

///////////////////////////////////////////////6

if (isset($_FILES["osaasto6"]["tmp_name"])) {

  $source6 = $_FILES["osaasto6"]["tmp_name"];
  $destination6 = "osaasto6/" . $_FILES["osaasto6"]["name"];
  $error6 = "";

  // CHECK IF FILE ALREADY EXIST
  if (file_exists($destination6)) {
    $error6 = $destination6 . " already exist.";
  }

  // ALL CHECKS OK - MOVE FILE
  if ($error6 == "") {
    if (!move_uploaded_file($source6, $destination6)) {
      $error6 = "Error moving $source6 to $destination6";
    }
  }
}

?>

<?php

// post Ajax over index.php (move files with  prefix "MA" if exist ma,ti,ke,to,pe,la,su - osaato1,osaato2,osaato3,osaato4,osaato5,osaato6,)
if (isset($_POST['action']) && $_POST['action'] == "1") {

  //ako postoje failovi sa karakterom "ma" prebaci ih u drugi folder.to moze biti recimo maananatai,prefix je ma
  $fromDirectory1 = "osaasto1/MA*.*";
  $toDirectory1 = "osaasto1/maanantai/";
  $files1 = glob($fromDirectory1);
  foreach ($files1 as $file) {
    $baseName1 = basename($file);

    if (is_file($file)) {
      rename($file, $toDirectory1 . $baseName1);
    }
  }

  $fromDirectory2 = "osaasto1/TI*.*";
  $toDirectory2 = "osaasto1/tiistai/";
  $files2 = glob($fromDirectory2);
  foreach ($files2 as $file) {
    $baseName2 = basename($file);

    if (is_file($file)) {
      rename($file, $toDirectory2 . $baseName2);
    }
  }

  $fromDirectory3 = "osaasto1/KE*.*";
  $toDirectory3 = "osaasto1/keskiviikko/";
  $files3 = glob($fromDirectory3);
  foreach ($files3 as $file) {
    $baseName3 = basename($file);

    if (is_file($file)) {
      rename($file, $toDirectory3 . $baseName3);
    }
  }

  $fromDirectory4 = "osaasto1/TO*.*";
  $toDirectory4 = "osaasto1/torstai/";
  $files4 = glob($fromDirectory4);
  foreach ($files4 as $file) {
    $baseName4 = basename($file);

    if (is_file($file)) {
      rename($file, $toDirectory4 . $baseName4);
    }
  }

  $fromDirectory5 = "osaasto1/PE*.*";
  $toDirectory5 = "osaasto1/perjantai/";
  $files5 = glob($fromDirectory5);
  foreach ($files5 as $file) {
    $baseName5 = basename($file);

    if (is_file($file)) {
      rename($file, $toDirectory5 . $baseName5);
    }
  }

  $fromDirectory6 = "osaasto1/LA*.*";
  $toDirectory6 = "osaasto1/lauantai/";
  $files6 = glob($fromDirectory6);
  foreach ($files6 as $file) {
    $baseName6 = basename($file);

    if (is_file($file)) {
      rename($file, $toDirectory6 . $baseName6);
    }
  }

  $fromDirectory7 = "osaasto1/SU*.*";
  $toDirectory7 = "osaasto1/sunnuntai/";
  $files7 = glob($fromDirectory7);
  foreach ($files7 as $file) {
    $baseName7 = basename($file);

    if (is_file($file)) {
      rename($file, $toDirectory7 . $baseName7);
    }
  }
}

if (isset($_POST['action2']) && $_POST['action2'] == "1") {
  
 //ako postoje failovi sa karakterom "ma" prebaci ih u drugi folder.to moze biti recimo maananatai,prefix je ma
 $fromDirectory1 = "osaasto2/MA*.*";
 $toDirectory1 = "osaasto2/maanantai/";
 $files1 = glob($fromDirectory1);
 foreach ($files1 as $file) {
   $baseName1 = basename($file);

   if (is_file($file)) {
     rename($file, $toDirectory1 . $baseName1);
   }
 }

 $fromDirectory2 = "osaasto2/TI*.*";
 $toDirectory2 = "osaasto2/tiistai/";
 $files2 = glob($fromDirectory2);
 foreach ($files2 as $file) {
   $baseName2 = basename($file);

   if (is_file($file)) {
     rename($file, $toDirectory2 . $baseName2);
   }
 }

 $fromDirectory3 = "osaasto2/KE*.*";
 $toDirectory3 = "osaasto2/keskiviikko/";
 $files3 = glob($fromDirectory3);
 foreach ($files3 as $file) {
   $baseName3 = basename($file);

   if (is_file($file)) {
     rename($file, $toDirectory3 . $baseName3);
   }
 }

 $fromDirectory4 = "osaasto2/TO*.*";
 $toDirectory4 = "osaasto2/torstai/";
 $files4 = glob($fromDirectory4);
 foreach ($files4 as $file) {
   $baseName4 = basename($file);

   if (is_file($file)) {
     rename($file, $toDirectory4 . $baseName4);
   }
 }

 $fromDirectory5 = "osaasto2/PE*.*";
 $toDirectory5 = "osaasto2/perjantai/";
 $files5 = glob($fromDirectory5);
 foreach ($files5 as $file) {
   $baseName5 = basename($file);

   if (is_file($file)) {
     rename($file, $toDirectory5 . $baseName5);
   }
 }

 $fromDirectory6 = "osaasto2/LA*.*";
 $toDirectory6 = "osaasto2/lauantai/";
 $files6 = glob($fromDirectory6);
 foreach ($files6 as $file) {
   $baseName6 = basename($file);

   if (is_file($file)) {
     rename($file, $toDirectory6 . $baseName6);
   }
 }

 $fromDirectory7 = "osaasto2/SU*.*";
 $toDirectory7 = "osaasto2/sunnuntai/";
 $files7 = glob($fromDirectory7);
 foreach ($files7 as $file) {
   $baseName7 = basename($file);

   if (is_file($file)) {
     rename($file, $toDirectory7 . $baseName7);
   }
 }
  
}

if (isset($_POST['action3']) && $_POST['action3'] == "1") {
  
 //ako postoje failovi sa karakterom "ma" prebaci ih u drugi folder.to moze biti recimo maananatai,prefix je ma
 $fromDirectory1 = "osaasto3/MA*.*";
 $toDirectory1 = "osaasto3/maanantai/";
 $files1 = glob($fromDirectory1);
 foreach ($files1 as $file) {
   $baseName1 = basename($file);

   if (is_file($file)) {
     rename($file, $toDirectory1 . $baseName1);
   }
 }

 $fromDirectory2 = "osaasto3/TI*.*";
 $toDirectory2 = "osaasto3/tiistai/";
 $files2 = glob($fromDirectory2);
 foreach ($files2 as $file) {
   $baseName2 = basename($file);

   if (is_file($file)) {
     rename($file, $toDirectory2 . $baseName2);
   }
 }

 $fromDirectory3 = "osaasto3/KE*.*";
 $toDirectory3 = "osaasto3/keskiviikko/";
 $files3 = glob($fromDirectory3);
 foreach ($files3 as $file) {
   $baseName3 = basename($file);

   if (is_file($file)) {
     rename($file, $toDirectory3 . $baseName3);
   }
 }

 $fromDirectory4 = "osaasto3/TO*.*";
 $toDirectory4 = "osaasto3/torstai/";
 $files4 = glob($fromDirectory4);
 foreach ($files4 as $file) {
   $baseName4 = basename($file);

   if (is_file($file)) {
     rename($file, $toDirectory4 . $baseName4);
   }
 }

 $fromDirectory5 = "osaasto3/PE*.*";
 $toDirectory5 = "osaasto3/perjantai/";
 $files5 = glob($fromDirectory5);
 foreach ($files5 as $file) {
   $baseName5 = basename($file);

   if (is_file($file)) {
     rename($file, $toDirectory5 . $baseName5);
   }
 }

 $fromDirectory6 = "osaasto3/LA*.*";
 $toDirectory6 = "osaasto3/lauantai/";
 $files6 = glob($fromDirectory6);
 foreach ($files6 as $file) {
   $baseName6 = basename($file);

   if (is_file($file)) {
     rename($file, $toDirectory6 . $baseName6);
   }
 }

 $fromDirectory7 = "osaasto3/SU*.*";
 $toDirectory7 = "osaasto3/sunnuntai/";
 $files7 = glob($fromDirectory7);
 foreach ($files7 as $file) {
   $baseName7 = basename($file);

   if (is_file($file)) {
     rename($file, $toDirectory7 . $baseName7);
   }
 }
  
}

if (isset($_POST['action4']) && $_POST['action4'] == "1") {
  
  //ako postoje failovi sa karakterom "ma" prebaci ih u drugi folder.to moze biti recimo maananatai,prefix je ma
  $fromDirectory1 = "osaasto4/MA*.*";
  $toDirectory1 = "osaasto4/maanantai/";
  $files1 = glob($fromDirectory1);
  foreach ($files1 as $file) {
    $baseName1 = basename($file);

    if (is_file($file)) {
      rename($file, $toDirectory1 . $baseName1);
    }
  }

  $fromDirectory2 = "osaasto4/TI*.*";
  $toDirectory2 = "osaasto4/tiistai/";
  $files2 = glob($fromDirectory2);
  foreach ($files2 as $file) {
    $baseName2 = basename($file);

    if (is_file($file)) {
      rename($file, $toDirectory2 . $baseName2);
    }
  }

  $fromDirectory3 = "osaasto4/KE*.*";
  $toDirectory3 = "osaasto4/keskiviikko/";
  $files3 = glob($fromDirectory3);
  foreach ($files3 as $file) {
    $baseName3 = basename($file);

    if (is_file($file)) {
      rename($file, $toDirectory3 . $baseName3);
    }
  }

  $fromDirectory4 = "osaasto4/TO*.*";
  $toDirectory4 = "osaasto4/torstai/";
  $files4 = glob($fromDirectory4);
  foreach ($files4 as $file) {
    $baseName4 = basename($file);

    if (is_file($file)) {
      rename($file, $toDirectory4 . $baseName4);
    }
  }

  $fromDirectory5 = "osaasto4/PE*.*";
  $toDirectory5 = "osaasto4/perjantai/";
  $files5 = glob($fromDirectory5);
  foreach ($files5 as $file) {
    $baseName5 = basename($file);

    if (is_file($file)) {
      rename($file, $toDirectory5 . $baseName5);
    }
  }

  $fromDirectory6 = "osaasto4/LA*.*";
  $toDirectory6 = "osaasto4/lauantai/";
  $files6 = glob($fromDirectory6);
  foreach ($files6 as $file) {
    $baseName6 = basename($file);

    if (is_file($file)) {
      rename($file, $toDirectory6 . $baseName6);
    }
  }

  $fromDirectory7 = "osaasto4/SU*.*";
  $toDirectory7 = "osaasto4/sunnuntai/";
  $files7 = glob($fromDirectory7);
  foreach ($files7 as $file) {
    $baseName7 = basename($file);

    if (is_file($file)) {
      rename($file, $toDirectory7 . $baseName7);
    }
  }
  
}

if (isset($_POST['action5']) && $_POST['action5'] == "1") {
  
  //ako postoje failovi sa karakterom "ma" prebaci ih u drugi folder.to moze biti recimo maananatai,prefix je ma
  $fromDirectory1 = "osaasto5/MA*.*";
  $toDirectory1 = "osaasto5/maanantai/";
  $files1 = glob($fromDirectory1);
  foreach ($files1 as $file) {
    $baseName1 = basename($file);

    if (is_file($file)) {
      rename($file, $toDirectory1 . $baseName1);
    }
  }

  $fromDirectory2 = "osaasto5/TI*.*";
  $toDirectory2 = "osaasto5/tiistai/";
  $files2 = glob($fromDirectory2);
  foreach ($files2 as $file) {
    $baseName2 = basename($file);

    if (is_file($file)) {
      rename($file, $toDirectory2 . $baseName2);
    }
  }

  $fromDirectory3 = "osaasto5/KE*.*";
  $toDirectory3 = "osaasto5/keskiviikko/";
  $files3 = glob($fromDirectory3);
  foreach ($files3 as $file) {
    $baseName3 = basename($file);

    if (is_file($file)) {
      rename($file, $toDirectory3 . $baseName3);
    }
  }

  $fromDirectory4 = "osaasto5/TO*.*";
  $toDirectory4 = "osaasto5/torstai/";
  $files4 = glob($fromDirectory4);
  foreach ($files4 as $file) {
    $baseName4 = basename($file);

    if (is_file($file)) {
      rename($file, $toDirectory4 . $baseName4);
    }
  }

  $fromDirectory5 = "osaasto5/PE*.*";
  $toDirectory5 = "osaasto5/perjantai/";
  $files5 = glob($fromDirectory5);
  foreach ($files5 as $file) {
    $baseName5 = basename($file);

    if (is_file($file)) {
      rename($file, $toDirectory5 . $baseName5);
    }
  }

  $fromDirectory6 = "osaasto5/LA*.*";
  $toDirectory6 = "osaasto5/lauantai/";
  $files6 = glob($fromDirectory6);
  foreach ($files6 as $file) {
    $baseName6 = basename($file);

    if (is_file($file)) {
      rename($file, $toDirectory6 . $baseName6);
    }
  }

  $fromDirectory7 = "osaasto5/SU*.*";
  $toDirectory7 = "osaasto5/sunnuntai/";
  $files7 = glob($fromDirectory7);
  foreach ($files7 as $file) {
    $baseName7 = basename($file);

    if (is_file($file)) {
      rename($file, $toDirectory7 . $baseName7);
    }
  }
  
}

if (isset($_POST['action6']) && $_POST['action6'] == "1") {
  
 //ako postoje failovi sa karakterom "ma" prebaci ih u drugi folder.to moze biti recimo maananatai,prefix je ma
 $fromDirectory1 = "osaasto6/MA*.*";
 $toDirectory1 = "osaasto6/maanantai/";
 $files1 = glob($fromDirectory1);
 foreach ($files1 as $file) {
   $baseName1 = basename($file);

   if (is_file($file)) {
     rename($file, $toDirectory1 . $baseName1);
   }
 }

 $fromDirectory2 = "osaasto6/TI*.*";
 $toDirectory2 = "osaasto6/tiistai/";
 $files2 = glob($fromDirectory2);
 foreach ($files2 as $file) {
   $baseName2 = basename($file);

   if (is_file($file)) {
     rename($file, $toDirectory2 . $baseName2);
   }
 }

 $fromDirectory3 = "osaasto6/KE*.*";
 $toDirectory3 = "osaasto6/keskiviikko/";
 $files3 = glob($fromDirectory3);
 foreach ($files3 as $file) {
   $baseName3 = basename($file);

   if (is_file($file)) {
     rename($file, $toDirectory3 . $baseName3);
   }
 }

 $fromDirectory4 = "osaasto6/TO*.*";
 $toDirectory4 = "osaasto6/torstai/";
 $files4 = glob($fromDirectory4);
 foreach ($files4 as $file) {
   $baseName4 = basename($file);

   if (is_file($file)) {
     rename($file, $toDirectory4 . $baseName4);
   }
 }

 $fromDirectory5 = "osaasto6/PE*.*";
 $toDirectory5 = "osaasto6/perjantai/";
 $files5 = glob($fromDirectory5);
 foreach ($files5 as $file) {
   $baseName5 = basename($file);

   if (is_file($file)) {
     rename($file, $toDirectory5 . $baseName5);
   }
 }

 $fromDirectory6 = "osaasto6/LA*.*";
 $toDirectory6 = "osaasto6/lauantai/";
 $files6 = glob($fromDirectory6);
 foreach ($files6 as $file) {
   $baseName6 = basename($file);

   if (is_file($file)) {
     rename($file, $toDirectory6 . $baseName6);
   }
 }

 $fromDirectory7 = "osaasto6/SU*.*";
 $toDirectory7 = "osaasto6/sunnuntai/";
 $files7 = glob($fromDirectory7);
 foreach ($files7 as $file) {
   $baseName7 = basename($file);

   if (is_file($file)) {
     rename($file, $toDirectory7 . $baseName7);
   }
 }
  
}


?>