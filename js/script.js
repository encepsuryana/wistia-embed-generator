function init() {
  // Clear forms here
  document.getElementById("input").value = "";
  document.getElementById("output").value = "";
}
window.onload = init;

function priview_embed() {
  var content = document.getElementById("output").value;
  

  if (!content == "") {
    Swal.fire({
      title: "Preview Video",
      html: content
    });
  } else {
    swal.fire({
      title: "Error!",
      text: "Tidak ada Video yang tersedia",
      icon: "error",
      button: "OK",
    });
  }
}

function copyText() {
  var copy = $("#output").val();
  $("#output").select();
  document.execCommand("copy");

  if (!copy == "") {
    Swal.fire({
      icon: "success",
      title: "Text copied to clipboard",
      text: "Video Embed berhasil disalin",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Selesai",

      timer: 4000,
    });
  } else {
    swal.fire({
      title: "Error!",
      text: "Tidak ada teks yang disalin",
      icon: "error",
      button: "OK",
    });
  }
}

function onProcess() {
  function htmlDecode(input) {
    var e = document.createElement("div");
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  function copyText() {
    var copy = $("#output").val();
    $("#output").select();
    document.execCommand("copy");
  }

  var input = document.getElementById("input").value;

  var scriptEmbed = "";
  scriptEmbed += htmlDecode(
    '&lt;script src="https://fast.wistia.com/embed/medias/' +
      input +
      '.jsonp" async>&lt;/script&gt;&lt;script src="https://fast.wistia.com/assets/external/E-v1.js" async>&lt;/script&gt;'
  );

  var code = "";
  code += htmlDecode(
    '&lt;script src="https://fast.wistia.com/embed/medias/' +
      input +
      '.jsonp" async>&lt;/script&gt;&lt;script src="https://fast.wistia.com/assets/external/E-v1.js" async>&lt;/script&gt;'
  );
  code +=
    '<div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_' +
    input +
    ' videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/' +
    input +
    '/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>';

  if (input == "") {
    document.getElementById("output").value = "";
    console.log("Data Inputan Kosong!");
    swal.fire({
      title: "Error!",
      text: "Kode Wistia tidak boleh Kosong!",
      icon: "error",
      button: "OK",
    });
  } else {
    Swal.fire({
      icon: "info",
      title: "Video Embed Wistia",
      input: "textarea",
      inputAttributes: {
        id: "output",
      },
      inputValue: code,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Salin Video Embed",
    }).then((result) => {
      if (result.isConfirmed) {
        copyText();
        Swal.fire("Berhasil", "Video Embed Wistia berhasil disalin", "success");
      }
    });

    document.getElementById("output").value = code;
    document.getElementById('scriptEmbed').innerHTML = code;
    console.log(code, scriptEmbed);
  }

  // document.getElementById('hasil').innerHTML = code;
}
