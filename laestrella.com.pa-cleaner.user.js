// ==UserScript==
// @name        LaEstrella.com.pa Solo Noticias
// @version     0.1
// @author      swordf1zh
// @namespace   swordf1zh
// @description Script para poder leer cómodamente las noticias en el periódico de Panamá laestrella.com.pa sin anuncios, comentarios, ni el nuevo e incómodo video anuncio que ponene ahora en medio de las noticias.
// @include     *laestrella.com.pa/*
// @exclude     *laestrella.com.pa/
// @require     http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require			http://openuserjs.org/src/libs/swordf1zh/laestrella.com.pa-cleaner.user.js
// @license	    MIT License; http://www.opensource.org/licenses/mit-license.php
// @copyright   2014, Ricardo Tribaldos (http://ricardo.tribaldos.org/)
// @grant       none
// ==/UserScript==

$('.ebz_native').remove();
var title = $('.heading-level-1');
var author = $('.author');
var body = $('.post-body-content');
var styles = {
        margin: '0 auto',
        width: '50%'
    };

$('body').remove();

$('<body>').appendTo('html');
$('<div>').appendTo('body');
$('body>div').addClass('prity');

$('.prity').css( styles );
$('div').append( title ).append( author ).append( body );