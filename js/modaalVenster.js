var modaalObj = (function() {
    var $window = $(window);
    var $modaalVenster = $('<div class="modaal-venster"/>');
    var $vensterInhoud = $('<div class="modaal-inhoud"/>');
    var $vensterSluit = $('span class="sluit-knop"> &#10005;</span>');
    
    $modaalVenster.append($vensterInhoud);
    
    return {
        centreren: function() {
            //odracht wordt aangeroepen
            var links = Math.max($window.width()-$vensterInhoud.width(), 0)/2;
            var omhoog = Math.max($window.height()-$vensterInhoud.height(), 0)/2;
            $vensterInhoud.css({left: links, top: omhoog});
        },
        
        
        openen: function(instellingen) {
            // opdrachten worden gecentreerdt
            $vensterInhoud.append(instellingen.inhoud, $vensterSluit);
            $modaalInhoud.css({width: instellingen.breedte+'px' || 'auto',
                              height: instellingen.hoogte+'px'  || 'auto'})
                .on('click', function(e){
                e.stopPropagation();
            });
            $modaalVenster.appendTo('body')
                .on('click', modaalObj.sluiten);
            modaalObj.centreren();
            $vensterSluit.on('click', modaalObj.sluiten)
            $window.on('resize', modaalObj.centreren);
        },
        sluiten: function() {
            //sluit de opdracht
          $vensterInhoud.empty()
            .off('click', modaalObj.sluiten);
            $modaalVenster.detach();
            $window.off('resize', modaalObj.centreren);
        }
    }
}());