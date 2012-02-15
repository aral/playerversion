/******************************************
      Browser sniffer script - EVIL!!
  Written by Mark Wilton-Jones, 30/8/2002
         v1.8.1 updated 15/01/2008
*******************************************

Please see http://www.howtocreate.co.uk/jslibs/ for details and a demo of this script
Please see http://www.howtocreate.co.uk/jslibs/termsOfUse.html for terms of use

Before you use this, I want you to read this. It is important.

You should NEVER use this method to determine browser support.
You should ALWAYS check if the browser supports what you are
trying to do. It is arrogant to assume that you know exactly
how all browsers behave. This technique should only be used if
you know that a specific browser has a specific bug that you
need to avoid. Then and ONLY then should you detect that browser
and write a browser specific script for it.

This script can be used to detect all 4th+ generation browsers
that I know of, even if they attempt to masq their identity
(unlike most 'browser sniffer' scripts). This algorithm will
fail if a browser that I do not know about is being used. That
is highly possible. I'm sure that there are others that I do
not know about. I am sure that there are some that this script
can detect that YOU did not know about. This script will also
fail if future versions of these browsers are released that
behave differently to their ancestors. Every type of 'browser
sniffer' will fail if that happens. That means that every time
a new browser is released, you will have to rewrite every
browser sniffer you use and update it for the new browser.

To save yourself the waste of time, and to save your viewers
the frustration of having to contend with such a bad programming
style, ALWAYS detect a browser's capabilities, not its make or
version number.

if( window.focus ) { window.focus(); }

if( document.all ) { myElement = document.all['myElementID']; }

if( window.screen ) { myHeight = window.screen.height; }
_____________________________________________________________________________________________________

I DO NOT authorise this script's use for determining script support.
It is only to be used according to the guidelines given above.
_____________________________________________________________________________________________________

To use, simply put the line:
<script type="text/javascript" src="PATH TO SCRIPT/sniffer.js"></script>
inbetween the <head> tags of your document, before ANY OTHER scripts.

Four variables will be created:
yourBro[0] = browser code, yourBro[1] = browser name, yourBro[2] = operating system code, yourBro[3] = operating system name

Possible results:

Browser code | Browser name
-------------|----------------------------
    ice      | ICEbrowser
    op7      | Opera 7+
    opr      | Opera 6-
    ipn      | iPanel MicroBrowser
    ic3      | iCab 3+
    icb      | iCab 2-
    hjv      | HotJava
    kde      | Konqueror / Safari
    wtv      | WebTV
    nbx      | Netgem NetBox
    otv      | OpenTV
    omn      | Omniweb
    es5      | Escape 5
    esc      | Escape 4
    ns4      | Netscape 4
    gek      | Gecko engine (Mozilla, Netscape 6+ etc.)
    clu      | Clue browser
    nf3      | NetFront 3+
    hv3      | Tkhtml Hv3+
    ie4      | Internet Explorer 4
    ie5      | Internet Explorer 5+
    pie      | Pocket Internet Explorer
    oth      | an unknown browser

Operating system code | Operating system name
----------------------|----------------------------
         lin          | Linux
         unx          | Unix
         mac          | MacOS
         win          | Windows
         wtv          | WebTV Platform
         ngm          | Netgem
         otv          | OpenTV Platform
         wce          | Windows CE
         plm          | Palm OS
         sym          | Symbian
         wii          | Wii
         psp          | PlayStation Portable
         psx          | PlayStation
         oth          | an unknown operating system
___________________________________________________________________________________________________*/

var yourBro = []; yourBro.ualc = navigator.userAgent.toLowerCase();

//checks for different browsers
if( document.all && document.getElementById && navigator.savePreferences && ( yourBro.ualc.indexOf( 'netfront' ) < 0 ) && navigator.appName != 'Blazer' ) { yourBro[0] = 'es5'; yourBro[1] = 'Escape 5'; }
else if( navigator.vendor == 'KDE' || ( document.childNodes && ( !document.all || navigator.accentColorName ) && !navigator.taintEnabled ) ) { yourBro[0] = 'kde'; yourBro[1] = 'Konqueror / Safari / OmniWeb 4.5+'; }
else if( navigator.__ice_version ) { yourBro[0] = 'ice'; yourBro[1] = 'ICEbrowser'; }
else if( window.ScriptEngine && ScriptEngine().indexOf( 'InScript' ) + 1 ) { if( document.createElement ) { yourBro[0] = 'ic3'; yourBro[1] = 'iCab 3+'; } else { yourBro[0] = 'icb'; yourBro[1] = 'iCab 2-'; } }
else if( yourBro.ualc.indexOf( 'hotjava' ) + 1 && typeof( navigator.accentColorName ) == 'undefined' ) { yourBro[0] = 'hjv'; yourBro[1] = 'HotJava'; }
else if( document.layers && !document.classes ) { yourBro[0] = 'omn'; yourBro[1] = 'Omniweb 4.2-'; }
else if( document.layers && !navigator.mimeTypes['*'] ) { yourBro[0] = 'esc'; yourBro[1] = 'Escape 4'; }
else if( document.layers ) { yourBro[0] = 'ns4'; yourBro[1] = 'Netscape 4'; }
else if( window.opera && document.childNodes ) { yourBro[0] = 'op7'; yourBro[1] = 'Opera 7+'; }
else if( yourBro.ualc.indexOf( 'opera' ) + 1 ) { yourBro[0] = 'opr'; yourBro[1] = 'Opera 6-'; }
else if( navigator.appName.indexOf( 'WebTV' ) + 1 ) { yourBro[0] = 'wtv'; yourBro[1] = 'WebTV'; }
else if( yourBro.ualc.indexOf( 'netgem' ) + 1 ) { yourBro[0] = 'nbx'; yourBro[1] = 'Netgem NetBox'; }
else if( yourBro.ualc.indexOf( 'opentv' ) + 1 ) { yourBro[0] = 'otv'; yourBro[1] = 'OpenTV'; }
else if( yourBro.ualc.indexOf( 'ipanel' ) + 1 ) { yourBro[0] = 'ipn'; yourBro[1] = 'iPanel MicroBrowser'; }
else if( document.getElementById && !document.childNodes ) { yourBro[0] = 'clu'; yourBro[1] = 'Clue browser'; }
else if( navigator.product == 'Gecko' && !navigator.savePreferences ) { yourBro[0] = 'gek'; yourBro[1] = 'Gecko engine (Mozilla, Netscape 6+ etc.)'; }
else if( navigator.product && navigator.product.indexOf('Hv') == 0 ) { yourBro[0] = 'hv3'; yourBro[1] = 'Tkhtml Hv3+'; }
else if( document.getElementById && ( ( yourBro.ualc.indexOf( 'netfront' ) + 1 ) || navigator.appName == 'Blazer' || navigator.product == 'Gecko' || ( navigator.appName.indexOf('PSP') + 1 ) || ( navigator.appName.indexOf('PLAYSTATION 3') + 1 ) ) ) { yourBro[0] = 'nf3'; yourBro[1] = 'NetFront 3+'; }
else if( document.getElementById ) { yourBro[0] = 'ie5'; yourBro[1] = 'Internet Explorer 5+'; }
else if( document.all && navigator.appName != 'Microsoft Pocket Internet Explorer' ) { yourBro[0] = 'ie4'; yourBro[1] = 'Internet Explorer 4'; }
else if( ( yourBro.ualc.indexOf( 'msie' ) + 1 ) && window.ActiveXObject ) { yourBro[0] = 'pie'; yourBro[1] = 'Pocket Internet Explorer'; }
else { yourBro[0] = 'oth'; yourBro[1] = 'an unknown browser'; }

//perform checks for different operating systems
if( yourBro.ualc.indexOf( 'linux' ) + 1 ) { yourBro[2] = 'lin'; yourBro[3] = 'Linux'; }
else if( yourBro.ualc.indexOf( 'x11' ) + 1 || yourBro.ualc.indexOf( 'bsd' ) + 1 || yourBro.ualc.indexOf( 'solaris' ) + 1 || yourBro.ualc.indexOf( 'unix' ) + 1 || ( navigator.platform && navigator.platform.indexOf('X11') + 1 ) ) { yourBro[2] = 'unx'; yourBro[3] = 'Unix'; }
else if( yourBro.ualc.indexOf( 'mac' ) + 1 ) { yourBro[2] = 'mac'; yourBro[3] = 'MacOS'; }
else if( navigator.platform == 'PalmOS' ) { yourBro[2] = 'plm'; yourBro[3] = 'Palm OS'; }
else if( ( navigator.platform == 'WinCE' ) || ( navigator.platform == 'Windows CE' ) || ( navigator.platform == 'Pocket PC' ) || ( navigator.platform == 'Windows Mobile' ) ) { yourBro[2] = 'wce'; yourBro[3] = 'Windows CE'; }
else if( yourBro.ualc.indexOf( 'win' ) + 1 ) { yourBro[2] = 'win'; yourBro[3] = 'Windows'; }
else if( yourBro.ualc.indexOf( 'webtv' ) + 1 ) { yourBro[2] = 'wtv'; yourBro[3] = 'WebTV Platform'; }
else if( yourBro.ualc.indexOf( 'netgem' ) + 1 ) { yourBro[2] = 'ngm'; yourBro[3] = 'Netgem'; }
else if( yourBro.ualc.indexOf( 'opentv' ) + 1 ) { yourBro[2] = 'otv'; yourBro[3] = 'OpenTV Platform'; }
else if( yourBro.ualc.indexOf( 'symbian' ) + 1 ) { yourBro[2] = 'sym'; yourBro[3] = 'Symbian'; }
else if( navigator.platform == 'Nintendo Wii' ) { yourBro[2] = 'wii'; yourBro[3] = 'Wii'; }
else if( yourBro.ualc.indexOf( 'psp' ) + 1 ) { yourBro[2] = 'psp'; yourBro[3] = 'PlayStation Portable'; }
else if( yourBro.ualc.indexOf( 'playstation' ) + 1 ) { yourBro[2] = 'psx'; yourBro[3] = 'PlayStation'; }
else { yourBro[2] = 'oth'; yourBro[3] = 'an unknown operating system'; }

