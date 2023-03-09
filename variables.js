/////PANTALLA DE INICIO

////Tipo Navegación
con_menunumeros_v2 = true;
con_menunumeros_vhz = false;
con_menunumeros_old = false;
con_botonesavance = false;
con_botonmenu = false;
con_textoavance = false;

navega_lineal = true; 
embebido = false;
////Posición del personaje
y_personaje_inicial =310;
x_personaje_inicial_ini = 132;
x_personaje_inicial_fin = 222;

////Posición título curso y módulo
x_titulo_cp = 295;
y_titulo_cp = 150;


//////Posisción boton iniciar
x_btn_ini = 595;
y_btn_ini = 310;


/////Posición logo cliente
x_logo_client = 600;
y_logo_client = 481;
x_logo_client_fin = 1151;
y_logo_client_fin = 42;
scale_logo_client_ini = 0.9;
scale_logo_client_fin = 0.54;

///Botón créditos
con_creditos = false;
con_glosario = false;
con_sonidoover = false;
con_sonidoclic = false;

////Botón cerrar
x_boton_cerrar = 1236;
y_boton_cerrar = 20;
x_btn_glosario = 1152;
x_boton_menu = 976;

///Colores restro alimentación actividades
//colores_ruleta = ["#FAA628","#39A2E9","#CA3C78","#E65050","#2FAF74"]
colores_ruleta = ["#f9bd06","#f9bd06","#f9bd06","#f9bd06","#f9bd06"]

top_atv = 160;
top_at2 = 70;

opacidad_fondop1 = 0.01;
	
if(con_botonesavance||con_menunumeros_vhz){
	y_instruccionper = 520;
} else {
	y_instruccionper = 550;
}

btn_infografia = "0e3192" ///Importante debe ir sin #

tipo_iconos = "regular"; //solid, regular, light, thin, duotone;

icono_vineta = "<i class='fa-"+tipo_iconos+" fa-circle'></i>";
icono_indica = "<i class='fa-"+tipo_iconos+" fa-chevron-left'></i>";
icono_indica_right = "<i class='fa-"+tipo_iconos+" fa-chevron-right'></i>";
icono_indica_left = "<i class='fa-"+tipo_iconos+" fa-chevron-left'></i>";
icono_indica_principal = "<i class='fa-"+tipo_iconos+" fa-hand-pointer'></i>";
icono_indica_per = "<i class='fa-"+tipo_iconos+" fa-chevron-right'></i>";
icono_indica_circ = "<i class='fa-"+tipo_iconos+" fa-chevron-up'></i>";
icono_indica_clic = "<i class='fa-"+tipo_iconos+" fa-chevron-right'></i>";
icono_indica_clicb = "<i class='fa-"+tipo_iconos+" fa-chevron-up'></i>";
icono_indica_down = "<i class='fa-"+tipo_iconos+" fa-chevron-down'></i>";
icono_indica_up = "<i class='fa-"+tipo_iconos+" fa-chevron-up'></i>";
icono_check = "<i class='fa-"+tipo_iconos+" fa-check'></i>";
icono_wrong = "<i class='fa-"+tipo_iconos+" fa-times'></i>";
icono_zoom = "<i class='fa-"+tipo_iconos+" fa-search-plus'></i>";
icono_zoomout = "<i class='fa-"+tipo_iconos+" fa-search-minus'></i>";
icono_download = "<i class='fa-"+tipo_iconos+" fa-cloud-download-alt'></i>";
icono_go = "<i class='fa-"+tipo_iconos+" fa-chevron-right'></i>";
icono_play = "<i class='fa-"+tipo_iconos+" fa-play'></i>";
icono_play_circ = "<i class='fa-"+tipo_iconos+" fa-play-circle'></i>";
icono_stop = "<i class='fa-"+tipo_iconos+" fa-stop'></i>";
icono_cerrar = "<i class='fa-"+tipo_iconos+" fa-xmark'></i>";
icono_mas = "<i class='fa-"+tipo_iconos+" fa-chevron-double-up'></i>";
icono_menos = "<i class='fa-"+tipo_iconos+" fa-chevron-double-down'></i>";
icono_amplia = "<i class='fa-"+tipo_iconos+" fa-expand'></i>";
icono_menu = "<i class='fa-"+tipo_iconos+" fa-bars'></i></i>";
icono_candadoab = "<i class='fa-"+tipo_iconos+" fa-lock-keyhole-open'></i>";
icono_candadocerr = "<i class='fa-"+tipo_iconos+" fa-lock-keyhole'></i>";
icono_preg = "<i class='fa-"+tipo_iconos+" fa-question'></i>";
icono_messagecheck = "<i class='fa-"+tipo_iconos+" fa-message-check''></i>"
icono_cc = "<i class='fa-"+tipo_iconos+" fa-closed-captioning'></i>"

icono_ini_instruc = "";
icono_fin_instruc = "";

if(trato_usted){
	txt_instruccion_infog = "Pulse sobre los íconos.";
	txt_instruccion_interna = "Pulse sobre los textos resaltados.";
	txt_instruccion_circulos = "Pulse sobre cada botón.";
	txt_instruccion_clic = "Pulse las opciones de la izquierda."
	txt_instruccion_clicb = "Pulse las opciones de abajo."
} else {
	txt_instruccion_infog = "Pulsa sobre los íconos.";
	txt_instruccion_interna = "Pulsa sobre los textos resaltados.";
	txt_instruccion_circulos = "Pulsa sobre cada botón.";
	txt_instruccion_clic = "Pulsa las opciones de la izquierda."
	txt_instruccion_clicb = "Pulsa las opciones de abajo."
}

//////Personajes guia

/////Personaje 1




x_cabeza_per1 = 0; 
y_cabeza_per1 = 0; 

x_ceja_derecha_per1 = 44;
y_ceja_derecha_per1 = 28;

x_ceja_izquierda_per1 = 28;
y_ceja_izquierda_per1 = 28;

x_ojos_per1 = 22;
y_ojos_per1 = 27;

x_boca_per1 = 30;
y_boca_per1 = 52;

x_cabello_per1 = 0; 
y_cabello_per1 = 0; 
visible_cabello_per1 = false; 



x_contenedor_rostro_per1 = 118;
y_contenedor_rostro_per1 = 103;

x_logo_uniforme_per1_izq = x_boca_per1;
y_logo_uniforme_per1_izq = 0;
x_logo_uniforme_per1_der = x_boca_per1;
y_logo_uniforme_per1_der = 0;
visible_logo_uniforme_per1 = false;


x_tronco_per1 = 0;
y_tronco_per1 = 88;

//Boton personaje 1
//Rostro
scalex_contenedor_rostro2_per1 = 0.9;
scaley_contenedor_rostro2_per1 = 0.9;
x_contenedor_rostro2_per1 = 108;
y_contenedor_rostro2_per1 = 92;



//Boton personaje
if(con_menunumeros_v2){
	x_contenedor_btnpersonaje_per1 = 1085;
	y_contenedor_btnpersonaje_per1 = 388;
} else {
	x_contenedor_btnpersonaje_per1 = 1185;
	y_contenedor_btnpersonaje_per1 = 358;
}

scalesmallx_contenedor_btnpersonaje_per1 = 0.57;
scalesmally_contenedor_btnpersonaje_per1 = 0.57;
scalebigx_contenedor_btnpersonaje_per1 = 0.6;
scalebigy_contenedor_btnpersonaje_per1 = 0.6;

//Boton play
x_contenedor_audiobtn_per1 = 160;
y_contenedor_audiobtn_per1 = 306;
scalex_contenedor_audiobtn_per1 = 1.1;
scaley_contenedor_audiobtn_per1 = 1.1;


/////Personaje 2

x_cabeza_per2 = 0; 
y_cabeza_per2 = 0; 

x_ceja_derecha_per2 = 41;
y_ceja_derecha_per2 = 21;

x_ceja_izquierda_per2 = 21;
y_ceja_izquierda_per2 = 21;

x_ojos_per2 = 18;
y_ojos_per2 = 24;

x_boca_per2 = 26;
y_boca_per2 = 47;

x_cabello_per2 = x_boca_per2; 
y_cabello_per2 = 0; 
visible_cabello_per2 = false; 

x_contenedor_rostro_per2 = 105;
y_contenedor_rostro_per2 = 75;

x_logo_uniforme_per2_izq = x_boca_per2;
y_logo_uniforme_per2_izq = 0;
x_logo_uniforme_per2_der = x_boca_per2;
y_logo_uniforme_per2_der = 0;
visible_logo_uniforme_per2 = false;

x_tronco_per2 = 30;
y_tronco_per2 = 105;

//Boton personaje 2
//Rostro
scalex_contenedor_rostro2_per2 = 1;
scaley_contenedor_rostro2_per2 = 1;
x_contenedor_rostro2_per2 = 92;
y_contenedor_rostro2_per2 = 57;

//Boton personaje
if(con_menunumeros_v2){
	x_contenedor_btnpersonaje_per2 = 1085;
	y_contenedor_btnpersonaje_per2 = 388;
} else {
	x_contenedor_btnpersonaje_per2 = 1185;
	y_contenedor_btnpersonaje_per2 = 358;
}

scalesmallx_contenedor_btnpersonaje_per2 = 0.57;
scalesmally_contenedor_btnpersonaje_per2 = 0.57;
scalebigx_contenedor_btnpersonaje_per2 = 0.6;
scalebigy_contenedor_btnpersonaje_per2 = 0.6;

//Boton play
x_contenedor_audiobtn_per2 = 135;
y_contenedor_audiobtn_per2 = 252;
scalex_contenedor_audiobtn_per2 = 1.1;
scaley_contenedor_audiobtn_per2 = 1.1;

/////Personaje 3

x_cabeza_per3 = 0; 
y_cabeza_per3 = 0; 

x_ceja_derecha_per3 = 48;
y_ceja_derecha_per3 = 41;

x_ceja_izquierda_per3 = 21;
y_ceja_izquierda_per3 = 40;

x_ojos_per3 = 24;
y_ojos_per3 = 50;

x_boca_per3 = 26;
y_boca_per3 = 69;

x_cabello_per3 = x_boca_per3; 
y_cabello_per3 = 0; 
visible_cabello_per3 = false; 

x_contenedor_rostro_per3 = 91;
y_contenedor_rostro_per3 = 90;

x_logo_uniforme_per3_izq = x_boca_per3;
y_logo_uniforme_per3_izq = 0;
x_logo_uniforme_per3_der = x_boca_per3;
y_logo_uniforme_per3_der = 0;
visible_logo_uniforme_per3 = false;

x_tronco_per3 = 0;
y_tronco_per3 = 122;

//Boton personaje 3
//Rostro
scalex_contenedor_rostro2_per3 = 1;
scaley_contenedor_rostro2_per3 = 1;

x_contenedor_rostro2_per3 = 89;
y_contenedor_rostro2_per3 = 77;

//Boton personaje
if(con_menunumeros_v2){
	x_contenedor_btnpersonaje_per3 = 1085;
	y_contenedor_btnpersonaje_per3 = 388;
} else {
	x_contenedor_btnpersonaje_per3 = 1185;
	y_contenedor_btnpersonaje_per3 = 358;
}

scalesmallx_contenedor_btnpersonaje_per3 = 0.63;
scalesmally_contenedor_btnpersonaje_per3 = 0.63;
scalebigx_contenedor_btnpersonaje_per3 = 0.7;
scalebigy_contenedor_btnpersonaje_per3 = 0.7;

//Boton play
x_contenedor_audiobtn_per3 = 125;
y_contenedor_audiobtn_per3 = 294;
scalex_contenedor_audiobtn_per3 = 1;
scaley_contenedor_audiobtn_per3 = 1;



/////Personaje 4

x_cabeza_per4 = 0; 
y_cabeza_per4 = 0; 

x_ceja_derecha_per4 = 48;
y_ceja_derecha_per4 = 41;

x_ceja_izquierda_per4 = 21;
y_ceja_izquierda_per4 = 40;

x_ojos_per4 = 24;
y_ojos_per4 = 50;

x_boca_per4 = 26;
y_boca_per4 = 69;

x_cabello_per4 = x_boca_per4; 
y_cabello_per4 = 0; 
visible_cabello_per4 = false; 

x_contenedor_rostro_per4 = 91;
y_contenedor_rostro_per4 = 90;

x_logo_uniforme_per4_izq = x_boca_per4;
y_logo_uniforme_per4_izq = 0;
x_logo_uniforme_per4_der = x_boca_per4;
y_logo_uniforme_per4_der = 0;
visible_logo_uniforme_per4 = false;

x_tronco_per4 = 0;
y_tronco_per4 = 122;

//Boton personaje 3
//Rostro
scalex_contenedor_rostro2_per4 = 1;
scaley_contenedor_rostro2_per4 = 1;

x_contenedor_rostro2_per4 = 89;
y_contenedor_rostro2_per4 = 77;

//Boton personaje
if(con_menunumeros_v2){
	x_contenedor_btnpersonaje_per4 = 1085;
	y_contenedor_btnpersonaje_per4 = 388;
} else {
	x_contenedor_btnpersonaje_per4 = 1185;
	y_contenedor_btnpersonaje_per4 = 358;
}

scalesmallx_contenedor_btnpersonaje_per4 = 0.63;
scalesmally_contenedor_btnpersonaje_per4 = 0.63;
scalebigx_contenedor_btnpersonaje_per4 = 0.7;
scalebigy_contenedor_btnpersonaje_per4 = 0.7;

//Boton play
x_contenedor_audiobtn_per4 = 125;
y_contenedor_audiobtn_per4 = 294;
scalex_contenedor_audiobtn_per4 = 1;
scaley_contenedor_audiobtn_per4 = 1;
