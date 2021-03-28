$("#ticket").hide();

$("#pasajeros").change(function () {
  let pjnum = $("#pasajeros").val();
  $("#pjlabel").text(pjnum + " Pasajeros");
});

let nombre = "";
$("#nombre").change(function () {
  nombre = $("#nombre").val();
});

let apellido = "";
$("#apellido").change(function () {
  apellido = $("#apellido").val();
});

let fehav = "";
$("#fecha").change(function () {
  fechav = $("#fecha").val();
  console.log(fechav);
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

$("#cordoba").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Córdoba");
});

$("#santa_fe").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Santa Fe");
});

$("#neuquen").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Neuquén");
});

$("#salta").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Salta");
});

$("#formosa").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Formosa");
});

$("#rio_negro").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Rio Negro");
});

$("#tierra_del_fuego").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Tierra Del Fuego");
});

$("#misiones").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Misiones");
});

$("#la_pampa").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("La Pampa");
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