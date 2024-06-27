#!/bin/bash
#
# Shellscript list all current specfiles in their respective folders
# Execute script with the specfolder as argument e.g. bash list-specfiles.sh cypress/e2e/product_configuration
# 
# Example output in cypress/e2e/product_configuration/Serviceprodukte/speclist.txt:
#
# cypress/e2e/product_configuration/Serviceprodukte/configure_Serviceprodukt_Aenderungsauftrag_Schnurlaenge.spec.js
# cypress/e2e/product_configuration/Serviceprodukte/configure_Serviceprodukt_Breite_Kuerzen.spec.js
# cypress/e2e/product_configuration/Serviceprodukte/configure_Serviceprodukt_Laengere_Fuehrungsschnuere.spec.js
# cypress/e2e/product_configuration/Serviceprodukte/configure_Serviceprodukt_Schnur_Ersetzen.spec.js

#set -x

counter(){
   for file in "$1"/*
    do
    if [ -d "$file" ]
    then
           
            echo "$file"
            ls -p "$file" | grep -v / | grep js | sed "s|^|"$file"/|" | sort > "$file"/speclist.txt

            counter "$file"
    fi
    done
}

counter "$1"





