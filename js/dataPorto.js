function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

//usage:
readTextFile("../data/portofolio.json", function (text) {
  var data = JSON.parse(text);
  console.log(data);
});
// ===================================================================================
var htmls = ``;
dataPrt.map((__, i) => {
  htmls += `<div class="gallery-list row">
                <div class="col-md-4 col-sm-6 gallery-grid ${__.categoty}">
                  <div class="gallery-single fix">
                    <img
                      src="${__.img}"
                      class="img-fluid"
                      alt="Image"
                    />
                    <div
                      class="text-center"
                      style="
                        position: relative;
                        margin-top: -30px;
                        background-color: rgba(0, 0, 0, 0.5);
                        color: #fff;
                      "
                    >
                      <span>${__.title}</span>
                    </div>
                    <div class="img-overlay">
                      <a
                        href="uploads/gallery_img-01.jpg"
                        data-rel="prettyPhoto[gal]"
                        class="hoverbutton global-radius"
                        ><i class="fa fa-picture-o"></i
                      ></a>
                    </div>
                  </div>
                </div>
              </div>`;
});
$("#prt").html(htmls);
