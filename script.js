/* =================================
   HALAMAN 1
================================= */

const peekButton =
    document.getElementById("peekButton");

const duduHidden =
    document.getElementById("duduHidden");

const letterScene =
    document.getElementById("letterScene");

const typedText =
    document.getElementById("typedText");


if (peekButton) {

    peekButton.addEventListener("click", function () {

        peekButton.classList.add("hide");

        duduHidden.classList.add("show");


        setTimeout(function () {

            letterScene.classList.add("show");

            startTyping();

        }, 700);

    });

}


/* ANIMASI KETIK */

function startTyping() {

    if (!typedText) return;


    const message =
        "Ehh adaa yang lagi bete yaa? 🥺 " +
        "Bosen yaa dikirimin inii terus sama Dika? " +
        "Tapi tenang ajaa, sekarang mah Revaa engga baca sendiri... " +
        "Dudu yang bacain buat Revaa 🤍";


    let i = 0;

    typedText.textContent = "";


    function type() {

        if (i < message.length) {

            typedText.textContent +=
                message.charAt(i);

            i++;

            setTimeout(type, 45);

        }

    }


    type();

}


/* =================================
   HALAMAN 2
================================= */

const cassette =
    document.getElementById("cassette");

const audio =
    document.getElementById("voiceAudio");

const afterAudio =
    document.getElementById("afterAudio");

const radioStatus =
    document.getElementById("radioStatus");

const radioText =
    document.getElementById("radioText");

const clickHint =
    document.getElementById("clickHint");


if (cassette && audio) {

    cassette.addEventListener("click", function () {

        if (
            cassette.classList.contains("inserted")
        ) {
            return;
        }


        /* Kaset bergerak ke radio */

        cassette.classList.add("inserted");


        radioStatus.textContent =
            "PLAYING";

        radioText.textContent =
            "DUDU MESSAGE ♡";

        clickHint.textContent =
            "Pesannya sedang diputar... 🎵";


        /* Putar MP3 */

        audio.play().catch(function () {

            clickHint.textContent =
                "Tekan play pada audio jika browser meminta izin.";

        });

    });


    /* Setelah MP3 selesai */

    audio.addEventListener("ended", function () {

        radioStatus.textContent =
            "DONE ♡";

        radioText.textContent =
            "THANK YOU";

        clickHint.textContent =
            "Pesannya sudah selesai 🤍";


        /* Munculkan permintaan maaf */

        afterAudio.classList.add("show");

    });

}
