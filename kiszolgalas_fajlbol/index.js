const express=require('express');
const cors=require('cors');
const fetch=require('cross-fetch');
const csvtojson=require('csvtojson');

async function run() {
    
const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Adatok letöltése
const pokemonKeres=await fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json");
const pokemonData=await pokemonKeres.json();

const catalogKeres=await fetch('https://datacatalog.tusla.ie/dataset/fb8309fa-e48f-4747-a5b9-58d7120549f5/resource/f3ad45b4-5145-46db-b007-a933ed5386c6/download/no-of-children-active-on-the-cpns-0-to-6-months-2022.csv');
const catalogData=await catalogKeres.text();
const jsonCatalogData=await csvtojson().fromString(catalogData);


app.listen(8000,()=>{console.log('Fut a szerver')});

app.get('/',(req,res)=>{
    res.send("Kiszolgálás fájlból")
});

app.get('/pokemons',(req,res)=>{
    res.status(200).json(pokemonData);
});

app.get('/catalog',(req,res)=>{
    res.status(200).json(jsonCatalogData);
});

app.get('/pokemon/name/:name',(req,res)=>{
    const result=pokemonData.pokemon.filter(x=>x.name.toLowerCase()==req.params.name.toLowerCase());
    if(result.length>0){
        return res.status(200).json(result);
    }
    return res.status(404).json({message:"Nincs ilyen pokemon!"});
});


}

run();