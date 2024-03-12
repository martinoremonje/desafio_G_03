let btn = document.getElementById("btn");
let texto = document.getElementById("text1");
let texto1 = document.getElementById("text2");
let texto2 = document.getElementById("text3");
let textoTable1 = document.getElementById("textTable1");
let textoTable2 = document.getElementById("textTable2");
let textoTable3 = document.getElementById("textTable3");
let tabla = "<h2 style='color: red'>Radiologia</h2><br>";  
let tabla2 = "<h2 style='color: red'>Traumatologia</h2><br>";
let tabla3 = "<h2 style='color: red'>Dental</h2><br>"; 

let click = true;

btn.addEventListener("click",function(){
    if(click){
        mostrarUltimos()
        click = false
    }    
})

const mostrarUltimos = () =>{
    let first = Radiologia[0];
    let last = Radiologia[Radiologia.length - 1];
    let first1 = Traumatologia[0];
    let last1 = Traumatologia[Traumatologia.length - 1];
    let first2 = Dental[0];
    let last2 = Dental[Dental.length - 1];
    tabla += `<tr><td>Primer paciente : </td><td>${first.paciente} </td><td>- ${first.prevision}</td></tr>`;
    tabla += `<tr><td>Ultimo paciente : </td><td>${last.paciente}</td><td>- ${last.prevision}</td></tr>`; 
    tabla2 += `<tr><td>Primer paciente : </td><td>${first1.paciente}</td><td>- ${first1.prevision}</td></tr>`;
    tabla2 += `<tr><td>Ultimo paciente : </td><td>${last1.paciente}</td><td>- ${last1.prevision}</td></tr>`;
    tabla3 += `<tr><td>Primer paciente : </td><td>${first2.paciente}</td><td>- ${first2.prevision}</td></tr>`;
    tabla3 += `<tr><td>Ultimo paciente : </td><td>${last2.paciente}</td><td>- ${last2.prevision}</td></tr>`;  
    texto.innerHTML = tabla;
    texto1.innerHTML = tabla2;
    texto2.innerHTML = tabla3;
};
const mostrarTablas = () =>{
    let textoTabla1 = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Prevision</th></tr>";
    let textoTabla2 = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Prevision</th></tr>";
    let textoTabla3 = "<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Prevision</th></tr>";
    Radiologia.forEach(e=>{
        textoTabla1 +=  `<tr>
        <td>${e.hora}</td>
        <td>${e.especialista}</td>
        <td>${e.paciente}</td>
        <td>${e.rut}</td>
        <td>${e.prevision}</td>
        </tr>`;
       
    }); textoTable1.innerHTML = textoTabla1;
    Traumatologia.forEach(e=>{
        textoTabla2 +=  `<tr>
        <td>${e.hora}</td>
        <td>${e.especialista}</td>
        <td>${e.paciente}</td>
        <td>${e.rut}</td>
        <td>${e.prevision}</td>
        </tr>`;
       
    }); textoTable2.innerHTML = textoTabla2;
    Dental.forEach(e=>{
        textoTabla3 +=  `<tr>
        <td>${e.hora}</td>
        <td>${e.especialista}</td>
        <td>${e.paciente}</td>
        <td>${e.rut}</td>
        <td>${e.prevision}</td>
        </tr>`;
       
    }); textoTable3.innerHTML = textoTabla3;
}



const Radiologia = [
    {"hora": "11:00:00", 
    "especialista": "IGNACIO SCHULZ", 
    "paciente":"FRANCISCA ROJAS", 
    "rut": "9878782-1", 
    "prevision":"FONASA"}
    ,
    {"hora": "11:30:00", 
    "especialista": "FEDERICO SUBERCASEAUX", 
    "paciente":"PAMELA ESTRADA", 
    "rut": "15345241-3", 
    "prevision":"ISAPRE"}
    ,
    {"hora": "15:00:00", 
    "especialista": "FERNANDO WURTHZ",
     "paciente":"ARMANDO LUNA", 
     "rut": "16445345-9", 
     "prevision":"ISAPRE"}
     ,
     {"hora": "15:30:00", 
     "especialista": "ANA MARIA GODOY",
      "paciente":"MANUEL GODOY",
       "rut": "17666419-0", 
       "prevision":"FONASA"}
       ,
       {"hora": "16:00:00", 
       "especialista": "PATRICIA SUAZO", 
       "paciente":"RAMON ULLOA", 
       "rut": "14989389-K",
        "prevision":"FONASA"}
];
const Traumatologia = [
    {"hora": "8:00:00", 
    "especialista": "MARIA PAZ ALTUZARRA", 
    "paciente":"PAULA SANCHEZ", 
    "rut": "15554774-5", 
    "prevision":"FONASA"}
    ,
    {"hora": "10:00:00", 
    "especialista": "RAUL ARAYA", 
    "paciente":"ANGÉLICA NAVAS", 
    "rut": "15444147-9", 
    "prevision":"ISAPRE"}
    ,
    {"hora": "10:30:00", 
    "especialista": "MARIA ARRIAGADA",
     "paciente":"ANA KLAPP", 
     "rut": "17879423-9", 
     "prevision":"ISAPRE"}
     ,
     {"hora": "11:00:00", 
     "especialista": "ALEJANDRO BADILLA",
      "paciente":"FELIPE MARDONES",
       "rut": "1547423-6", 
       "prevision":"ISAPRE"}
       ,
       {"hora": "11:30:00", 
       "especialista": "CECILIA BUDNIK", 
       "paciente":"DIEGO MARRE", 
       "rut": "16554741-K",
        "prevision":"FONASA"}
        ,
       {"hora": "12:00:00", 
       "especialista": "ARTURO CAVAGNARO", 
       "paciente":"CECILIA MENDEZ", 
       "rut": "9747535-8",
        "prevision":"ISAPRE"}
        ,
       {"hora": "12:30:00", 
       "especialista": "ANDRES KANACRI", 
       "paciente":"MARCIAL SUAZO", 
       "rut": "11254785-5",
        "prevision":"ISAPRE"}
];
const Dental = [
    { hora: "8:30:00", 
    especialista: "ANDREA ZUÑIGA", 
    paciente: "MARCELA RETAMAL", 
    rut: "11123425-6", 
    prevision: "ISAPRE"},

    { hora: "11:00:00", 
    especialista: "MARIA PIA ZAÑARTU", 
    paciente: "ANGEL MUÑOZ", 
    rut: "9878789-2", 
    prevision: "ISAPRE"}
    ,
    { hora: "11:30:00", 
    especialista: "SCARLETT WITTING", 
    paciente: "MARIO KAST", 
    rut: "7998789-5", 
    prevision: "FONASA"}
    ,
    { hora: "13:00:00", 
    especialista: "FRANCISCO VON TEUBER", 
    paciente: "KARIN FERNANDEZ", 
    rut: "18887662-K", 
    prevision: "FONASA"}
    ,
    { hora: "13:30:00", 
    especialista: "EDUARDO VIÑUELA", 
    paciente: "HUGO SANCHEZ", 
    rut: "17665461-4", 
    prevision: "FONASA"}
    ,
    { hora: "14:00:00", 
    especialista: "RAQUEL VILLASECA", 
    paciente: "ANA SEPULVEDA", 
    rut: "14441281-0", 
    prevision: "ISAPRE"},
  ];

mostrarTablas();
console.log(Radiologia, Traumatologia, Dental)
