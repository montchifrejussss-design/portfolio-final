function actualiserHeure() {
            let maintenant = new Date();
            let h = maintenant.getHours().toString().padStart(2, '0');
            let m = maintenant.getMinutes().toString().padStart(2, '0');
            let s = maintenant.getSeconds().toString().padStart(2, '0');

            document.getElementById("horloge").value = `${h}:${m}:${s}`;
            
            setTimeout(actualiserHeure, 1000);
        };
        function afficherDate() {
            const aujourdhui = new Date();
            const options = {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"
            };
            const dateFormatee=aujourdhui.toLocaleDateString("fr-FR", options);
            document.getElementById("date-reelle").textContent=dateFormatee;
        }
            setInterval(afficherDate, 1000);
            afficherDate()