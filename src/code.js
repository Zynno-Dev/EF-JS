$("#ticket").hide();
$("#resultados").hide();

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
let destino2 = ""
$("#cordoba").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Córdoba");
  destinodelviaje = "cordoba"
  destino2 = "Córdoba"
});

$("#santa_fe").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Santa Fe");
  destinodelviaje = "santa_fe"
  destino2 = "Santa Fe"
});

$("#neuquen").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Neuquén");
  destinodelviaje = "neuquen"
  destino2 = "Neuquén"
});

$("#salta").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Salta");
  destinodelviaje = "salta"
  destino2 = "Salta"
});

$("#formosa").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Formosa");
  destinodelviaje = "formosa"
  destino2 = "Formosa"
});

$("#rio_negro").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Rio Negro");
  destinodelviaje ="rio_negro"
  destino2 = "Rio Negro"
});

$("#tierra_del_fuego").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Tierra Del Fuego");
  destinodelviaje ="tierra_del_fuego"
  destino2 = "Tierra Del Fuego"
});

$("#misiones").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("Misiones");
  destinodelviaje = "misiones"
  destino2 = "Misiones"
});

$("#la_pampa").click(function (e) {
  $("#main").hide("slow");
  $("#ticket").show("slow");
  $("#vuelotxt").text("La Pampa");
  destinodelviaje = "la_pampa"
  destino2 = "La Pampa"
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
let tiempoaprox = ""
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
            tiempoaprox = answer.cordoba.tiempo
        }
        if (destinodelviaje = santa_fe){
            costo = answer.santa_fe.precio
            tiempoaprox = answer.santa_fe.tiempo
        }
        if (destinodelviaje = neuquen){
            costo = answer.neuquen.precio
            tiempoaprox = answer.neuquen.tiempo
        }
        if (destinodelviaje = salta){
            costo = answer.salta.precio
            tiempoaprox = answer.salta.tiempo
        }
        if (destinodelviaje = formosa){
            costo = answer.formosa.precio
            tiempoaprox = answer.formosa.tiempo
        }
        if (destinodelviaje = rio_negro){
            costo = answer.rio_negro.precio
            tiempoaprox = answer.rio_negro.tiempo
        }
        if (destinodelviaje = tierra_del_fuego){
            costo = answer.tierra_del_fuego.precio
            tiempoaprox = answer.tierra_del_fuego.tiempo
        }
        if (destinodelviaje = misiones){
            costo = answer.misiones.precio
            tiempoaprox = answer.misiones.tiempo
        }
        if (destinodelviaje = la_pampa){
            costo = answer.la_pampa.precio
            tiempoaprox = answer.la_pampa.tiempo
        }
        pasajero1 = new pasajes(nombre, apellido, pjnum, destinodelviaje, fechav, (costo * pjnum));
        $("#ticket").hide("slow");
        $("#resultados").show("slow");
        $("#nombreyapellido").text("Titular: " + nombre + " " + apellido);
        $("#cantdpasajeros").text("N° de pasajeros: " + pjnum);
        $("#costoxpasaje").text("Precio por pasaje: $" + costo);
        $("#costototal").text("Precio total: $" + (costo*pjnum));
        $("#destinodviaje").text("Destino: " + destino2);
        $("#tiempoestimado").text("Horas de vuelo: " + tiempoaprox);
    })
    .fail(function(xhr, status, error){
        console.log(xhr)
        console.log(status)
        console.log(error)
    })
})




