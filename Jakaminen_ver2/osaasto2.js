///<reference path="E:/Jakaminen_ver2/node_modules/@types/jquery/index.d.ts" />

window.onload = function () {


    var oDateTrigger = new Date("08/12/2020");
    var oToday = new Date();
    if (oToday < oDateTrigger) {

        $('div[id^="div-"]').hide().fadeIn(2000);
        $("#canvas").hide();
        $("#messangerDiv").hide();
        $("#ShowSelectedName").hide();
    }
    else {
        // alert("Sovellus on erääntynyt.Ota yhteyttä( programiranjesaahmom@hotmail.com)");

        $('div[id^="div-"]').hide();
        $("body").html("<div><h1>Sovellus on erääntynyt. Ota yhteyttä( tjakaminen@gmail.com )</h1></div>");
    }

    /*
    $(setInterval (function(){
    
     location.reload();
   
 },1000)); 
*/
    //connected with canvas in codes
    canvas = document.getElementById('canvas');
    if (canvas.getContext)
        context = canvas.getContext('2d');

    // init function call canvas drawing block cod  


}

//show messanger div
$(function () {

    $("#mainMsgButton").click(function (e) {
        $("#messangerDiv").fadeIn(1000);
        e.preventDefault();
    });

});

//send message
// post value from textBox msg1 over index.php in to text file
$(function () {

    $("#buttonSendMsg").click(function (e) {
        var dataset = { "valueClient2": document.getElementById('msgFromClient').value };
        $.ajax({
            url: 'message.php',
            type: 'POST',
            data: dataset,
            success: function () {

                $('#msgFromClient').val('');
                alert("Viesti on lähetetty");

            }

        });
        e.preventDefault();
    });

});

//delete message
// delete value inside of text file,hide messanger and show rest of elements 
$(function () {
    $("#buttonReadedMsg").click(function (e) {
        var dataset = { "value2": "" };
        $.ajax({
            url: 'message.php',
            type: 'POST',
            data: dataset, success: function () {
                //alert("Viesti lähetetty");
                $('.msgFromServer').css({ 'border-color': 'white' });
                $("#messangerDiv").fadeOut(500);
                // $("#listOfallListBoxDiv").fadeIn(500);

            }

        });
        e.preventDefault();
    });
});
//timer and 
//if textFile contain value show messanger and read textFile in to textBox
setInterval(function (e) {
    $(function () {
        jQuery.get("messages/osaastot/receivemsg2.txt", function (data) {

            if (data.trim().length > 0) {

                $("#show_MessangerDiv_Button").click();

            }

        });

        //open value from text file in to textBox and change color of button and textArea
        $.ajax({
            url: "messages/osaastot/receivemsg2.txt",
            dataType: "text",
            success: function (data) {
                $("#msgFromServer").text(data);
                if (data != "") {

                    $('.mainMsgButton').css({ 'background': '#trasparent', 'color': 'white', "transform": "scale(1.2)" });
                    $('.mainMsgButton').fadeOut(1000);
                    $('.mainMsgButton').fadeIn(1000);
                    $('.mainMsgButton').fadeOut(1000);
                    $('.mainMsgButton').fadeIn(1000);

                    $('.msgFromServer').css({ 'background': '#66ff66', "font-size": "16", "border-style": "double", "border-color": "red" });


                }
                else {

                    $('.mainMsgButton').css({ 'background': '', 'color': 'whide', "transform": "scale(1)" });
                    $('.msgFromServer').css({ 'background': 'rgb(226, 226, 226)', "font-size": "16", "border-style": "double", "border-color": "rgb(226, 226, 226)'" });

                }
            }
        });

    });
    e.preventDefault();
}, 5000);
// Do something whn page loading



// list files in listBox AJAX-PHP
$(function () {
    $("#updateButton").click(function (e) {

        $.ajax({

            url: 'get-images2.php',
            type: 'POST',
            data: { dir: "./osaasto2/maanantai/" },
            success: function (response) {

                $('#listBox7').empty().append(response);


            }
        });

        $.ajax({

            url: 'get-images2.php',
            type: 'POST',
            data: { dir: "./osaasto2/tiistai/" },
            success: function (response) {


                $('#listBox6').empty().append(response);
            }
        });

        $.ajax({

            url: 'get-images2.php',
            type: 'POST',
            data: { dir: "./osaasto2/keskiviikko/" },
            success: function (response) {


                $('#listBox5').empty().append(response);
            }
        });

        $.ajax({

            url: 'get-images2.php',
            type: 'POST',
            data: { dir: "./osaasto2/torstai/" },
            success: function (response) {


                $('#listBox4').empty().append(response);
            }
        });

        $.ajax({

            url: 'get-images2.php',
            type: 'POST',
            data: { dir: "./osaasto2/perjantai/" },
            success: function (response) {


                $('#listBox3').empty().append(response);
            }
        });

        $.ajax({

            url: 'get-images2.php',
            type: 'POST',
            data: { dir: "./osaasto2/lauantai/" },
            success: function (response) {


                $('#listBox2').empty().append(response);
            }
        });

        $.ajax({

            url: 'get-images2.php',
            type: 'POST',
            data: { dir: "./osaasto2/sunnuntai/" },
            success: function (response) {


                $('#listBox1').empty().append(response);
            }
        });

        $.ajax({

            url: 'get-images2.php',
            type: 'POST',
            data: { dir: "./osaasto2/valmis/" },
            success: function (response) {


                $('#listBoxValmis').empty().append(response);
            }
        });

        $.ajax({

            url: 'get-images2.php',
            type: 'POST',
            data: { dir: "./osaasto2/historia/" },
            success: function (response) {


                $('#listBoxHistoria').empty().append(response);
            }
        });

        $.ajax({

            url: 'get-images2.php',
            type: 'POST',
            data: {
                dir1: "./osaasto2/maanantai/",
                dir2: "./osaasto2/tiistai/",
                dir3: "./osaasto2/keskiviikko/",
                dir4: "./osaasto2/torstai/",
                dir5: "./osaasto2/perjantai/",
                dir6: "./osaasto2/lauantai/",
                dir7: "./osaasto2/sunnuntai/",

            },
            success: function (response) {

                $('#listOfallListBox').empty().append(response);



            }
        });


        e.preventDefault();
    });
});

//move selectedFile from listBox AJAX-PHP
$(function () {

    document.getElementById('listBox7').addEventListener('change', function () {

        $('#listBox7 option').each(function () {
            if (this.selected) {

                $("#btValmis1").click(function (e) {

                    var path = "./osaasto2/maanantai/"
                    var selectedFileName = $("#listBox7 option:selected").text();

                    $.ajax({
                        type: "POST",
                        url: "move-images2.php",
                        data: { pathDir: path, name: selectedFileName }
                    }).done(function (respond) {
                        var x = document.getElementById('listBox7');
                        x.remove(x.selectedIndex);

                    });

                    //update listBox
                    $.ajax({

                        url: 'get-images2.php',
                        type: 'POST',
                        data: { dir: "./osaasto2/valmis/" },
                        success: function (response) {

                            $("#updateButton").click();

                        }
                    });


                    e.preventDefault();
                });

            };

        });
    });
});
//move selectedFile from listBox AJAX-PHP
$(function () {

    document.getElementById('listBox6').addEventListener('change', function () {

        $('#listBox6 option').each(function () {
            if (this.selected) {

                $("#btValmis2").click(function (e) {

                    var path = "./osaasto2/tiistai/"
                    var selectedFileName = $("#listBox6 option:selected").text();
                    /*
                    var dt = new Date();
                    var time = dt.getHours() + ":" + dt.getMinutes();
                    */
                    // call osaasto2.php and post the data
                    $.ajax({
                        type: "POST",
                        url: "move-images2.php",
                        data: { pathDir: path, name: selectedFileName }
                    }).done(function (respond) {
                        var x = document.getElementById('listBox6');
                        x.remove(x.selectedIndex);

                    });

                    //update listBox
                    $.ajax({

                        url: 'get-images2.php',
                        type: 'POST',
                        data: { dir: "./osaasto2/valmis/" },
                        success: function (response) {

                            $("#updateButton").click();

                        }
                    });


                    e.preventDefault();
                });

            };

        });
    });
});
//move selectedFile from listBox AJAX-PHP
$(function () {

    document.getElementById('listBox5').addEventListener('change', function () {

        $('#listBox5 option').each(function () {
            if (this.selected) {

                $("#btValmis3").click(function (e) {

                    var path = "./osaasto2/keskiviikko/"
                    var selectedFileName = $("#listBox5 option:selected").text();

                    // call osaasto2.php and post the data
                    $.ajax({
                        type: "POST",
                        url: "move-images2.php",
                        data: { pathDir: path, name: selectedFileName }
                    }).done(function (respond) {
                        var x = document.getElementById('listBox5');
                        x.remove(x.selectedIndex);
                    });

                    //update listBox
                    $.ajax({

                        url: 'get-images2.php',
                        type: 'POST',
                        data: { dir: "./osaasto2/valmis/" },
                        success: function (response) {

                            $("#updateButton").click();
                        }
                    });


                    e.preventDefault();
                });

            };

        });
    });
});
//move selectedFile from listBox AJAX-PHP
$(function () {

    document.getElementById('listBox4').addEventListener('change', function () {

        $('#listBox4 option').each(function () {
            if (this.selected) {

                $("#btValmis4").click(function (e) {

                    var path = "./osaasto2/torstai/"
                    var selectedFileName = $("#listBox4 option:selected").text();

                    // call osaasto2.php and post the data
                    $.ajax({
                        type: "POST",
                        url: "move-images2.php",
                        data: { pathDir: path, name: selectedFileName }
                    }).done(function (respond) {
                        var x = document.getElementById('listBox4');
                        x.remove(x.selectedIndex);
                    });

                    //update listBox
                    $.ajax({

                        url: 'get-images2.php',
                        type: 'POST',
                        data: { dir: "./osaasto2/valmis/" },
                        success: function (response) {

                            $("#updateButton").click();
                        }
                    });

                    e.preventDefault();
                });

            };

        });
    });
});
//move selectedFile from listBox AJAX-PHP
$(function () {

    document.getElementById('listBox3').addEventListener('change', function () {

        $('#listBox3 option').each(function () {
            if (this.selected) {

                $("#btValmis5").click(function (e) {

                    var path = "./osaasto2/perjantai/"
                    var selectedFileName = $("#listBox3 option:selected").text();

                    // call osaasto2.php and post the data
                    $.ajax({
                        type: "POST",
                        url: "move-images2.php",
                        data: { pathDir: path, name: selectedFileName }
                    }).done(function (respond) {
                        var x = document.getElementById('listBox3');
                        x.remove(x.selectedIndex);
                    });

                    //update listBox
                    $.ajax({

                        url: 'get-images2.php',
                        type: 'POST',
                        data: { dir: "./osaasto2/valmis/" },
                        success: function (response) {

                            $("#updateButton").click();
                        }
                    });

                    e.preventDefault();
                });

            };

        });
    });
});
//move selectedFile from listBox AJAX-PHP
$(function () {

    document.getElementById('listBox2').addEventListener('change', function () {

        $('#listBox2 option').each(function () {
            if (this.selected) {

                $("#btValmis6").click(function (e) {

                    var path = "./osaasto2/lauantai/"
                    var selectedFileName = $("#listBox2 option:selected").text();

                    // call osaasto2.php and post the data
                    $.ajax({
                        type: "POST",
                        url: "move-images2.php",
                        data: { pathDir: path, name: selectedFileName }
                    }).done(function (respond) {
                        var x = document.getElementById('listBox2');
                        x.remove(x.selectedIndex);
                    });

                    //update listBox
                    $.ajax({

                        url: 'get-images2.php',
                        type: 'POST',
                        data: { dir: "./osaasto2/valmis/" },
                        success: function (response) {

                            $("#updateButton").click();
                        }
                    });

                    e.preventDefault();
                });

            };

        });
    });
});
//move selectedFile from listBox AJAX-PHP
$(function () {

    document.getElementById('listBox1').addEventListener('change', function () {

        $('#listBox1 option').each(function () {
            if (this.selected) {

                $("#btValmis7").click(function (e) {

                    var path = "./osaasto2/sunnuntai/"
                    var selectedFileName = $("#listBox1 option:selected").text();

                    // call osaasto2.php and post the data
                    $.ajax({
                        type: "POST",
                        url: "move-images2.php",
                        data: { pathDir: path, name: selectedFileName }
                    }).done(function (respond) {
                        var x = document.getElementById('listBox1');
                        x.remove(x.selectedIndex);
                    });

                    //update listBox
                    $.ajax({

                        url: 'get-images2.php',
                        type: 'POST',
                        data: { dir: "./osaasto2/valmis/" },
                        success: function (response) {

                            $("#updateButton").click();
                        }
                    });

                    e.preventDefault();
                });

            };

        });
    });
});

//move selectedFile from listBox AJAX-PHP
$(function () {

    document.getElementById('listBoxValmis').addEventListener('change', function () {

        $('#listBoxValmis option').each(function () {
            if (this.selected) {

                $("#valmisOk").click(function (e) {

                    var path2 = "./osaasto2/valmis/"
                    var selectedFileName2 = $("#listBoxValmis option:selected").text();
                    //move file from listBoxValmis to listBoxHistoria
                    $.ajax({
                        type: "POST",
                        url: "move-images2.php",

                        data: { pathDir2: path2, name2: selectedFileName2 }
                    }).done(function (respond) {
                        var x = document.getElementById('listBoxValmis');
                        x.remove(x.selectedIndex);
                    });

                    //update listBoxHistoria
                    $.ajax({

                        url: 'get-images2.php',
                        type: 'POST',
                        data: { dir: "./osaasto2/valmis/" },
                        success: function (response) {

                            $("#updateButton").click();
                        }
                    });


                    e.preventDefault();
                });

            };

        });
    });
});

//delete selectedFile from listBox AJAX-PHP
//dialogBox yes or no
$(function () {

    $("#historiaDelete").click(function (e) {

        var r8 = confirm("Haluatko poista?");
        if (r8 == true) {

            var path3 = "./osaasto2/historia/"
            var selectedFileName3 = $("#listBoxHistoria option:selected").text();
            $.ajax({
                type: "POST",
                url: "move-images2.php",

                data: { pathDir3: path3, name3: selectedFileName3 }
            }).done(function (respond) {
                var x = document.getElementById('listBoxHistoria');
                x.remove(x.selectedIndex);
            });


            //$("#close").click();

            $("#updateButton").click();

        }

        e.preventDefault();
    });

});

$('.listBox').css({ 'visibility': 'hidden' });
$('.buttonValmisDiv').css({ 'visibility': 'hidden' });
$('#divLabel').hide();
$('.valmisDiv').css({ 'margin-top': '-420px', 'margin-left': '150px' });
$('.listOfallListBoxDiv').css({ 'margin-top': '-420px', 'margin-left': '' });
$('.historiaDiv').css({ 'margin-top': '-420px', 'margin-left': '-150px' });

// search for item in listBoxHistoria
$(function () {

    $('#etsi').click(function () {

        var string = $("#text1").val();

        if ($("#text1").val() == "") {


            $("#listBoxHistoria").find("option:contains('" + string + "')").css("color", "");


        }

        else {


            //change color of founded items
            $("#listBoxHistoria").find("option:contains('" + string + "')").css("color", "yellow");

        }

    })

});

//delete selectedFile from listBox AJAX-PHP
//dialogBox yes or no
$(function () {

    $("#btDelete1").click(function (e) {

        var r7 = confirm("Haluatko poista?");
        if (r7 == true) {

            var path3 = "./osaasto2/maanantai/"
            var selectedFileName3 = $("#listBox7 option:selected").text();
            $.ajax({
                type: "POST",
                url: "move-images2.php",

                data: { pathDir3: path3, name3: selectedFileName3 }
            }).done(function (respond) {
                var x = document.getElementById('listBox7');
                x.remove(x.selectedIndex);
            });


            $("#close").click();

            $("#updateButton").click();

        }

        e.preventDefault();
    });


});


//delete selectedFile from listBox AJAX-PHP
//dialogBox yes or no
$(function () {

    $("#btDelete2").click(function (e) {

        var r6 = confirm("Haluatko poista?");
        if (r6 == true) {

            var path3 = "./osaasto2/tiistai/"
            var selectedFileName3 = $("#listBox6 option:selected").text();
            $.ajax({
                type: "POST",
                url: "move-images2.php",

                data: { pathDir3: path3, name3: selectedFileName3 }
            }).done(function (respond) {
                var x = document.getElementById('listBox6');
                x.remove(x.selectedIndex);
            });


            $("#close").click();

            $("#updateButton").click();

        }

        e.preventDefault();
    });

});


//delete selectedFile from listBox AJAX-PHP
//dialogBox yes or no
$(function () {

    $("#btDelete3").click(function (e) {

        var r5 = confirm("Haluatko poista?");
        if (r5 == true) {

            var path3 = "./osaasto2/keskiviikko/"
            var selectedFileName3 = $("#listBox5 option:selected").text();
            $.ajax({
                type: "POST",
                url: "move-images2.php",

                data: { pathDir3: path3, name3: selectedFileName3 }
            }).done(function (respond) {
                var x = document.getElementById('listBox5');
                x.remove(x.selectedIndex);
            });


            $("#close").click();

            $("#updateButton").click();

        }

        e.preventDefault();
    });

});


//delete selectedFile from listBox AJAX-PHP
//dialogBox yes or no
$(function () {

    $("#btDelete4").click(function (e) {

        var r4 = confirm("Haluatko poista?");
        if (r4 == true) {

            var path3 = "./osaasto2/torstai/"
            var selectedFileName3 = $("#listBox4 option:selected").text();
            $.ajax({
                type: "POST",
                url: "move-images2.php",

                data: { pathDir3: path3, name3: selectedFileName3 }
            }).done(function (respond) {
                var x = document.getElementById('listBox4');
                x.remove(x.selectedIndex);
            });


            $("#close").click();

            $("#updateButton").click();

        }

        e.preventDefault();
    });

});


//delete selectedFile from listBox AJAX-PHP
//dialogBox yes or no
$(function () {

    $("#btDelete5").click(function (e) {

        var r3 = confirm("Haluatko poista?");
        if (r3 == true) {

            var path3 = "./osaasto2/perjantai/"
            var selectedFileName3 = $("#listBox3 option:selected").text();
            $.ajax({
                type: "POST",
                url: "move-images2.php",

                data: { pathDir3: path3, name3: selectedFileName3 }
            }).done(function (respond) {
                var x = document.getElementById('listBox3');
                x.remove(x.selectedIndex);
            });


            $("#close").click();

            $("#updateButton").click();

        }

        e.preventDefault();
    });


});


//delete selectedFile from listBox AJAX-PHP
//dialogBox yes or no
$(function () {

    $("#btDelete6").click(function (e) {

        var r2 = confirm("Haluatko poista?");
        if (r2 == true) {

            var path3 = "./osaasto2/lauantai/"
            var selectedFileName3 = $("#listBox2 option:selected").text();
            $.ajax({
                type: "POST",
                url: "move-images2.php",

                data: { pathDir3: path3, name3: selectedFileName3 }
            }).done(function (respond) {
                var x = document.getElementById('listBox2');
                x.remove(x.selectedIndex);
            });


            $("#close").click();

            $("#updateButton").click();

        }

        e.preventDefault();
    });


});


//delete selectedFile from listBox AJAX-PHP
//dialogBox yes or no
$(function () {

    $("#btDelete7").click(function (e) {

        var r1 = confirm("Haluatko poista?");
        if (r1 == true) {

            var path3 = "./osaasto2/sunnuntai/"
            var selectedFileName3 = $("#listBox1 option:selected").text();
            $.ajax({
                type: "POST",
                url: "move-images2.php",

                data: { pathDir3: path3, name3: selectedFileName3 }
            }).done(function (respond) {
                var x = document.getElementById('listBox1');
                x.remove(x.selectedIndex);
            });

            $("#close").click();

            $("#updateButton").click();

        }

        e.preventDefault();
    });

});
//////////////////////////////////////////////////////////////////////

// list files in listBox with checkBox autoupdate AJAX-PHP
// timer
$(function () {
    var Interval;
    $('[name="updataCheckBox"]').change(function () {
        if ($(this).is(':checked')) {
            Interval = setInterval(function () {

                $("#updateButton").click();

            }, 10000);
        }
        else {
            clearInterval(Interval);
        }
    });
});

// open img in canvas
$(function () {


    //connected with canvas in codes
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    canvas.width = 760;
    canvas.height = 900;


    document.getElementById('listBox7').addEventListener('change', function (e) {
        //caling setCtep(); function to set  cStep for undo 
        setCtep();

        $("#canvas").fadeIn(1000);
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        var img = new Image();
        // compose relative path of the image and assign it to the src attribute
        img.src = this.options[this.selectedIndex].getAttribute('data-dir') + this.options[this.selectedIndex].value + '?time=' + Date.now();
        img.onload = () => {
            var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
            // get the top left position of the image
            var x = (canvas.width / 2) - (img.width / 2) * scale;
            var y = (canvas.height / 2) - (img.height / 2) * scale;
            context.drawImage(img, x, y, img.width * scale, img.height * scale);
            // context.fillStyle = "#000";
            // context.fillRect(0, 0, canvas.width, canvas.height);
            // context.drawImage(img, (canvas.width / 2) - (img.width / 2), 0, img.width, canvas.height);

            cPush();

            var selectedFileName = $("#listBox7 option:selected").text();
            $("#ShowSelectedName").fadeIn(1000);
            $("#ShowSelectedName").text(selectedFileName);
            // $("#autoupdateLabel").fadeOut(1000)
            // $("#updateButton").fadeOut(1000)
            //  $("#updataCheckBox").fadeOut(1000);
            $("#messangerDiv").fadeOut(1000);
            $("#valmisDiv").fadeOut(1000);
            $("#historiaDiv").fadeOut(1000);
            $("#listOfallListBoxDiv").fadeOut(1000);

            // unselect rest of listBoxes
            $("#listBox6").val([]);
            $("#listBox5").val([]);
            $("#listBox4").val([]);
            $("#listBox3").val([]);
            $("#listBox2").val([]);
            $("#listBox1").val([]);
            $("#listBoxHistoria").val([]);
            $("#listBoxValmis").val([]);
            $("#listOfallListBox").val([]);

        }

        e.preventDefault();

    });

});


// open img in canvas
$(function () {

    //connected with canvas in codes
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    canvas.width = 760;
    canvas.height = 900;

    document.getElementById('listBox6').addEventListener('change', function (e) {

        //caling setCtep(); function to set  cStep for undo 
        setCtep();

        $("#canvas").fadeIn(1000);
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        img = new Image();
        // compose relative path of the image and assign it to the src attribute
        img.src = this.options[this.selectedIndex].getAttribute('data-dir') + this.options[this.selectedIndex].value + '?time=' + Date.now();
        img.onload = () => {
            var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
            // get the top left position of the image
            var x = (canvas.width / 2) - (img.width / 2) * scale;
            var y = (canvas.height / 2) - (img.height / 2) * scale;
            context.drawImage(img, x, y, img.width * scale, img.height * scale);
            cPush();
            var selectedFileName = $("#listBox6 option:selected").text();
            $("#ShowSelectedName").fadeIn(1000);
            $("#ShowSelectedName").text(selectedFileName);
            // $("#autoupdateLabel").fadeOut(1000)
            // $("#updateButton").fadeOut(1000)
            //  $("#updataCheckBox").fadeOut(1000);
            $("#messangerDiv").fadeOut(1000);
            $("#valmisDiv").fadeOut(1000);
            $("#historiaDiv").fadeOut(1000);
            $("#listOfallListBoxDiv").fadeOut(1000);



            // unselect rest of listBoxes
            $("#listBox7").val([]);
            $("#listBox5").val([]);
            $("#listBox4").val([]);
            $("#listBox3").val([]);
            $("#listBox2").val([]);
            $("#listBox1").val([]);
            $("#listBoxHistoria").val([]);
            $("#listBoxValmis").val([]);
            $("#listOfallListBox").val([]);

        }

        e.preventDefault();

    });

});
// open img in canvas
$(function () {

    //connected with canvas in codes
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    canvas.width = 760;
    canvas.height = 900;

    document.getElementById('listBox5').addEventListener('change', function (e) {

        //caling setCtep(); function to set  cStep for undo 
        setCtep();

        $("#canvas").fadeIn(1000);
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        img = new Image();
        // compose relative path of the image and assign it to the src attribute
        img.src = this.options[this.selectedIndex].getAttribute('data-dir') + this.options[this.selectedIndex].value + '?time=' + Date.now();
        img.onload = () => {
            var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
            // get the top left position of the image
            var x = (canvas.width / 2) - (img.width / 2) * scale;
            var y = (canvas.height / 2) - (img.height / 2) * scale;
            context.drawImage(img, x, y, img.width * scale, img.height * scale);
            cPush();
            var selectedFileName = $("#listBox5 option:selected").text();
            $("#ShowSelectedName").fadeIn(1000);
            $("#ShowSelectedName").text(selectedFileName);
            // $("#autoupdateLabel").fadeOut(1000)
            // $("#updateButton").fadeOut(1000)
            //  $("#updataCheckBox").fadeOut(1000);
            $("#messangerDiv").fadeOut(1000);
            $("#valmisDiv").fadeOut(1000);
            $("#historiaDiv").fadeOut(1000);
            $("#listOfallListBoxDiv").fadeOut(1000);



            // unselect rest of listBoxes
            $("#listBox6").val([]);
            $("#listBox7").val([]);
            $("#listBox4").val([]);
            $("#listBox3").val([]);
            $("#listBox2").val([]);
            $("#listBox1").val([]);
            $("#listBoxHistoria").val([]);
            $("#listBoxValmis").val([]);
            $("#listOfallListBox").val([]);

        }

        e.preventDefault();

    });

});

// open img in canvas
$(function () {

    //connected with canvas in codes
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    canvas.width = 760;
    canvas.height = 900;

    document.getElementById('listBox4').addEventListener('change', function (e) {
        //caling setCtep(); function to set  cStep for undo 
        setCtep();

        $("#canvas").fadeIn(1000);
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        img = new Image();
        // compose relative path of the image and assign it to the src attribute
        img.src = this.options[this.selectedIndex].getAttribute('data-dir') + this.options[this.selectedIndex].value + '?time=' + Date.now();
        img.onload = () => {
            var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
            // get the top left position of the image
            var x = (canvas.width / 2) - (img.width / 2) * scale;
            var y = (canvas.height / 2) - (img.height / 2) * scale;
            context.drawImage(img, x, y, img.width * scale, img.height * scale);
            cPush();

            var selectedFileName = $("#listBox4 option:selected").text();
            $("#ShowSelectedName").fadeIn(1000);
            $("#ShowSelectedName").text(selectedFileName);
            // $("#autoupdateLabel").fadeOut(1000)
            // $("#updateButton").fadeOut(1000)
            //  $("#updataCheckBox").fadeOut(1000);
            $("#messangerDiv").fadeOut(1000);
            $("#valmisDiv").fadeOut(1000);
            $("#historiaDiv").fadeOut(1000);
            $("#listOfallListBoxDiv").fadeOut(1000);




            // unselect rest of listBoxes
            $("#listBox6").val([]);
            $("#listBox5").val([]);
            $("#listBox7").val([]);
            $("#listBox3").val([]);
            $("#listBox2").val([]);
            $("#listBox1").val([]);
            $("#listBoxHistoria").val([]);
            $("#listBoxValmis").val([]);
            $("#listOfallListBox").val([]);

        }

        e.preventDefault();

    });

});

// open img in canvas
$(function () {


    //connected with canvas in codes
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    canvas.width = 760;
    canvas.height = 900;

    document.getElementById('listBox3').addEventListener('change', function (e) {
        //caling setCtep(); function to set  cStep for undo 
        setCtep();

        $("#canvas").fadeIn(1000);
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        img = new Image();
        // compose relative path of the image and assign it to the src attribute
        img.src = this.options[this.selectedIndex].getAttribute('data-dir') + this.options[this.selectedIndex].value + '?time=' + Date.now();
        img.onload = () => {
            var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
            // get the top left position of the image
            var x = (canvas.width / 2) - (img.width / 2) * scale;
            var y = (canvas.height / 2) - (img.height / 2) * scale;
            context.drawImage(img, x, y, img.width * scale, img.height * scale);
            cPush();

            var selectedFileName = $("#listBox3 option:selected").text();
            $("#ShowSelectedName").fadeIn(1000);
            $("#ShowSelectedName").text(selectedFileName);
            // $("#autoupdateLabel").fadeOut(1000)
            // $("#updateButton").fadeOut(1000)
            //  $("#updataCheckBox").fadeOut(1000);
            $("#messangerDiv").fadeOut(1000);
            $("#valmisDiv").fadeOut(1000);
            $("#historiaDiv").fadeOut(1000);
            $("#listOfallListBoxDiv").fadeOut(1000);



            // unselect rest of listBoxes
            $("#listBox6").val([]);
            $("#listBox5").val([]);
            $("#listBox4").val([]);
            $("#listBox7").val([]);
            $("#listBox2").val([]);
            $("#listBox1").val([]);
            $("#listBoxHistoria").val([]);
            $("#listBoxValmis").val([]);
            $("#listOfallListBox").val([]);

        }

        e.preventDefault();

    });

});
// open img in canvas
$(function () {

    //connected with canvas in codes
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    canvas.width = 760;
    canvas.height = 900;

    document.getElementById('listBox2').addEventListener('change', function (e) {

        //caling setCtep(); function to set  cStep for undo 
        setCtep();

        $("#canvas").fadeIn(1000);
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        img = new Image();
        // compose relative path of the image and assign it to the src attribute
        img.src = this.options[this.selectedIndex].getAttribute('data-dir') + this.options[this.selectedIndex].value + '?time=' + Date.now();
        img.onload = () => {
            var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
            // get the top left position of the image
            var x = (canvas.width / 2) - (img.width / 2) * scale;
            var y = (canvas.height / 2) - (img.height / 2) * scale;
            context.drawImage(img, x, y, img.width * scale, img.height * scale);
            cPush();
            var selectedFileName = $("#listBox2 option:selected").text();
            $("#ShowSelectedName").fadeIn(1000);
            $("#ShowSelectedName").text(selectedFileName);
            // $("#autoupdateLabel").fadeOut(1000)
            // $("#updateButton").fadeOut(1000)
            //  $("#updataCheckBox").fadeOut(1000);
            $("#messangerDiv").fadeOut(1000);
            $("#valmisDiv").fadeOut(1000);
            $("#historiaDiv").fadeOut(1000);
            $("#listOfallListBoxDiv").fadeOut(1000);


            // unselect rest of listBoxes
            $("#listBox6").val([]);
            $("#listBox5").val([]);
            $("#listBox4").val([]);
            $("#listBox3").val([]);
            $("#listBox7").val([]);
            $("#listBox1").val([]);
            $("#listBoxHistoria").val([]);
            $("#listBoxValmis").val([]);
            $("#listOfallListBox").val([]);

        }

        e.preventDefault();

    });

});

// open img in canvas
$(function () {

    //connected with canvas in codes
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    canvas.width = 760;
    canvas.height = 900;

    document.getElementById('listBox1').addEventListener('change', function (e) {

        //caling setCtep(); function to set  cStep for undo 
        setCtep();

        $("#canvas").fadeIn(1000);
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        img = new Image();
        // compose relative path of the image and assign it to the src attribute
        img.src = this.options[this.selectedIndex].getAttribute('data-dir') + this.options[this.selectedIndex].value + '?time=' + Date.now();
        img.onload = () => {
            var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
            // get the top left position of the image
            var x = (canvas.width / 2) - (img.width / 2) * scale;
            var y = (canvas.height / 2) - (img.height / 2) * scale;
            context.drawImage(img, x, y, img.width * scale, img.height * scale);
            cPush();
            var selectedFileName = $("#listBox1 option:selected").text();
            $("#ShowSelectedName").fadeIn(1000);
            $("#ShowSelectedName").text(selectedFileName);
            // $("#autoupdateLabel").fadeOut(1000)
            // $("#updateButton").fadeOut(1000)
            //  $("#updataCheckBox").fadeOut(1000);
            $("#messangerDiv").fadeOut(1000);
            $("#valmisDiv").fadeOut(1000);
            $("#historiaDiv").fadeOut(1000);
            $("#listOfallListBoxDiv").fadeOut(1000);




            // unselect rest of listBoxes
            $("#listBox6").val([]);
            $("#listBox5").val([]);
            $("#listBox4").val([]);
            $("#listBox3").val([]);
            $("#listBox2").val([]);
            $("#listBox7").val([]);
            $("#listBoxHistoria").val([]);
            $("#listBoxValmis").val([]);
            $("#listOfallListBox").val([]);


        }

        e.preventDefault();

    });

});

// open img in canvas
$(function () {

    //connected with canvas in codes
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    canvas.width = 760;
    canvas.height = 900;

    document.getElementById('listBoxValmis').addEventListener('change', function (e) {

        $("#canvas").fadeIn(1000);
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        img = new Image();
        // compose relative path of the image and assign it to the src attribute
        img.src = this.options[this.selectedIndex].getAttribute('data-dir') + this.options[this.selectedIndex].value + '?time=' + Date.now();
        img.onload = () => {
            var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
            // get the top left position of the image
            var x = (canvas.width / 2) - (img.width / 2) * scale;
            var y = (canvas.height / 2) - (img.height / 2) * scale;
            context.drawImage(img, x, y, img.width * scale, img.height * scale);

            var selectedFileName = $("#listBoxValmis option:selected").text();
            $("#ShowSelectedName").fadeIn(1000);
            $("#ShowSelectedName").text(selectedFileName);
            $("#messangerDiv").fadeOut(1000);


            $('.listBox').css({ 'visibility': 'hidden' });
            $('.buttonValmisDiv').css({ 'visibility': 'hidden' });
            $('#divLabel').hide();
            $('.valmisDiv').css({ 'margin-top': '-430px', 'margin-left': '150px' });
            $('.listOfallListBoxDiv').css({ 'margin-top': '-430px', 'margin-left': '' });
            $('.historiaDiv').css({ 'margin-top': '-430px', 'margin-left': '-205px' });

            // unselect rest of listBoxes
            $("#listBox7").val([]);
            $("#listBox6").val([]);
            $("#listBox5").val([]);
            $("#listBox4").val([]);
            $("#listBox3").val([]);
            $("#listBox2").val([]);
            $("#listBox1").val([]);
            $("#listOfallListBox").val([]);
            $("#listBoxHistoria").val([]);


        }

        e.preventDefault();

    });

});

// open img in canvas
$(function () {

    //connected with canvas in codes
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    canvas.width = 760;
    canvas.height = 900;

    document.getElementById('listBoxHistoria').addEventListener('change', function (e) {

        //caling setCtep(); function to set  cStep for undo 

        $("#canvas").fadeIn(1000);
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        img = new Image();
        // compose relative path of the image and assign it to the src attribute

        img.src = this.options[this.selectedIndex].getAttribute('data-dir') + this.options[this.selectedIndex].value + '?time=' + Date.now();
        img.onload = () => {
            var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
            // get the top left position of the image
            var x = (canvas.width / 2) - (img.width / 2) * scale;
            var y = (canvas.height / 2) - (img.height / 2) * scale;
            context.drawImage(img, x, y, img.width * scale, img.height * scale);

            var selectedFileName = $("#listBoxHistoria option:selected").text();
            $("#ShowSelectedName").fadeIn(1000);
            $("#ShowSelectedName").text(selectedFileName);
            $("#messangerDiv").fadeOut(1000);

            $('.listBox').css({ 'visibility': 'hidden' });
            $('.buttonValmisDiv').css({ 'visibility': 'hidden' });
            $('#divLabel').hide();
            $('.valmisDiv').css({ 'margin-top': '-430px', 'margin-left': '150px' });
            $('.listOfallListBoxDiv').css({ 'margin-top': '-430px', 'margin-left': '' });
            $('.historiaDiv').css({ 'margin-top': '-430px', 'margin-left': '-205px' });

            // unselect rest of listBoxes
            $("#listBox6").val([]);
            $("#listBox5").val([]);
            $("#listBox4").val([]);
            $("#listBox3").val([]);
            $("#listBox2").val([]);
            $("#listBox1").val([]);
            $("#listBoxValmis").val([]);
            $("#listOfallListBox").val([]);
            $("#listBox7").val([]);

        }

        e.preventDefault();

    });

});

// open img in canvas
$(function () {


    //connected with canvas in codes
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    canvas.width = 760;
    canvas.height = 900;

    document.getElementById('listOfallListBox').addEventListener('change', function (e) {

        $("#canvas").fadeIn(1000);
        context.clearRect(0, 0, context.canvas.width, context.canvas.height);
        img = new Image();
        // compose relative path of the image and assign it to the src attribute
        img.src = this.options[this.selectedIndex].getAttribute('data-dir') + this.options[this.selectedIndex].value + '?time=' + Date.now();
        img.onload = () => {
            var scale = Math.min(canvas.width / img.width, canvas.height / img.height);
            // get the top left position of the image
            var x = (canvas.width / 2) - (img.width / 2) * scale;
            var y = (canvas.height / 2) - (img.height / 2) * scale;
            context.drawImage(img, x, y, img.width * scale, img.height * scale);


            $('.listBox').css({ 'visibility': 'hidden' });
            $('.buttonValmisDiv').css({ 'visibility': 'hidden' });
            $('#divLabel').hide();
            $('.valmisDiv').css({ 'margin-top': '-430px', 'margin-left': '150px' });
            $('.listOfallListBoxDiv').css({ 'margin-top': '-430px', 'margin-left': '' });
            $('.historiaDiv').css({ 'margin-top': '-430px', 'margin-left': '-205px' });

            var selectedFileName = $("#listOfallListBox option:selected").text();
            $("#ShowSelectedName").fadeIn(1000);
            $("#ShowSelectedName").text(selectedFileName);
            $("#messangerDiv").fadeOut(1000);


            // unselect rest of listBoxes
            $("#listBox6").val([]);
            $("#listBox5").val([]);
            $("#listBox4").val([]);
            $("#listBox3").val([]);
            $("#listBox2").val([]);
            $("#listBox1").val([]);
            $("#listBoxValmis").val([]);
            $("#listBoxHistoria").val([]);
            $("#listBox7").val([]);

        }

        e.preventDefault();

    });

});
$(function () {

    // if drawingCheckBox ic checked activate drawing
    $('[name="drawingCheckBox"]').change(function () {
        if ($(this).is(':checked')) {

            $("#nameFieldCheckBox").prop("checked", false)
            init();

        }
        else {



        }
    });
});

//Drawing Canvas
function init(e) {


    // =============
    // == Globals ==
    // =============
    const canvas = document.getElementById('canvas');
    const canvasContext = canvas.getContext('2d');
    const state = {
        mousedown: false
    };

    // =====================
    // == Event Listeners ==
    // =====================
    canvas.addEventListener('mousedown', handleWritingStart);
    canvas.addEventListener('mousemove', handleWritingInProgress);
    canvas.addEventListener('mouseup', handleDrawingEnd);
    canvas.addEventListener('mouseout', handleDrawingEnd);

    canvas.addEventListener('touchstart', handleWritingStart);
    canvas.addEventListener('touchmove', handleWritingInProgress);
    canvas.addEventListener('touchend', handleDrawingEnd);


    // ====================
    // == Event Handlers ==
    // ====================
    function handleWritingStart(event) {
        event.preventDefault();

        // ===================
        // == Configuration ==
        // ===================
        const lineWidth = document.getElementById("selWidth").value;
        const strokeStyle = $('#selColor').val();

        const mousePos = getMosuePositionOnCanvas(event);

        canvasContext.beginPath();

        canvasContext.moveTo(mousePos.x, mousePos.y);

        canvasContext.lineWidth = lineWidth;
        canvasContext.strokeStyle = strokeStyle;


        canvasContext.fill();

        state.mousedown = true;
    }

    function handleWritingInProgress(event) {
        event.preventDefault();

        // if mousedown and checkBox checked draw
        if (state.mousedown && $("#drawingCheckBox").is(':checked')) {
            const mousePos = getMosuePositionOnCanvas(event);

            canvasContext.lineTo(mousePos.x, mousePos.y);
            canvasContext.stroke();
        }
    }

    function handleDrawingEnd(event) {
        event.preventDefault();

        if (state.mousedown) {

            canvasContext.stroke();
        }

        state.mousedown = false;
    }

    // ======================
    // == Helper Functions ==
    // ======================
    function getMosuePositionOnCanvas(event) {
        var rect = canvas.getBoundingClientRect();
        const clientX = event.clientX || event.touches[0].clientX;
        const clientY = event.clientY || event.touches[0].clientY;
        const canvasX = clientX - rect.left;
        const canvasY = clientY - rect.top;

        return { x: canvasX, y: canvasY };
    }

    e.preventDefault();

};
var cPushArray = new Array();
var cStep = -1;


function setCtep() {
    cStep = -1;
};

function count() {
    cPush();
};

function cPush() {
    cStep++;
    if (cStep < cPushArray.length) { cPushArray.length = cStep; }
    cPushArray.push(document.getElementById('canvas').toDataURL());
    document.title = cStep + ":" + cPushArray.length;
}


function cUndo() {
    if (cStep > 0) {
        cStep--;

        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        canvasPic.onload = function () { context.drawImage(canvasPic, 0, 0); }
        document.title = cStep + ":" + cPushArray.length;
    }
}

function cRedo() {
    if (cStep < cPushArray.length - 1) {
        cStep++;
        var canvasPic = new Image();
        canvasPic.src = cPushArray[cStep];
        canvasPic.onload = function () { context.drawImage(canvasPic, 0, 0); }
        document.title = cStep + ":" + cPushArray.length;
    }
}

//save canvas image on server 
$(function () {

    document.getElementById('listBox7').addEventListener('change', function (e) {
        $('#listBox7 option').each(function () {
            if (this.selected) {

                $("#btSave").click(function (e) {


                    var dataURL = canvas.toDataURL();
                    var selectedFileName = $("#listBox7 option:selected").text();


                    // call osaasto2.php and post the data
                    $.ajax({
                        type: "POST",
                        url: "osaasto2.php",
                        data: { data: dataURL, name: selectedFileName }
                    }).done(function (respond) {
                        alert(path2);
                    });
                    e.preventDefault();
                });

            }

        });
        e.preventDefault();
    });

});


//save canvas image on server 
$(function () {

    document.getElementById('listBox6').addEventListener('change', function () {
        $('#listBox6 option').each(function () {
            if (this.selected) {

                $("#btSave").click(function (e) {


                    // img.src = this.getAttribute('data-dir') + this.options[this.selectedIndex].value;
                    var dataURL = canvas.toDataURL();
                    var selectedFileName = $("#listBox6 option:selected").text();

                    // call osaasto2.php and post the data
                    $.ajax({
                        type: "POST",
                        url: "osaasto2.php",
                        data: { data2: dataURL, name2: selectedFileName }
                    }).done(function (respond) {
                        alert(path2);
                    });
                    e.preventDefault();
                });

            }

        });

    });

});


//save canvas image on server 
$(function () {

    document.getElementById('listBox5').addEventListener('change', function () {
        $('#listBox5 option').each(function () {
            if (this.selected) {

                $("#btSave").click(function (e) {


                    // img.src = this.getAttribute('data-dir') + this.options[this.selectedIndex].value;
                    var dataURL = canvas.toDataURL();
                    var selectedFileName = $("#listBox5 option:selected").text();

                    // call osaasto2.php and post the data
                    $.ajax({
                        type: "POST",
                        url: "osaasto2.php",
                        data: { data3: dataURL, name3: selectedFileName }
                    }).done(function (respond) {
                        alert(path2);
                    });
                    e.preventDefault();
                });

            }

        });

    });

});


//save canvas image on server 
$(function () {

    document.getElementById('listBox4').addEventListener('change', function () {
        $('#listBox4 option').each(function () {
            if (this.selected) {

                $("#btSave").click(function (e) {


                    // img.src = this.getAttribute('data-dir') + this.options[this.selectedIndex].value;
                    var dataURL = canvas.toDataURL();
                    var selectedFileName = $("#listBox4 option:selected").text();

                    // call osaasto2.php and post the data
                    $.ajax({
                        type: "POST",
                        url: "osaasto2.php",
                        data: { data4: dataURL, name4: selectedFileName }
                    }).done(function (respond) {
                        alert(path2);
                    });
                    e.preventDefault();
                });

            }

        });

    });

});

//save canvas image on server 
$(function () {

    document.getElementById('listBox3').addEventListener('change', function () {
        $('#listBox3 option').each(function () {
            if (this.selected) {

                $("#btSave").click(function (e) {


                    // img.src = this.getAttribute('data-dir') + this.options[this.selectedIndex].value;
                    var dataURL = canvas.toDataURL();
                    var selectedFileName = $("#listBox3 option:selected").text();

                    // call osaasto2.php and post the data
                    $.ajax({
                        type: "POST",
                        url: "osaasto2.php",
                        data: { data5: dataURL, name5: selectedFileName }
                    }).done(function (respond) {
                        alert(path2);
                    });
                    e.preventDefault();
                });

            }

        });

    });

});


//save canvas image on server 
$(function () {

    document.getElementById('listBox2').addEventListener('change', function () {
        $('#listBox2 option').each(function () {
            if (this.selected) {

                $("#btSave").click(function (e) {


                    // img.src = this.getAttribute('data-dir') + this.options[this.selectedIndex].value;
                    var dataURL = canvas.toDataURL();
                    var selectedFileName = $("#listBox2 option:selected").text();

                    // call osaasto2.php and post the data
                    $.ajax({
                        type: "POST",
                        url: "osaasto2.php",
                        data: { data6: dataURL, name6: selectedFileName }
                    }).done(function (respond) {
                        alert(path2);
                    });
                    e.preventDefault();
                });

            }

        });

    });

});


//save canvas image on server 
$(function () {

    document.getElementById('listBox1').addEventListener('change', function () {
        $('#listBox1 option').each(function () {
            if (this.selected) {

                $("#btSave").click(function (e) {


                    // img.src = this.getAttribute('data-dir') + this.options[this.selectedIndex].value;
                    var dataURL = canvas.toDataURL();
                    var selectedFileName = $("#listBox1 option:selected").text();

                    // call osaasto2.php and post the data
                    $.ajax({
                        type: "POST",
                        url: "osaasto2.php",
                        data: { data7: dataURL, name7: selectedFileName }
                    }).done(function (respond) {
                        alert(path2);
                    });
                    e.preventDefault();
                });

            }

        });

    });

});

//close canvas 
$(function () {
    $("#close").click(function (e) {
        // context.setTransform(1, 0, 0, 1, 0, 0);
        //  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

        $('.listBox').css({ 'visibility': 'visible' });
        $('.buttonValmisDiv').css({ 'visibility': 'visible' });
        $('#divLabel').show();
        $('.valmisDiv').css({ 'margin-top': '', 'margin-left': '' });
        $('.listOfallListBoxDiv').css({ 'margin-top': '', 'margin-left': '' });
        $('.historiaDiv').css({ 'margin-top': '', 'margin-left': '' });

        // $("#autoupdateLabel").fadeIn(2000)
        // $("#updateButton").fadeIn(2000)
        // $("#updataCheckBox").fadeIn(2000);
        $("#canvas").hide();
        $("#ShowSelectedName").hide();
        $("#valmisDiv").fadeIn(2000);
        $("#historiaDiv").fadeIn(2000);
        $("#listOfallListBoxDiv").fadeIn(2000);

        $("#listBox1").val("");
        $("#listBox2").val("");
        $("#listBox3").val("");
        $("#listBox4").val("");
        $("#listBox5").val("");
        $("#listBox6").val("");
        $("#listBox7").val("");

        $("#listBoxValmis").val("");
        $("#listOfallListBox").val("");
        $("#listBoxHistoria").val("");

        if ($("#messangerDiv").is(":visible")) {
            $("#messangerDiv").hide();

        }

        e.preventDefault();

    });
});

$(function () {

    //[fill canvas with text from input nameField text]

    $('[name="nameFieldCheckBox"]').change(function () {

        if ($(this).is(':checked')) {


            var activateCode = true;

            //canvas
            var canvas = document.getElementById("canvas");
            var context = canvas.getContext("2d");

            //font
            context.font = "14px Arial";

            var gradient = context.createLinearGradient(0, 0, canvas.width, 0);
            // gradient.addColorStop("0", " magenta");
            // gradient.addColorStop("0.5", "blue");
            gradient.addColorStop("1.0", "red");
            context.fillStyle = gradient;

            // date
            var tdate = new Date();
            var dd = tdate.getDate(); //yields day
            var MM = tdate.getMonth(); //yields month
            var yyyy = tdate.getFullYear(); //yields year
            var currentDate = dd + "-" + (MM + 1) + "-" + yyyy;

            //time
            var date = new Date();
            var time = "/" + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

            if (activateCode === true) {
                //text
                var text = document.getElementById("nameField").value;
                context.beginPath();
                context.fillText(text + " " + " " + currentDate + time, 70, 50);

                activateCode = false;

                $("#nameFieldCheckBox").prop("checked", false);


            }


        }

        else {



        }


    });

});

