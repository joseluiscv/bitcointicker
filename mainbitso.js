var url="https://api.bitso.com/v3/ticker/"
var last;
var high;
var low;
var volume;

$(document).ready(function() {
  console.log('Hola');

  // Declare insertPayload(payload)
  // Insert payload last high low and volume in respective html element
  function insertPayload(payload){
    last = parseInt(payload[0].last).toFixed(2);
    high = payload[0].high;
    low = payload[0].low;
    volume = payload[0].volume;
    // .parseInt()
    // .toFixed(2)

    $("#last").text(last);
    $("#high").text(high);
    $("#low").text(low);
    $("#volume").text(volume);

  };

  function calculate() {
    getData()

    var monto = $("#monto").val();

    $("#precio-bitcoin").text(last);
    $("#total").text(last * monto);
  }

  function getData(){
    $.ajax({
      url:url,
      success: function(data){
        var payload = data['payload']

        insertPayload(payload)
        console.log(payload);
      }
    })
  }

  getData()

  $("#boton-precio").on("click", calculate)

});



// $(document).ready(function() {
//   console.log('FFF');
//
//   function getData() {
//
//   }
//
//   $('#boton-precio').click(function(event) {
//     console.log(event);
//     $.ajax({
//       url: "https://api.bitso.com/v3/ticker/",
//       sucess: function (data){
//           console.log(data)
//           insertBitsoData(data)
//       }
//     })
//   });
//
//
//
//   function insertBitsoData(data) {
//     var payload = data['payload'];
//     console.log(data);
//     // for(var i = 0; i < payload.length; i++) {
//     //   $('#bitso-table').append(
//     //     '<tr>' +
//     //     '   <td>' + payload[i]["book"] + '</td>' +
//     //     '   <td>' + payload[i]['minimum_price'] + '</td>' +
//     //     '</tr>'
//     //   )
//     // }
//   }
// })
