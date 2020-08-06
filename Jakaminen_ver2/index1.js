
///<reference path="E:/Jakaminen_ver2/node_modules/@types/jquery/index.d.ts" />

/*
//timer 
window.setInterval(function(){
 
}, 5000);
*/

window.onload = function () {
 
  var oDateTrigger = new Date("08/01/2020");
  var oToday = new Date();
  if (oToday < oDateTrigger) {

    $(".div1").hide().fadeIn(2000);
   
  }
  else {
    // alert("Sovellus on erääntynyt.Ota yhteyttä( programiranjesaahmom@hotmail.com)");

    $("#div1").hide();
   
    $("body").html("<div><h1>Sovellus on erääntynyt. Ota yhteyttä ( tjakaminen@gmail.com )</h1></div>");
  }

};

// open osaasto1.php in new page
$(function () {

  $("#bt1").click(function (e) {

    open("osaasto1.php");

    
  });
});

// open osaasto2.php in new page
$(function () {

  $("#bt2").click(function (e) {

    open("osaasto2.php");

    
  });
});


// open osaasto3.php in new page
$(function () {

  $("#bt3").click(function (e) {

    open("osaasto3.php");

    
  });
});

// open osaasto4.php in new page
$(function () {

  $("#bt4").click(function (e) {

    open("osaasto4.php");

    
  });
});

// open osaasto5.php in new page
$(function () {

  $("#bt5").click(function (e) {

    open("osaasto5.php");

    
  });
});

// open osaasto6.php in new page
$(function () {

  $("#bt6").click(function (e) {

    open("osaasto6.php");

    
  });
});


//osaasto1
////////////////////////////////////////////////////////////////////////
/* !! UPDATE : AJAX IS ASYNCHRONOUS !! */
/* We do not want users to dump 100 files & upload all at the same time */
/* This will create sort of a queue system & upload one at a time */
$(function (e) {
  var upcontrol = {
    queue: null, // upload queue
    now: 0, // current file being uploaded
    start: function (files) {
      // upcontrol.start() : start upload queue

      // WILL ONLY START IF NO EXISTING UPLOAD QUEUE
      if (upcontrol.queue == null) {
        // VISUAL - DISABLE UPLOAD UNTIL DONE
        upcontrol.queue = files;
        document.getElementById('bt1').classList.add('disabled');

        // PROCESS UPLOAD - ONE BY ONE
        upcontrol.run();
      }
    },
    run: function () {
      // upcontrol.run() : proceed upload file

      var xhr = new XMLHttpRequest(),
        data = new FormData();
      data.append('osaasto1', upcontrol.queue[upcontrol.now]);

      // @TODO - ADD MORE POST DATA IF YOU WANT
      // data.append("foo", "bar");

      xhr.open('POST', 'index.php', true);
      xhr.onload = function () {

        // UPLOAD NEXT FILE
        upcontrol.now++;
        if (upcontrol.now < upcontrol.queue.length) {
          upcontrol.run();
        }
        // ALL DONE
        else {
          upcontrol.now = 0;
          upcontrol.queue = null;
          document.getElementById('bt1').classList.remove('disabled');
          // location.reload();

        }
      };
      xhr.send(data);
    }
  };


  // [THE ELEMENTS] 
  var uploader = document.getElementById('bt1');

  // [VISUAL - HIGHLIGHT DROP ZONE ON HOVER] 
  uploader.addEventListener("dragenter", function (e) {
    uploader.classList.add('highlight');
    e.preventDefault();
    e.stopPropagation();

  });
  uploader.addEventListener("dragleave", function (e) {
    uploader.classList.remove('highlight');
    e.preventDefault();
    e.stopPropagation();

  });

  // [UPLOAD MECHANICS] 
  // STOP THE DEFAULT BROWSER ACTION FROM OPENING THE FILE
  uploader.addEventListener("dragover", function (e) {
    e.preventDefault();
    e.stopPropagation();
  });

  // ADD OUR OWN UPLOAD ACTION
  uploader.addEventListener("drop", function (e) {
    uploader.classList.remove('highlight');
    e.preventDefault();
    e.stopPropagation();

    upcontrol.start(e.dataTransfer.files);
  });

  // FALLBACK - HIDE DROP ZONE IF DRAG-DROP UPLOAD NOT SUPPORTED

  e.preventDefault();
  
});

//osaasto2
/* !! UPDATE : AJAX IS ASYNCHRONOUS !! */
/* We do not want users to dump 100 files & upload all at the same time */
/* This will create sort of a queue system & upload one at a time */
$(function (e) {
  var upcontrol = {
    queue: null, // upload queue
    now: 0, // current file being uploaded
    start: function (files) {
      // upcontrol.start() : start upload queue

      // WILL ONLY START IF NO EXISTING UPLOAD QUEUE
      if (upcontrol.queue == null) {
        // VISUAL - DISABLE UPLOAD UNTIL DONE
        upcontrol.queue = files;
        document.getElementById('bt2').classList.add('disabled');

        // PROCESS UPLOAD - ONE BY ONE
        upcontrol.run();
      }
    },
    run: function () {
      // upcontrol.run() : proceed upload file

      var xhr = new XMLHttpRequest(),
        data = new FormData();
      data.append('osaasto2', upcontrol.queue[upcontrol.now]);

      // @TODO - ADD MORE POST DATA IF YOU WANT
      // data.append("foo", "bar");

      xhr.open('POST', 'index.php', true);
      xhr.onload = function () {

        // UPLOAD NEXT FILE
        upcontrol.now++;
        if (upcontrol.now < upcontrol.queue.length) {
          upcontrol.run();
        }
        // ALL DONE
        else {
          upcontrol.now = 0;
          upcontrol.queue = null;
          document.getElementById('bt2').classList.remove('disabled'); a
          // location.reload();

        }
      };
      xhr.send(data);
    }
  };


  // [THE ELEMENTS] 
  var uploader = document.getElementById('bt2');

  // [VISUAL - HIGHLIGHT DROP ZONE ON HOVER] 
  uploader.addEventListener("dragenter", function (e) {
    uploader.classList.add('highlight');
    
    e.stopPropagation();

  });
  uploader.addEventListener("dragleave", function (e) {
    uploader.classList.remove('highlight');
    
    e.stopPropagation();

  });

  // [UPLOAD MECHANICS] 
  // STOP THE DEFAULT BROWSER ACTION FROM OPENING THE FILE
  uploader.addEventListener("dragover", function (e) {
    
    e.stopPropagation();
  });

  // ADD OUR OWN UPLOAD ACTION
  uploader.addEventListener("drop", function (e) {
    uploader.classList.remove('highlight');
    
    e.stopPropagation();
    upcontrol.start(e.dataTransfer.files);
  });

  // FALLBACK - HIDE DROP ZONE IF DRAG-DROP UPLOAD NOT SUPPORTED

  
});

//osaasto3
/* !! UPDATE : AJAX IS ASYNCHRONOUS !! */
/* We do not want users to dump 100 files & upload all at the same time */
/* This will create sort of a queue system & upload one at a time */
$(function (e) {
  var upcontrol = {
    queue: null, // upload queue
    now: 0, // current file being uploaded
    start: function (files) {
      // upcontrol.start() : start upload queue

      // WILL ONLY START IF NO EXISTING UPLOAD QUEUE
      if (upcontrol.queue == null) {
        // VISUAL - DISABLE UPLOAD UNTIL DONE
        upcontrol.queue = files;
        document.getElementById('bt3').classList.add('disabled');

        // PROCESS UPLOAD - ONE BY ONE
        upcontrol.run();
      }
    },
    run: function () {
      // upcontrol.run() : proceed upload file

      var xhr = new XMLHttpRequest(),
        data = new FormData();
      data.append('osaasto3', upcontrol.queue[upcontrol.now]);

      // @TODO - ADD MORE POST DATA IF YOU WANT
      // data.append("foo", "bar");

      xhr.open('POST', 'index.php', true);
      xhr.onload = function () {

        // UPLOAD NEXT FILE
        upcontrol.now++;
        if (upcontrol.now < upcontrol.queue.length) {
          upcontrol.run();
        }
        // ALL DONE
        else {
          upcontrol.now = 0;
          upcontrol.queue = null;
          document.getElementById('bt3').classList.remove('disabled'); a
          // location.reload();

        }
      };
      xhr.send(data);
    }
  };


  // [THE ELEMENTS] 
  var uploader = document.getElementById('bt3');

  // [VISUAL - HIGHLIGHT DROP ZONE ON HOVER] 
  uploader.addEventListener("dragenter", function (e) {
    uploader.classList.add('highlight');
    
    e.stopPropagation();

  });
  uploader.addEventListener("dragleave", function (e) {
    uploader.classList.remove('highlight');
    
    e.stopPropagation();

  });

  // [UPLOAD MECHANICS] 
  // STOP THE DEFAULT BROWSER ACTION FROM OPENING THE FILE
  uploader.addEventListener("dragover", function (e) {
    
    e.stopPropagation();
  });

  // ADD OUR OWN UPLOAD ACTION
  uploader.addEventListener("drop", function (e) {
    uploader.classList.remove('highlight');
    
    e.stopPropagation();
    upcontrol.start(e.dataTransfer.files);
  });

  // FALLBACK - HIDE DROP ZONE IF DRAG-DROP UPLOAD NOT SUPPORTED

  
});

//osaasto4
/* !! UPDATE : AJAX IS ASYNCHRONOUS !! */
/* We do not want users to dump 100 files & upload all at the same time */
/* This will create sort of a queue system & upload one at a time */
$(function (e) {
  var upcontrol = {
    queue: null, // upload queue
    now: 0, // current file being uploaded
    start: function (files) {
      // upcontrol.start() : start upload queue

      // WILL ONLY START IF NO EXISTING UPLOAD QUEUE
      if (upcontrol.queue == null) {
        // VISUAL - DISABLE UPLOAD UNTIL DONE
        upcontrol.queue = files;
        document.getElementById('bt4').classList.add('disabled');

        // PROCESS UPLOAD - ONE BY ONE
        upcontrol.run();
      }
    },
    run: function () {
      // upcontrol.run() : proceed upload file

      var xhr = new XMLHttpRequest(),
        data = new FormData();
      data.append('osaasto4', upcontrol.queue[upcontrol.now]);

      // @TODO - ADD MORE POST DATA IF YOU WANT
      // data.append("foo", "bar");

      xhr.open('POST', 'index.php', true);
      xhr.onload = function () {

        // UPLOAD NEXT FILE
        upcontrol.now++;
        if (upcontrol.now < upcontrol.queue.length) {
          upcontrol.run();
        }
        // ALL DONE
        else {
          upcontrol.now = 0;
          upcontrol.queue = null;
          document.getElementById('bt4').classList.remove('disabled'); a
          // location.reload();

        }
      };
      xhr.send(data);
    }
  };


  // [THE ELEMENTS] 
  var uploader = document.getElementById('bt4');

  // [VISUAL - HIGHLIGHT DROP ZONE ON HOVER] 
  uploader.addEventListener("dragenter", function (e) {
    uploader.classList.add('highlight');
    
    e.stopPropagation();

  });
  uploader.addEventListener("dragleave", function (e) {
    uploader.classList.remove('highlight');
    
    e.stopPropagation();

  });

  // [UPLOAD MECHANICS] 
  // STOP THE DEFAULT BROWSER ACTION FROM OPENING THE FILE
  uploader.addEventListener("dragover", function (e) {
    
    e.stopPropagation();
  });

  // ADD OUR OWN UPLOAD ACTION
  uploader.addEventListener("drop", function (e) {
    uploader.classList.remove('highlight');
    
    e.stopPropagation();
    upcontrol.start(e.dataTransfer.files);
  });

  // FALLBACK - HIDE DROP ZONE IF DRAG-DROP UPLOAD NOT SUPPORTED

  
});

//osaasto5
/* !! UPDATE : AJAX IS ASYNCHRONOUS !! */
/* We do not want users to dump 100 files & upload all at the same time */
/* This will create sort of a queue system & upload one at a time */
$(function (e) {
  var upcontrol = {
    queue: null, // upload queue
    now: 0, // current file being uploaded
    start: function (files) {
      // upcontrol.start() : start upload queue

      // WILL ONLY START IF NO EXISTING UPLOAD QUEUE
      if (upcontrol.queue == null) {
        // VISUAL - DISABLE UPLOAD UNTIL DONE
        upcontrol.queue = files;
        document.getElementById('bt5').classList.add('disabled');

        // PROCESS UPLOAD - ONE BY ONE
        upcontrol.run();
      }
    },
    run: function () {
      // upcontrol.run() : proceed upload file

      var xhr = new XMLHttpRequest(),
        data = new FormData();
      data.append('osaasto5', upcontrol.queue[upcontrol.now]);

      // @TODO - ADD MORE POST DATA IF YOU WANT
      // data.append("foo", "bar");

      xhr.open('POST', 'index.php', true);
      xhr.onload = function () {

        // UPLOAD NEXT FILE
        upcontrol.now++;
        if (upcontrol.now < upcontrol.queue.length) {
          upcontrol.run();
        }
        // ALL DONE
        else {
          upcontrol.now = 0;
          upcontrol.queue = null;
          document.getElementById('bt5').classList.remove('disabled'); a
          // location.reload();

        }
      };
      xhr.send(data);
    }
  };


  // [THE ELEMENTS] 
  var uploader = document.getElementById('bt5');

  // [VISUAL - HIGHLIGHT DROP ZONE ON HOVER] 
  uploader.addEventListener("dragenter", function (e) {
    uploader.classList.add('highlight');
    
    e.stopPropagation();

  });
  uploader.addEventListener("dragleave", function (e) {
    uploader.classList.remove('highlight');
    
    e.stopPropagation();

  });

  // [UPLOAD MECHANICS] 
  // STOP THE DEFAULT BROWSER ACTION FROM OPENING THE FILE
  uploader.addEventListener("dragover", function (e) {
    
    e.stopPropagation();
  });

  // ADD OUR OWN UPLOAD ACTION
  uploader.addEventListener("drop", function (e) {
    uploader.classList.remove('highlight');
    
    e.stopPropagation();
    upcontrol.start(e.dataTransfer.files);
  });

  // FALLBACK - HIDE DROP ZONE IF DRAG-DROP UPLOAD NOT SUPPORTED

  
});

//osaasto6
/* !! UPDATE : AJAX IS ASYNCHRONOUS !! */
/* We do not want users to dump 100 files & upload all at the same time */
/* This will create sort of a queue system & upload one at a time */
$(function (e) {
  var upcontrol = {
    queue: null, // upload queue
    now: 0, // current file being uploaded
    start: function (files) {
      // upcontrol.start() : start upload queue

      // WILL ONLY START IF NO EXISTING UPLOAD QUEUE
      if (upcontrol.queue == null) {
        // VISUAL - DISABLE UPLOAD UNTIL DONE
        upcontrol.queue = files;
        document.getElementById('bt6').classList.add('disabled');

        // PROCESS UPLOAD - ONE BY ONE
        upcontrol.run();
      }
    },
    run: function () {
      // upcontrol.run() : proceed upload file

      var xhr = new XMLHttpRequest(),
        data = new FormData();
      data.append('osaasto6', upcontrol.queue[upcontrol.now]);

      // @TODO - ADD MORE POST DATA IF YOU WANT
      // data.append("foo", "bar");

      xhr.open('POST', 'index.php', true);
      xhr.onload = function () {

        // UPLOAD NEXT FILE
        upcontrol.now++;
        if (upcontrol.now < upcontrol.queue.length) {
          upcontrol.run();
        }
        // ALL DONE
        else {
          upcontrol.now = 0;
          upcontrol.queue = null;
          document.getElementById('bt6').classList.remove('disabled'); a
          // location.reload();

        }
      };
      xhr.send(data);
    }
  };


  // [THE ELEMENTS] 
  var uploader = document.getElementById('bt6');

  // [VISUAL - HIGHLIGHT DROP ZONE ON HOVER] 
  uploader.addEventListener("dragenter", function (e) {
    uploader.classList.add('highlight');
    
    e.stopPropagation();

  });
  uploader.addEventListener("dragleave", function (e) {
    uploader.classList.remove('highlight');
    
    e.stopPropagation();

  });

  // [UPLOAD MECHANICS] 
  // STOP THE DEFAULT BROWSER ACTION FROM OPENING THE FILE
  uploader.addEventListener("dragover", function (e) {
    
    e.stopPropagation();
  });

  // ADD OUR OWN UPLOAD ACTION
  uploader.addEventListener("drop", function (e) {
    uploader.classList.remove('highlight');
    
    e.stopPropagation();
    upcontrol.start(e.dataTransfer.files);
  });

  // FALLBACK - HIDE DROP ZONE IF DRAG-DROP UPLOAD NOT SUPPORTED

  
});

//////////////////////////////////////////////////////////////////////
// post value from textBox msg1 over index.php in to msg1.txt file
$(function () {

  $("#sendmsg1").click(function (e) {
    var dataset = { "value1": document.getElementById('msg1').value };
    $.ajax({
      url: 'message.php',
      type: 'POST',
      data: dataset,
      success: function () {
        $('#msg1').val('');
        alert("osaasto1 ilmoitettu");

      }

    });
    
  });

});
$(function () {
  $("#sendmsg2").click(function (e) {
    var dataset = { "value2": document.getElementById('msg2').value };
    $.ajax({
      url: 'message.php',
      type: 'POST',
      data: dataset, success: function () {
        $('#msg2').val('');
        $('#msg2').val(''); alert("osaasto2 ilmoitettu");

      }

    });
    
  });

});
$(function () {
  $("#sendmsg3").click(function (e) {
    var dataset = { "value3": document.getElementById('msg3').value };
    $.ajax({
      url: 'message.php',
      type: 'POST',
      data: dataset, success: function () {
        $('#msg3').val('');
        alert("osaasto3 ilmoitettu");
      }

    });
    
  });

});
$(function () {
  $("#sendmsg4").click(function (e) {
    var dataset = { "value4": document.getElementById('msg4').value };
    $.ajax({
      url: 'message.php',
      type: 'POST',
      data: dataset, success: function () {
        $('#msg4').val('');
        alert("osaasto4 ilmoitettu");

      }

    });
    
  });

});
$(function () {
  $("#sendmsg5").click(function (e) {
    var dataset = { "value5": document.getElementById('msg5').value };
    $.ajax({
      url: 'message.php',
      type: 'POST',
      data: dataset, success: function () {
        $('#msg5').val('');
        alert("osaasto5 ilmoitettu");
      }

    });
    
  });

});
$(function () {
  $("#sendmsg6").click(function (e) {
    var dataset = { "value6": document.getElementById('msg6').value };
    $.ajax({
      url: 'message.php',
      type: 'POST',
      data: dataset, success: function () {
        $('#msg6').val('');
        alert("osaasto6 ilmoitettu");
      }

    });
    
  });

});


//////////////////////////////////////////////////////////////////////                    
//delete value inside of text file
$(function () {
  $("#msgok1").click(function (e) {
    var dataset = { "valueClient1": "" };
    $.ajax({
      url: 'message.php',
      type: 'POST',
      data: dataset, success: function () {

        $('#msg1').val('');

      }

    });
    
  });

});

$(function () {
  $("#msgok2").click(function (e) {
    var dataset = { "valueClient2": "" };
    $.ajax({
      url: 'message.php',
      type: 'POST',
      data: dataset, success: function () {

        $('#msg2').val('');

      }

    });
    
  });

});

$(function () {
  $("#msgok3").click(function (e) {
    var dataset = { "valueClient3": "" };
    $.ajax({
      url: 'message.php',
      type: 'POST',
      data: dataset, success: function () {

        $('#msg3').val('');

      }

    });
    
  });

});

$(function () {
  $("#msgok4").click(function (e) {
    var dataset = { "valueClient4": "" };
    $.ajax({
      url: 'message.php',
      type: 'POST',
      data: dataset, success: function () {

        $('#msg4').val('');

      }

    });
    
  });

});

$(function () {
  $("#msgok5").click(function (e) {
    var dataset = { "valueClient5": "" };
    $.ajax({
      url: 'message.php',
      type: 'POST',
      data: dataset, success: function () {

        $('#msg5').val('');

      }

    });
    
  });

});

$(function () {
  $("#msgok6").click(function (e) {
    var dataset = { "valueClient6": "" };
    $.ajax({
      url: 'message.php',
      type: 'POST',
      data: dataset, success: function () {

        $('#msg6').val('');

      }

    });
    
  });

});


//////////////////////////////////////////////////////////////////////
//timer code, and open value from text file in to textBox,change background color                     
setInterval(function (e) {
  $(function () {

    //open value from text file in to textBox

    $.ajax({
      url: "messages/osaastot/receivemsg1ForServer.txt",
      dataType: "text",
      success: function (data) {
        $("#receivemsg1").text(data);
      }
    });

    $.ajax({
      url: "messages/osaastot/receivemsg2ForServer.txt",
      dataType: "text",
      success: function (data) {
        $("#receivemsg2").text(data);
      }
    });

    $.ajax({
      url: "messages/osaastot/receivemsg3ForServer.txt",
      dataType: "text",
      success: function (data) {
        $("#receivemsg3").text(data);
      }
    });

    $.ajax({
      url: "messages/osaastot/receivemsg4ForServer.txt",
      dataType: "text",
      success: function (data) {
        $("#receivemsg4").text(data);
      }
    });

    $.ajax({
      url: "messages/osaastot/receivemsg5ForServer.txt",
      dataType: "text",
      success: function (data) {
        $("#receivemsg5").text(data);
      }
    });

    $.ajax({
      url: "messages/osaastot/receivemsg6ForServer.txt",
      dataType: "text",
      success: function (data) {
        $("#receivemsg6").text(data);
      }
    });

  });

  //change background color             
  $.ajax({
    url: "messages/osaastot//receivemsg1ForServer.txt",
    dataType: "text",
    success: function (data) {

      $("#receivemsg1").text(data);

      if (data != "") {

        $('.receivemsg1').css({ 'background': '#66ff66', "font-size": "16", "border-style": "double", "border-color": "red" });


      }
      else {

        $('.receivemsg1').css({ 'background': 'rgb(226, 226, 226)', "font-size": "16", "border-style": "none" });

      }

    }
  });

  //change background color             
  $.ajax({
    url: "messages/osaastot//receivemsg2ForServer.txt",
    dataType: "text",
    success: function (data) {

      $("#receivemsg2").text(data);

      if (data != "") {

        $('.receivemsg2').css({ 'background': '#66ff66', "font-size": "16", "border-style": "double", "border-color": "red" });


      }
      else {

        $('.receivemsg2').css({ 'background': 'rgb(226, 226, 226)', "font-size": "16", "border-style": "none" });

      }

    }
  });

  //change background color             
  $.ajax({
    url: "messages/osaastot/receivemsg3ForServer.txt",
    dataType: "text",
    success: function (data) {

      $("#receivemsg3").text(data);

      if (data != "") {

        $('.receivemsg3').css({ 'background': '#66ff66', "font-size": "16", "border-style": "double", "border-color": "red" });


      }
      else {

        $('.receivemsg3').css({ 'background': 'rgb(226, 226, 226)', "font-size": "16", "border-style": "none" });

      }

    }
  });

  //change background color             
  $.ajax({
    url: "messages/osaastot/receivemsg4ForServer.txt",
    dataType: "text",
    success: function (data) {

      $("#receivemsg4").text(data);

      if (data != "") {

        $('.receivemsg4').css({ 'background': '#66ff66', "font-size": "16", "border-style": "double", "border-color": "red" });


      }
      else {

        $('.receivemsg4').css({ 'background': 'rgb(226, 226, 226)', "font-size": "16", "border-style": "none" });

      }

    }
  });

  //change background color             
  $.ajax({
    url: "messages/osaastot//receivemsg5ForServer.txt",
    dataType: "text",
    success: function (data) {

      $("#receivemsg5").text(data);

      if (data != "") {

        $('.receivemsg5').css({ 'background': '#66ff66', "font-size": "16", "border-style": "double", "border-color": "red" });


      }
      else {

        $('.receivemsg5').css({ 'background': 'rgb(226, 226, 226)', "font-size": "16", "border-style": "none" });

      }

    }
  });

  //change background color             
  $.ajax({
    url: "messages/osaastot/receivemsg6ForServer.txt",
    dataType: "text",
    success: function (data) {

      $("#receivemsg6").text(data);

      if (data != "") {

        $('.receivemsg6').css({ 'background': '#66ff66', "font-size": "16", "border-style": "double", "border-color": "red" });


      }
      else {

        $('.receivemsg6').css({ 'background': 'rgb(226, 226, 226)', "font-size": "16", "border-style": "none" });

      }

    }
  });


  // move file with prefix MA from osaasto in to maanatai-sunnuntai

  $.ajax({
    type: "POST",
    url: "index.php",
    data: { action: "1" }

  })
  $.ajax({
    type: "POST",
    url: "index.php",
    data: { action2: "1" }

  })
  $.ajax({
    type: "POST",
    url: "index.php",
    data: { action3: "1" }

  })
  $.ajax({
    type: "POST",
    url: "index.php",
    data: { action4: "1" }

  })
  $.ajax({
    type: "POST",
    url: "index.php",
    data: { action5: "1" }

  })
  $.ajax({
    type: "POST",
    url: "index.php",
    data: { action6: "1" }

  })
 
  
}, 5000);





