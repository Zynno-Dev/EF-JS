$("#ticket").hide();

let pjnum = ""
$("#pasajeros").change(function () {
  pjnum = $("#pasajeros").val();
  $("#pjlabel").text(pjnum + " Pasajeros: ");
});

let nombre = "";
$("#nombre").change(function () {
  nombre = $("#nombre").val();
});

let apellido = "";
$("#apellido").change(function () {
  apellido = $("#apellido").val();
});

let fechav = "";
$("#fecha").change(function () {
  fechav = $("#fecha").val();
});

let hoy = new Date();
let dd = hoy.getDate();
let mm = hoy.getMonth() + 1;
let yyyy = hoy.getFullYear();
if (dd < 10) {
  dd = "0" + dd;
}
if (mm < 10) {
  mm = "0" + mm;
}

hoy = yyyy + "-" + mm + "-" + dd;
$("#fecha").attr("min", hoy);

let destinodelviaje = ""
$("#cordoba").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Córdoba");
  destinodelviaje = "cordoba"
});

$("#santa_fe").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Santa Fe");
  destinodelviaje = "santa_fe"
});

$("#neuquen").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Neuquén");
  destinodelviaje = "neuquen"
});

$("#salta").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Salta");
  destinodelviaje = "salta"
});

$("#formosa").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Formosa");
  destinodelviaje = "formosa"
});

$("#rio_negro").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Rio Negro");
  destinodelviaje ="rio_negro"
});

$("#tierra_del_fuego").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Tierra Del Fuego");
  destinodelviaje ="tierra_del_fuego"
});

$("#misiones").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Misiones");
  destinodelviaje = "misiones"
});

$("#la_pampa").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("La Pampa");
  destinodelviaje = "la_pampa"
});

class pasajes {
    constructor  (nombre_pasajero, apellido_pasajero, cantidad_pasajero, destino, fecha, costo){
        this.nombre_pasajero = nombre_pasajero;
        this.apellido_pasajero = apellido_pasajero;
        this.cantidad_pasajero = cantidad_pasajero;
        this.destino = destino;
        this.fecha = fecha;
        this.costo = costo;
    }
}

let pasajero1 = ""
let costo = ""
$("#boton").click(function() {
    $.ajax({
        url:"https://zynno-dev.github.io/EF-JS/src/destinos.json",
        type:"GET",
        dataType:"json"
    })
    .done(function(resultado){
        let answer = resultado
        if (destinodelviaje = cordoba){
            costo = answer.cordoba.precio
        }
        if (destinodelviaje = santa_fe){
            costo = answer.santa_fe.precio
        }
        if (destinodelviaje = neuquen){
            costo = answer.neuquen.precio
        }
        if (destinodelviaje = salta){
            costo = answer.salta.precio
        }
        if (destinodelviaje = formosa){
            costo = answer.formosa.precio
        }
        if (destinodelviaje = rio_negro){
            costo = answer.rio_negro.precio
        }
        if (destinodelviaje = tierra_del_fuego){
            costo = answer.tierra_del_fuego.precio
        }
        if (destinodelviaje = misiones){
            costo = answer.misiones.precio
        }
        if (destinodelviaje = la_pampa){
            costo = answer.la_pampa.precio
        }
        pasajero1 = new pasajes(nombre, apellido, pjnum, destinodelviaje, fechav, (costo * pjnum));
    })
    .fail(function(xhr, status, error){
        console.log(xhr)
        console.log(status)
        console.log(error)
    })
})




