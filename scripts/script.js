        $(".buttonFirstNew").click(function(e){
            e.preventDefault();
            $("#newFirstModal").modal('hide');
            $("#newSecondModal").modal('hide');
            $("#newModal").modal('show');
        });
        $(".buttonThirdNew").click(function(e){
            e.preventDefault();
            $("#newModal").modal('hide');
            $("#newSecondModal").modal('hide');
            $("#newFirstModal").modal('show');
        });
        $(".buttonFifthNew").click(function(e){
            e.preventDefault();
            $("#newModal").modal('hide');
            $("#newFirstModal").modal('hide');
            $("#newSecondModal").modal('show');
        });
        $("#closeFirstNew").click(function(e) {
            e.preventDefault();
            $("#newModal").modal('hide');
            $("#newFirstModal").modal('hide');
            $("#newSecondModal").modal('hide');
        });
        $("#closeSecondNew").click(function(e) {
            e.preventDefault();
            $("#newFirstModal").modal('hide');
            $("#newModal").modal('hide');
            $("#newSecondModal").modal('hide');
        });
        $("#closeThirdNew").click(function(e) {
            e.preventDefault();
            $("#newFirstModal").modal('hide');
            $("#newModal").modal('hide');
            $("#newSecondModal").modal('hide');

        });

    function newDoc(){
        window.location.assign("detalGame.html");
            }
            function toggleFullScreen() {
                if ((document.fullScreenElement && document.fullScreenElement !== null) ||
                    (!document.mozFullScreen && !document.webkitIsFullScreen)) {
                    if (document.documentElement.requestFullScreen) {
                        document.documentElement.requestFullScreen();
                    } else if (document.documentElement.mozRequestFullScreen) {
                        document.documentElement.mozRequestFullScreen();
                    } else if (document.documentElement.webkitRequestFullScreen) {
                        document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                    }
                } else {
                    if (document.cancelFullScreen) {
                        document.cancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    }
                }
            }

    function auto_grow(element) {
        element.style.height = "5px";
        element.style.height = (element.scrollHeight)+"px";
    }
    $("#buttonBar").click(function(e) {
        e.preventDefault();
        $("#wrap").toggleClass("toggle");
    });
    $("#hideBar").click(function(e) {
        e.preventDefault();
        $("#wrap").toggleClass("toggle");
    });
    $("#closeFirst").click(function(e) {
        e.preventDefault();
        $("#wrapFirst").toggleClass("toggleFirst");
    });
    $("#closeSecond").click(function(e) {
        e.preventDefault();
        $("#wrapSecond").toggleClass("toggleSecond");
    });
    $("#closeThird").click(function(e) {
        e.preventDefault();
        $("#wrapThird").toggleClass("toggleThird");
    });
    $("#closeForth").click(function(e) {
        e.preventDefault();
        $("#wrapForth").toggleClass("toggleForth");
    });
    $("#closeFifth").click(function(e) {
        e.preventDefault();
        $("#wrapFifth").toggleClass("toggleFifth");
    });
    $("#closeSix").click(function(e) {
        e.preventDefault();
        $("#wrapSix").toggleClass("toggleSix");
    });
    $("#buttonFirst").click(function(e) {
        e.preventDefault();
        $("#wrapSecond").removeClass("toggleSecond");
        $("#wrapThird").removeClass("toggleThird");
        $("#wrapForth").removeClass("toggleForth");
        $("#wrapFifth").removeClass("toggleFifth");
        $("#wrapSix").removeClass("toggleSix");
        $("#wrapFirst").toggleClass("toggleFirst");
    });
    $("#buttonSecond").click(function(e) {
        e.preventDefault();
        $("#wrapFirst").removeClass("toggleFirst");
        $("#wrapThird").removeClass("toggleThird");
        $("#wrapForth").removeClass("toggleForth");
        $("#wrapFifth").removeClass("toggleFifth");
        $("#wrapSix").removeClass("toggleSix");
        $("#wrapSecond").toggleClass("toggleSecond");
    });
    $("#buttonThird").click(function(e) {
        e.preventDefault();
        $("#wrapFirst").removeClass("toggleFirst");
        $("#wrapSecond").removeClass("toggleSecond");
        $("#wrapForth").removeClass("toggleForth");
        $("#wrapFifth").removeClass("toggleFifth");
        $("#wrapSix").removeClass("toggleSix");
        $("#wrapThird").toggleClass("toggleThird");
    });
    $("#buttonForth").click(function(e) {
        e.preventDefault();
        $("#wrapFirst").removeClass("toggleFirst");
        $("#wrapSecond").removeClass("toggleSecond");
        $("#wrapThird").removeClass("toggleThird");
        $("#wrapFifth").removeClass("toggleFifth");
        $("#wrapSix").removeClass("toggleSix");
        $("#wrapForth").toggleClass("toggleForth");
    });
    $("#buttonFifth").click(function(e) {
        e.preventDefault();
        $("#wrapFirst").removeClass("toggleFirst");
        $("#wrapSecond").removeClass("toggleSecond");
        $("#wrapThird").removeClass("toggleThird");
        $("#wrapForth").removeClass("toggleForth");
        $("#wrapSix").removeClass("toggleSix");
        $("#wrapFifth").toggleClass("toggleFifth");
    });
    $("#buttonSix").click(function(e) {
        e.preventDefault();
        $("#wrapFirst").removeClass("toggleFirst");
        $("#wrapSecond").removeClass("toggleSecond");
        $("#wrapThird").removeClass("toggleThird");
        $("#wrapForth").removeClass("toggleForth");
        $("#wrapFifth").removeClass("toggleFifth");
        $("#wrapSix").toggleClass("toggleSix");
    });



