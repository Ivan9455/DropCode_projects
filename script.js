function loading_event() {
    var div = document.getElementsByClassName("select1_click");
    var div1 = document.getElementsByClassName("select1_leave");
    var div2 = document.getElementsByClassName("select_1_update");
    var arrow_up = document.getElementsByClassName("select_2_2_arrow1");
    var arrow_down = document.getElementsByClassName("select_2_2_arrow2");
    var select_volume = document.getElementsByClassName("select_volume");
    for (let i = 0; i < div.length; i++) {
        div[i].addEventListener('click', function () {
            if (this.parentElement.getElementsByClassName("open").length === 0) {
                this.parentElement.getElementsByClassName("hidden")[0].classList.add("open");
                this.parentElement.getElementsByClassName("open")[0].classList.remove("hidden");
            }
        });
        div1[i].addEventListener('mouseleave', function () {
            if (this.getElementsByClassName("open").length !== 0) {
                this.getElementsByClassName("open")[0].classList.add("hidden");
                this.getElementsByClassName("hidden")[0].classList.remove("open");
            }
        });
        arrow_up[i].addEventListener('click', function () {
            var str = this.parentElement.parentElement.getElementsByClassName("select_text");
            str[0].innerText = parseInt(str[0].innerText) + 1;
        });
        arrow_down[i].addEventListener('click', function () {
            var str = this.parentElement.parentElement.getElementsByClassName("select_text");
            str[0].innerText = parseInt(str[0].innerText) - 1;
        });
        select_volume[i].addEventListener('click', function () {
            if (this.getElementsByClassName("open").length === 0) {
                this.getElementsByClassName("hidden")[0].classList.add("open");
                this.getElementsByClassName("open")[0].classList.remove("hidden");
            }
        });
        select_volume[i].addEventListener('mouseleave', function () {
            console.log(this)
            console.log(this.getElementsByClassName("hidden").length)
            if (this.getElementsByClassName("open").length !== 0) {
                this.getElementsByClassName("open")[0].classList.add("hidden");
                this.getElementsByClassName("hidden")[0].classList.remove("open");
            }
            // if (this.getElementsByClassName("open").length === 0) {
            //     this.getElementsByClassName("open")[0].classList.add("hidden");
            //     this.getElementsByClassName("hidden")[0].classList.remove("open");
            // }
            // if (this.parentElement.getElementsByClassName("open").length !== 0) {
            //     this.parentElement.getElementsByClassName("open")[0].classList.add("hidden");
            //     this.parentElement.getElementsByClassName("hidden")[0].classList.remove("open");
            // }
        });
    }
    for (let i = 0; i < div2.length; i++) {
        div2[i].addEventListener('click', function () {
            this.parentElement.parentElement.getElementsByClassName("select_text")[0].innerText = this.innerText;
        });
    }
}

window.onload = function () {
    loading_event();
};

var opt = function () {
    console.log(this)
    // document.getElementById("id" + e).classList.remove("hidden");
    // document.getElementById("id" + e).classList.add("open");
};

var opt_close = function () {
    // document.getElementById("id" + e).classList.add("hidden");
    // document.getElementById("id" + e).classList.remove("open");
};
var up = function (id) {
    console.log(event)
    document.getElementById("select_" + id).innerText = event.target.innerText;
};
var arrow_up = function (id) {
    //console.log(document.getElementById("select1_" + id))
    let str = document.getElementById("select2_" + id);
    let num = parseInt(str.innerText);
    str.innerText = num + 1;

};
var arrow_down = function (id) {
    document.getElementById("select2_" + id).innerText -= 1;
};
var up_v = function (id) {
    document.getElementById("select3_" + id).innerText = event.target.innerText;
};
var opt_v = function (id) {
    document.getElementById("id3_" + id).classList.remove("hidden");
    document.getElementById("id3_" + id).classList.add("open");
};
var opt_close_v = function (id) {
    document.getElementById("id3_" + id).classList.add("hidden");
    document.getElementById("id3_" + id).classList.remove("open");
};