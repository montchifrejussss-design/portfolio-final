function calculerMensualite() {
            let P = parseFloat(document.getElementById("montant").value);
            let tauxAnnuel = parseFloat(document.getElementById("taux").value);
            let annees = parseInt(document.getElementById("duree").value);

            // Validation
            if (isNaN(P) || P <= 0 || isNaN(tauxAnnuel) || tauxAnnuel < 0 || isNaN(annees) || annees <= 0) {
                alert("Veuillez saisir des valeurs positives valides.");
                return;
            }

            let r = (tauxAnnuel / 100) / 12; // Taux mensuel décimal
            let n = annees * 12; // Nombre de mois

            // Formule
            let numerateur = r * Math.pow(1 + r, n);
            let denominateur = Math.pow(1 + r, n) - 1;
            let M = P * (numerateur / denominateur);

            document.getElementById("resultat").innerText = 
                "Paiement mensuel : " + M.toFixed(2) + " €";
        }