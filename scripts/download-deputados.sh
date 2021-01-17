mkdir -p data
cd data

curl "https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome" -H  "accept: application/json" -o dep.json
jq '.dados[] | [.nome, .siglaPartido, .siglaUf, "", .email] | @tsv' -r dep.json > dep.tsv

jq '.dados[] | .uriPartido' -r dep.json | sort | uniq > uri-partidos.txt


mkdir -p partidos
cd partidos
while IFS= read -r line
do
   curl "$line" -O
done < ../uri-partidos.txt
cd ..

jq '.dados | [.sigla, .nome] | @tsv' -r partidos/* > partidos.tsv

cd ../..
