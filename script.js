{\rtf1\ansi\ansicpg1252\cocoartf2636
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script><script src="https://gatchealth.com/reg-a-offering/revolution/js/jquery.themepunch.tools.min.js"></script><script src="https://gatchealth.com/reg-a-offering/revolution/js/jquery.themepunch.revolution.min.js"></script><script src="https://gatchealth.com/reg-a-offering/revolution/js/slider.js"></script><script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script><script type="text/javascript" src="https://manhattanstreetcapital.com/sites/default/files/files/gatc/js/jquery.prettyPhoto.js"></script><script>\
jQuery(document).ready(function()\{\
\
jQuery('a.ttm_prettyphoto').prettyPhoto();\
jQuery(".accordion").each(function()\{\
\
    var allPanels = jQuery('.toggle').children(".toggle-content").hide();\
    //jQuery('.toggle').children(".toggle-content").eq(2).slideDown("easeOutExpo");\
    //jQuery('.toggle').children(".toggle-title").children("a").eq(2).addClass("active");\
\
    jQuery('.toggle').children(".toggle-title").children("a").click(function()\{        \
        var current = jQuery(this).parent().next(".toggle-content");\
        jQuery(".toggle-title > a").removeClass("active");\
        jQuery(this).addClass("active");\
        allPanels.not(current).slideUp("easeInExpo");\
        jQuery(this).parent().next().slideDown("easeOutExpo");                \
        return false;                \
    \});\
\
\});\
\});\
</script>}