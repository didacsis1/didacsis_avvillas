(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1260,
	height: 630,
	fps: 24,
	color: "#FFFFFF",
	manifest: [{src:"sounds/correct.mp3"},{src:"sounds/incorrect.mp3"},{src:"sounds/star.mp3"},{src:"sounds/boton.mp3"},{src:"sounds/clic.mp3"},{src:"sounds/over.mp3"}]
};



// symbols:



(lib.antebrazo_derecho = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.antebrazo_izquierdo = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.audio_btnclico = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.audio_btnclicof = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.audio_btnoff = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.audio_btnon = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.banner_azul = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.boca0_per1 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.boca0_per2 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.boca0_per3 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.boca0_per4 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.boca1_per1 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.boca1_per2 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.boca1_per3 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.boca1_per4 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.boca2_per1 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.boca2_per2 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.boca2_per3 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.boca2_per4 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.boca3_per1 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.boca3_per2 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.boca3_per3 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.boca3_per4 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.boca4_per1 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.boca4_per2 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.boca4_per3 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.boca4_per4 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.boca5_per1 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.boca5_per2 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.boca5_per3 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.boca5_per4 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.boca6_per1 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.boca6_per2 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.boca6_per3 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.boca6_per4 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.boton = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.boton_personaje_per1 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.boton_personaje_per2 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.boton_personaje_per3 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.boton_personaje_per4 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.brazo_derecho = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.brazo_izquierdo = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.cabello_per1 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.cabello_per2 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.cabello_per3 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.cabello_per4 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.cabeza_per1 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.cabeza_per2 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.cabeza_per3 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.cabeza_per4 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.ceja_derecha_per1 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.ceja_derecha_per2 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.ceja_derecha_per3 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.ceja_derecha_per4 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.ceja_izquierda_per1 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.ceja_izquierda_per2 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.ceja_izquierda_per3 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.ceja_izquierda_per4 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.circulo_desbloqueado = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.circulo_no_seleccionado = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.circulo_novisto = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.circulo_seleccionado = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.circulo_visto = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.division_modulo = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.enlace_globo = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.flecha_0 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.flecha_1 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.flecha_10 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.flecha_11 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.flecha_12 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.flecha_13 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.flecha_14 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.flecha_15 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.flecha_16 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.flecha_2 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.flecha_3 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.flecha_4 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.flecha_5 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.flecha_6 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.flecha_7 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.flecha_8 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.flecha_9 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.flecha_avance = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.flecha_azul = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.flecha_creditos = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.flecha_curso = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.flecha_gris = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.flecha_modulo = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.flecha_retroceso = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.flechas_instruccion = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.fondo_menu_numeros = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.fondo_numeros = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.fondo_p1 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.fondo_personaje = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.i_equis = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.icono_audio = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.indicador_menu_superior = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.logo_camisa = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.logo_camisa_per1 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.logo_camisa_per2 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.logo_camisa_per3 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.logo_camisa_per4 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.mano_d1 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.mano_d2 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.mano_d3 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.mano_d4 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.mano_d5 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.mano_i1 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.mano_i2 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.mano_i3 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.mano_i4 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.mano_i5 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.ojos_abiertos = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.ojos_abiertos_per1 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.ojos_abiertos_per2 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.ojos_abiertos_per3 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.ojos_abiertos_per4 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.ojos_cerrados = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.ojos_cerrados_per1 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.ojos_cerrados_per2 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.ojos_cerrados_per3 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.ojos_cerrados_per4 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.play = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.stop = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.tronco_per1 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.tronco_per2 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.tronco_per3 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.tronco_per4 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.z_contenedor_flechas = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.z_contenedor_flechas1 = function() {
	this.spriteSheet = ss["index_atlas_"]
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.flecha_gif = function(mode,startPosition,loop) {

this.initialize(mode,startPosition,loop,{});


	// Capa 1
	this.instance = new lib.flecha_0();

	this.instance_1 = new lib.flecha_1();

	this.instance_2 = new lib.flecha_2();

	this.instance_3 = new lib.flecha_3();

	this.instance_4 = new lib.flecha_4();

	this.instance_5 = new lib.flecha_5();

	this.instance_6 = new lib.flecha_6();

	this.instance_7 = new lib.flecha_7();

	this.instance_8 = new lib.flecha_8();

	this.instance_9 = new lib.flecha_9();

	this.instance_10 = new lib.flecha_10();

	this.instance_11 = new lib.flecha_11();

	this.instance_12 = new lib.flecha_12();

	this.instance_13 = new lib.flecha_13();

	this.instance_14 = new lib.flecha_14();

	this.instance_15 = new lib.flecha_15();

	this.instance_16 = new lib.flecha_16();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).wait(1));

	

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60,60);


// stage content:
(lib.index = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	
	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(2));

	// JS
	this.instance = new lib.z_contenedor_flechas1();
	this.instance.setTransform(-329.9,1964.55);

	this.instance_1 = new lib.z_contenedor_flechas();
	this.instance_1.setTransform(-329.9,1964.55);

	this.instance_2 = new lib.tronco_per3();
	this.instance_2.setTransform(-329.9,1964.55);

	this.instance_3 = new lib.tronco_per2();
	this.instance_3.setTransform(-329.9,1964.55);

	this.instance_4 = new lib.tronco_per1();
	this.instance_4.setTransform(-329.9,1964.55);

	this.instance_5 = new lib.stop();
	this.instance_5.setTransform(-329.9,1964.55);

	this.instance_6 = new lib.play();
	this.instance_6.setTransform(-329.9,1964.55);

	this.instance_7 = new lib.ojos_cerrados();
	this.instance_7.setTransform(-329.9,1964.55);

	this.instance_8 = new lib.ojos_cerrados_per3();
	this.instance_8.setTransform(-329.9,1964.55);

	this.instance_9 = new lib.ojos_cerrados_per2();
	this.instance_9.setTransform(-329.9,1964.55);

	this.instance_10 = new lib.ojos_cerrados_per1();
	this.instance_10.setTransform(-329.9,1964.55);

	this.instance_11 = new lib.ojos_abiertos();
	this.instance_11.setTransform(-329.9,1964.55);

	this.instance_12 = new lib.ojos_abiertos_per3();
	this.instance_12.setTransform(-329.9,1964.55);

	this.instance_13 = new lib.ojos_abiertos_per2();
	this.instance_13.setTransform(-329.9,1964.55);

	this.instance_14 = new lib.ojos_abiertos_per1();
	this.instance_14.setTransform(-329.9,1964.55);

	this.instance_15 = new lib.mano_i5();
	this.instance_15.setTransform(-329.9,1964.55);

	this.instance_16 = new lib.mano_i4();
	this.instance_16.setTransform(-329.9,1964.55);

	this.instance_17 = new lib.mano_i3();
	this.instance_17.setTransform(-329.9,1964.55);

	this.instance_18 = new lib.mano_i2();
	this.instance_18.setTransform(-329.9,1964.55);

	this.instance_19 = new lib.mano_i1();
	this.instance_19.setTransform(-329.9,1964.55);

	this.instance_20 = new lib.mano_d5();
	this.instance_20.setTransform(-329.9,1964.55);

	this.instance_21 = new lib.mano_d4();
	this.instance_21.setTransform(-329.9,1964.55);

	this.instance_22 = new lib.mano_d3();
	this.instance_22.setTransform(-329.9,1964.55);

	this.instance_23 = new lib.mano_d2();
	this.instance_23.setTransform(-329.9,1964.55);

	this.instance_24 = new lib.mano_d1();
	this.instance_24.setTransform(-329.9,1964.55);

	this.instance_25 = new lib.logo_camisa();
	this.instance_25.setTransform(-329.9,1964.55);

	this.instance_26 = new lib.logo_camisa_per3();
	this.instance_26.setTransform(-329.9,1964.55);

	this.instance_27 = new lib.logo_camisa_per2();
	this.instance_27.setTransform(-329.9,1964.55);

	this.instance_28 = new lib.logo_camisa_per1();
	this.instance_28.setTransform(-329.9,1964.55);

	this.instance_29 = new lib.indicador_menu_superior();
	this.instance_29.setTransform(-329.9,1964.55);

	this.instance_30 = new lib.icono_audio();
	this.instance_30.setTransform(-329.9,1964.55);

	this.instance_31 = new lib.i_equis();
	this.instance_31.setTransform(-329.9,1964.55);

	this.instance_32 = new lib.fondo_personaje();
	this.instance_32.setTransform(-329.9,1964.55);

	this.instance_33 = new lib.fondo_p1();
	this.instance_33.setTransform(-329.9,1964.55);

	this.instance_34 = new lib.fondo_numeros();
	this.instance_34.setTransform(-329.9,1964.55);

	this.instance_35 = new lib.fondo_menu_numeros();
	this.instance_35.setTransform(-329.9,1964.55);

	this.instance_36 = new lib.flechas_instruccion();
	this.instance_36.setTransform(-329.9,1964.55);

	this.instance_37 = new lib.flecha_retroceso();
	this.instance_37.setTransform(-329.9,1964.55);

	this.instance_38 = new lib.flecha_modulo();
	this.instance_38.setTransform(-329.9,1964.55);

	this.instance_39 = new lib.flecha_gris();
	this.instance_39.setTransform(-329.9,1964.55);

	this.instance_40 = new lib.flecha_gif();
	this.instance_40.setTransform(-299.9,1994.55,1,1,0,0,0,30,30);

	this.instance_41 = new lib.flecha_curso();
	this.instance_41.setTransform(-329.9,1964.55);

	this.instance_42 = new lib.flecha_creditos();
	this.instance_42.setTransform(-329.9,1964.55);

	this.instance_43 = new lib.flecha_azul();
	this.instance_43.setTransform(-329.9,1964.55);

	this.instance_44 = new lib.flecha_avance();
	this.instance_44.setTransform(-329.9,1964.55);

	this.instance_45 = new lib.enlace_globo();
	this.instance_45.setTransform(-329.9,1964.55);

	this.instance_46 = new lib.division_modulo();
	this.instance_46.setTransform(-329.9,1964.55);

	this.instance_47 = new lib.circulo_visto();
	this.instance_47.setTransform(-329.9,1964.55);

	this.instance_48 = new lib.circulo_seleccionado();
	this.instance_48.setTransform(-329.9,1964.55);

	this.instance_49 = new lib.circulo_novisto();
	this.instance_49.setTransform(-329.9,1964.55);

	this.instance_50 = new lib.circulo_no_seleccionado();
	this.instance_50.setTransform(-329.9,1964.55);

	this.instance_51 = new lib.circulo_desbloqueado();
	this.instance_51.setTransform(-329.9,1964.55);

	this.instance_52 = new lib.ceja_izquierda_per3();
	this.instance_52.setTransform(-329.9,1964.55);

	this.instance_53 = new lib.ceja_izquierda_per2();
	this.instance_53.setTransform(-329.9,1964.55);

	this.instance_54 = new lib.ceja_izquierda_per1();
	this.instance_54.setTransform(-329.9,1964.55);

	this.instance_55 = new lib.ceja_derecha_per3();
	this.instance_55.setTransform(-329.9,1964.55);

	this.instance_56 = new lib.ceja_derecha_per2();
	this.instance_56.setTransform(-329.9,1964.55);

	this.instance_57 = new lib.ceja_derecha_per1();
	this.instance_57.setTransform(-329.9,1964.55);

	this.instance_58 = new lib.cabeza_per3();
	this.instance_58.setTransform(-329.9,1964.55);

	this.instance_59 = new lib.cabeza_per2();
	this.instance_59.setTransform(-329.9,1964.55);

	this.instance_60 = new lib.cabeza_per1();
	this.instance_60.setTransform(-329.9,1964.55);

	this.instance_61 = new lib.cabello_per3();
	this.instance_61.setTransform(-329.9,1964.55);

	this.instance_62 = new lib.cabello_per2();
	this.instance_62.setTransform(-329.9,1964.55);

	this.instance_63 = new lib.cabello_per1();
	this.instance_63.setTransform(-329.9,1964.55);

	this.instance_64 = new lib.brazo_izquierdo();
	this.instance_64.setTransform(-329.9,1964.55);

	this.instance_65 = new lib.brazo_derecho();
	this.instance_65.setTransform(-329.9,1964.55);

	this.instance_66 = new lib.boton();
	this.instance_66.setTransform(-329.9,1964.55);

	this.instance_67 = new lib.boton_personaje_per3();
	this.instance_67.setTransform(-329.9,1964.55);

	this.instance_68 = new lib.boton_personaje_per2();
	this.instance_68.setTransform(-329.9,1964.55);

	this.instance_69 = new lib.boton_personaje_per1();
	this.instance_69.setTransform(-329.9,1964.55);

	this.instance_70 = new lib.boca6_per3();
	this.instance_70.setTransform(-329.9,1964.55);

	this.instance_71 = new lib.boca6_per2();
	this.instance_71.setTransform(-329.9,1964.55);

	this.instance_72 = new lib.boca6_per1();
	this.instance_72.setTransform(-329.9,1964.55);

	this.instance_73 = new lib.boca5_per3();
	this.instance_73.setTransform(-329.9,1964.55);

	this.instance_74 = new lib.boca5_per2();
	this.instance_74.setTransform(-329.9,1964.55);

	this.instance_75 = new lib.boca5_per1();
	this.instance_75.setTransform(-329.9,1964.55);

	this.instance_76 = new lib.boca4_per3();
	this.instance_76.setTransform(-329.9,1964.55);

	this.instance_77 = new lib.boca4_per2();
	this.instance_77.setTransform(-329.9,1964.55);

	this.instance_78 = new lib.boca4_per1();
	this.instance_78.setTransform(-329.9,1964.55);

	this.instance_79 = new lib.boca3_per3();
	this.instance_79.setTransform(-329.9,1964.55);

	this.instance_80 = new lib.boca3_per2();
	this.instance_80.setTransform(-329.9,1964.55);

	this.instance_81 = new lib.boca3_per1();
	this.instance_81.setTransform(-329.9,1964.55);

	this.instance_82 = new lib.boca2_per3();
	this.instance_82.setTransform(-329.9,1964.55);

	this.instance_83 = new lib.boca2_per2();
	this.instance_83.setTransform(-329.9,1964.55);

	this.instance_84 = new lib.boca2_per1();
	this.instance_84.setTransform(-329.9,1964.55);

	this.instance_85 = new lib.boca1_per3();
	this.instance_85.setTransform(-329.9,1964.55);

	this.instance_86 = new lib.boca1_per2();
	this.instance_86.setTransform(-329.9,1964.55);

	this.instance_87 = new lib.boca1_per1();
	this.instance_87.setTransform(-329.9,1964.55);

	this.instance_88 = new lib.boca0_per3();
	this.instance_88.setTransform(-329.9,1964.55);

	this.instance_89 = new lib.boca0_per2();
	this.instance_89.setTransform(-329.9,1964.55);

	this.instance_90 = new lib.boca0_per1();
	this.instance_90.setTransform(-329.9,1964.55);

	this.instance_91 = new lib.banner_azul();
	this.instance_91.setTransform(-329.9,1964.55);

	this.instance_92 = new lib.audio_btnon();
	this.instance_92.setTransform(-329.9,1964.55);

	this.instance_93 = new lib.audio_btnoff();
	this.instance_93.setTransform(-329.9,1964.55);

	this.instance_94 = new lib.audio_btnclicof();
	this.instance_94.setTransform(-329.9,1964.55);

	this.instance_95 = new lib.audio_btnclico();
	this.instance_95.setTransform(-329.9,1964.55);

	this.instance_96 = new lib.antebrazo_izquierdo();
	this.instance_96.setTransform(-329.9,1964.55);

	this.instance_97 = new lib.antebrazo_derecho();
	this.instance_97.setTransform(-329.9,1964.55);

	this.instance_98 = new lib.z_contenedor_flechas1();
	this.instance_98.setTransform(-8623.6,867.1);

	this.instance_99 = new lib.z_contenedor_flechas();
	this.instance_99.setTransform(-8623.6,867.1);

	this.instance_100 = new lib.mano_d5();
	this.instance_100.setTransform(-8623.6,867.1);

	this.instance_101 = new lib.fondo_numeros();
	this.instance_101.setTransform(-8623.6,867.1);

	this.instance_102 = new lib.fondo_menu_numeros();
	this.instance_102.setTransform(-8623.6,867.1);

	this.instance_103 = new lib.flecha_gris();
	this.instance_103.setTransform(-8623.6,867.1);

	this.instance_104 = new lib.flecha_azul();
	this.instance_104.setTransform(-8623.6,867.1);

	this.instance_105 = new lib.division_modulo();
	this.instance_105.setTransform(-8623.6,867.1);

	this.instance_106 = new lib.circulo_visto();
	this.instance_106.setTransform(-8623.6,867.1);

	this.instance_107 = new lib.circulo_novisto();
	this.instance_107.setTransform(-8623.6,867.1);

	this.instance_108 = new lib.circulo_desbloqueado();
	this.instance_108.setTransform(-8623.6,867.1);

	this.instance_109 = new lib.banner_azul();
	this.instance_109.setTransform(-8623.6,867.1);

	this.instance_110 = new lib.tronco_per4();
	this.instance_110.setTransform(2,1448);

	this.instance_111 = new lib.ojos_cerrados_per4();
	this.instance_111.setTransform(2,1448);

	this.instance_112 = new lib.ojos_abiertos_per4();
	this.instance_112.setTransform(2,1448);

	this.instance_113 = new lib.logo_camisa_per4();
	this.instance_113.setTransform(2,1448);

	this.instance_114 = new lib.ceja_izquierda_per4();
	this.instance_114.setTransform(2,1448);

	this.instance_115 = new lib.ceja_derecha_per4();
	this.instance_115.setTransform(2,1448);

	this.instance_116 = new lib.cabeza_per4();
	this.instance_116.setTransform(2,1448);

	this.instance_117 = new lib.cabello_per4();
	this.instance_117.setTransform(2,1448);

	this.instance_118 = new lib.boton_personaje_per4();
	this.instance_118.setTransform(2,1448);

	this.instance_119 = new lib.boca6_per4();
	this.instance_119.setTransform(2,1448);

	this.instance_120 = new lib.boca5_per4();
	this.instance_120.setTransform(2,1448);

	this.instance_121 = new lib.boca4_per4();
	this.instance_121.setTransform(2,1448);

	this.instance_122 = new lib.boca3_per4();
	this.instance_122.setTransform(2,1448);

	this.instance_123 = new lib.boca2_per4();
	this.instance_123.setTransform(2,1448);

	this.instance_124 = new lib.boca1_per4();
	this.instance_124.setTransform(2,1448);

	this.instance_125 = new lib.boca0_per4();
	this.instance_125.setTransform(2,1448);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97,p:{x:-329.9,y:1964.55}},{t:this.instance_96,p:{x:-329.9,y:1964.55}},{t:this.instance_95,p:{x:-329.9,y:1964.55}},{t:this.instance_94,p:{x:-329.9,y:1964.55}},{t:this.instance_93,p:{x:-329.9,y:1964.55}},{t:this.instance_92,p:{x:-329.9,y:1964.55}},{t:this.instance_91,p:{x:-329.9,y:1964.55}},{t:this.instance_90,p:{x:-329.9,y:1964.55}},{t:this.instance_89,p:{x:-329.9,y:1964.55}},{t:this.instance_88,p:{x:-329.9,y:1964.55}},{t:this.instance_87,p:{x:-329.9,y:1964.55}},{t:this.instance_86,p:{x:-329.9,y:1964.55}},{t:this.instance_85,p:{x:-329.9,y:1964.55}},{t:this.instance_84,p:{x:-329.9,y:1964.55}},{t:this.instance_83,p:{x:-329.9,y:1964.55}},{t:this.instance_82,p:{x:-329.9,y:1964.55}},{t:this.instance_81,p:{x:-329.9,y:1964.55}},{t:this.instance_80,p:{x:-329.9,y:1964.55}},{t:this.instance_79,p:{x:-329.9,y:1964.55}},{t:this.instance_78,p:{x:-329.9,y:1964.55}},{t:this.instance_77,p:{x:-329.9,y:1964.55}},{t:this.instance_76,p:{x:-329.9,y:1964.55}},{t:this.instance_75,p:{x:-329.9,y:1964.55}},{t:this.instance_74,p:{x:-329.9,y:1964.55}},{t:this.instance_73,p:{x:-329.9,y:1964.55}},{t:this.instance_72,p:{x:-329.9,y:1964.55}},{t:this.instance_71,p:{x:-329.9,y:1964.55}},{t:this.instance_70,p:{x:-329.9,y:1964.55}},{t:this.instance_69,p:{x:-329.9,y:1964.55}},{t:this.instance_68,p:{x:-329.9,y:1964.55}},{t:this.instance_67,p:{x:-329.9,y:1964.55}},{t:this.instance_66,p:{x:-329.9,y:1964.55}},{t:this.instance_65,p:{x:-329.9,y:1964.55}},{t:this.instance_64,p:{x:-329.9,y:1964.55}},{t:this.instance_63,p:{x:-329.9,y:1964.55}},{t:this.instance_62,p:{x:-329.9,y:1964.55}},{t:this.instance_61,p:{x:-329.9,y:1964.55}},{t:this.instance_60,p:{x:-329.9,y:1964.55}},{t:this.instance_59,p:{x:-329.9,y:1964.55}},{t:this.instance_58,p:{x:-329.9,y:1964.55}},{t:this.instance_57,p:{x:-329.9,y:1964.55}},{t:this.instance_56,p:{x:-329.9,y:1964.55}},{t:this.instance_55,p:{x:-329.9,y:1964.55}},{t:this.instance_54,p:{x:-329.9,y:1964.55}},{t:this.instance_53,p:{x:-329.9,y:1964.55}},{t:this.instance_52,p:{x:-329.9,y:1964.55}},{t:this.instance_51,p:{x:-329.9,y:1964.55}},{t:this.instance_50,p:{x:-329.9,y:1964.55}},{t:this.instance_49,p:{x:-329.9,y:1964.55}},{t:this.instance_48,p:{x:-329.9,y:1964.55}},{t:this.instance_47,p:{x:-329.9,y:1964.55}},{t:this.instance_46,p:{x:-329.9,y:1964.55}},{t:this.instance_45,p:{x:-329.9,y:1964.55}},{t:this.instance_44,p:{x:-329.9,y:1964.55}},{t:this.instance_43,p:{x:-329.9,y:1964.55}},{t:this.instance_42,p:{x:-329.9,y:1964.55}},{t:this.instance_41,p:{x:-329.9,y:1964.55}},{t:this.instance_40,p:{x:-299.9,y:1994.55}},{t:this.instance_39,p:{x:-329.9,y:1964.55}},{t:this.instance_38,p:{x:-329.9,y:1964.55}},{t:this.instance_37,p:{x:-329.9,y:1964.55}},{t:this.instance_36,p:{x:-329.9,y:1964.55}},{t:this.instance_35,p:{x:-329.9,y:1964.55}},{t:this.instance_34,p:{x:-329.9,y:1964.55}},{t:this.instance_33,p:{x:-329.9,y:1964.55}},{t:this.instance_32,p:{x:-329.9,y:1964.55}},{t:this.instance_31,p:{x:-329.9,y:1964.55}},{t:this.instance_30,p:{x:-329.9,y:1964.55}},{t:this.instance_29,p:{x:-329.9,y:1964.55}},{t:this.instance_28,p:{x:-329.9,y:1964.55}},{t:this.instance_27,p:{x:-329.9,y:1964.55}},{t:this.instance_26,p:{x:-329.9,y:1964.55}},{t:this.instance_25,p:{x:-329.9,y:1964.55}},{t:this.instance_24,p:{x:-329.9,y:1964.55}},{t:this.instance_23,p:{x:-329.9,y:1964.55}},{t:this.instance_22,p:{x:-329.9,y:1964.55}},{t:this.instance_21,p:{x:-329.9,y:1964.55}},{t:this.instance_20,p:{x:-329.9,y:1964.55}},{t:this.instance_19,p:{x:-329.9,y:1964.55}},{t:this.instance_18,p:{x:-329.9,y:1964.55}},{t:this.instance_17,p:{x:-329.9,y:1964.55}},{t:this.instance_16,p:{x:-329.9,y:1964.55}},{t:this.instance_15,p:{x:-329.9,y:1964.55}},{t:this.instance_14,p:{x:-329.9,y:1964.55}},{t:this.instance_13,p:{x:-329.9,y:1964.55}},{t:this.instance_12,p:{x:-329.9,y:1964.55}},{t:this.instance_11,p:{x:-329.9,y:1964.55}},{t:this.instance_10,p:{x:-329.9,y:1964.55}},{t:this.instance_9,p:{x:-329.9,y:1964.55}},{t:this.instance_8,p:{x:-329.9,y:1964.55}},{t:this.instance_7,p:{x:-329.9,y:1964.55}},{t:this.instance_6,p:{x:-329.9,y:1964.55}},{t:this.instance_5,p:{x:-329.9,y:1964.55}},{t:this.instance_4,p:{x:-329.9,y:1964.55}},{t:this.instance_3,p:{x:-329.9,y:1964.55}},{t:this.instance_2,p:{x:-329.9,y:1964.55}},{t:this.instance_1,p:{x:-329.9,y:1964.55}},{t:this.instance,p:{x:-329.9,y:1964.55}}]},1).to({state:[{t:this.instance_109},{t:this.instance_108},{t:this.instance_107},{t:this.instance_106},{t:this.instance_105},{t:this.instance_104},{t:this.instance_103},{t:this.instance_102},{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97,p:{x:2,y:1448}},{t:this.instance_96,p:{x:2,y:1448}},{t:this.instance_95,p:{x:2,y:1448}},{t:this.instance_94,p:{x:2,y:1448}},{t:this.instance_93,p:{x:2,y:1448}},{t:this.instance_92,p:{x:2,y:1448}},{t:this.instance_91,p:{x:2,y:1448}},{t:this.instance_90,p:{x:2,y:1448}},{t:this.instance_89,p:{x:2,y:1448}},{t:this.instance_88,p:{x:2,y:1448}},{t:this.instance_125},{t:this.instance_87,p:{x:2,y:1448}},{t:this.instance_86,p:{x:2,y:1448}},{t:this.instance_85,p:{x:2,y:1448}},{t:this.instance_124},{t:this.instance_84,p:{x:2,y:1448}},{t:this.instance_83,p:{x:2,y:1448}},{t:this.instance_82,p:{x:2,y:1448}},{t:this.instance_123},{t:this.instance_81,p:{x:2,y:1448}},{t:this.instance_80,p:{x:2,y:1448}},{t:this.instance_79,p:{x:2,y:1448}},{t:this.instance_122},{t:this.instance_78,p:{x:2,y:1448}},{t:this.instance_77,p:{x:2,y:1448}},{t:this.instance_76,p:{x:2,y:1448}},{t:this.instance_121},{t:this.instance_75,p:{x:2,y:1448}},{t:this.instance_74,p:{x:2,y:1448}},{t:this.instance_73,p:{x:2,y:1448}},{t:this.instance_120},{t:this.instance_72,p:{x:2,y:1448}},{t:this.instance_71,p:{x:2,y:1448}},{t:this.instance_70,p:{x:2,y:1448}},{t:this.instance_119},{t:this.instance_69,p:{x:2,y:1448}},{t:this.instance_68,p:{x:2,y:1448}},{t:this.instance_67,p:{x:2,y:1448}},{t:this.instance_118},{t:this.instance_66,p:{x:2,y:1448}},{t:this.instance_65,p:{x:2,y:1448}},{t:this.instance_64,p:{x:2,y:1448}},{t:this.instance_63,p:{x:2,y:1448}},{t:this.instance_62,p:{x:2,y:1448}},{t:this.instance_61,p:{x:2,y:1448}},{t:this.instance_117},{t:this.instance_60,p:{x:2,y:1448}},{t:this.instance_59,p:{x:2,y:1448}},{t:this.instance_58,p:{x:2,y:1448}},{t:this.instance_116},{t:this.instance_57,p:{x:2,y:1448}},{t:this.instance_56,p:{x:2,y:1448}},{t:this.instance_55,p:{x:2,y:1448}},{t:this.instance_115},{t:this.instance_54,p:{x:2,y:1448}},{t:this.instance_53,p:{x:2,y:1448}},{t:this.instance_52,p:{x:2,y:1448}},{t:this.instance_114},{t:this.instance_51,p:{x:2,y:1448}},{t:this.instance_50,p:{x:2,y:1448}},{t:this.instance_49,p:{x:2,y:1448}},{t:this.instance_48,p:{x:2,y:1448}},{t:this.instance_47,p:{x:2,y:1448}},{t:this.instance_46,p:{x:2,y:1448}},{t:this.instance_45,p:{x:2,y:1448}},{t:this.instance_44,p:{x:2,y:1448}},{t:this.instance_43,p:{x:2,y:1448}},{t:this.instance_42,p:{x:2,y:1448}},{t:this.instance_41,p:{x:2,y:1448}},{t:this.instance_40,p:{x:32.15,y:1478.45}},{t:this.instance_39,p:{x:2,y:1448}},{t:this.instance_38,p:{x:2,y:1448}},{t:this.instance_37,p:{x:2,y:1448}},{t:this.instance_36,p:{x:2,y:1448}},{t:this.instance_35,p:{x:2,y:1448}},{t:this.instance_34,p:{x:2,y:1448}},{t:this.instance_33,p:{x:2,y:1448}},{t:this.instance_32,p:{x:2,y:1448}},{t:this.instance_31,p:{x:2,y:1448}},{t:this.instance_30,p:{x:2,y:1448}},{t:this.instance_29,p:{x:2,y:1448}},{t:this.instance_28,p:{x:2,y:1448}},{t:this.instance_27,p:{x:2,y:1448}},{t:this.instance_26,p:{x:2,y:1448}},{t:this.instance_113},{t:this.instance_25,p:{x:2,y:1448}},{t:this.instance_24,p:{x:2,y:1448}},{t:this.instance_23,p:{x:2,y:1448}},{t:this.instance_22,p:{x:2,y:1448}},{t:this.instance_21,p:{x:2,y:1448}},{t:this.instance_20,p:{x:2,y:1448}},{t:this.instance_19,p:{x:2,y:1448}},{t:this.instance_18,p:{x:2,y:1448}},{t:this.instance_17,p:{x:2,y:1448}},{t:this.instance_16,p:{x:2,y:1448}},{t:this.instance_15,p:{x:2,y:1448}},{t:this.instance_14,p:{x:2,y:1448}},{t:this.instance_13,p:{x:2,y:1448}},{t:this.instance_12,p:{x:2,y:1448}},{t:this.instance_112},{t:this.instance_11,p:{x:2,y:1448}},{t:this.instance_10,p:{x:2,y:1448}},{t:this.instance_9,p:{x:2,y:1448}},{t:this.instance_8,p:{x:2,y:1448}},{t:this.instance_111},{t:this.instance_7,p:{x:2,y:1448}},{t:this.instance_6,p:{x:2,y:1448}},{t:this.instance_5,p:{x:2,y:1448}},{t:this.instance_4,p:{x:2,y:1448}},{t:this.instance_3,p:{x:2,y:1448}},{t:this.instance_2,p:{x:2,y:1448}},{t:this.instance_110},{t:this.instance_1,p:{x:2,y:1448}},{t:this.instance,p:{x:2,y:1448}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;