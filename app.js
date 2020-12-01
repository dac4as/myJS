// server.js File 
const express = require('express'); //require() è una funzione equivalente all'import di Java o #include di C++ (in js qualsiasi cosa è una funzione) in pratica è una funzione che importa la libreria express (che ho insiallato con l'apposito comando npm)
const app = express(); // costruisco un'ISTANZA del mio server web, chiamato app (in app c'è il riferimento al server web). Queso al fine di istruirlo con le dovute funzioni prima di farlo partire
  
const port = 3000;  // Setting an port for this application 
  
  
//posso scrivere function(req,res){...} OPPURE fare la lambda (req,res)=>{...}

app.get('/', function (req, res){//metodo get: OGNI COLTA che qualcuno apre un SOCKET su questo server e scrive / nel browser, ricevo la richiesta req(utile ai fini di visualizzazione del pacchetto proveniente dal client)
    res.send('HELLO WORLD!!');//res (response) viene riempita di dati essendo la risposta che riceverà l'utente, fanno parte del protocollo HTTP ma expressjs fa il parsing auto
  })//.send invia nell'istanza res (come risposta quindi) l'argomento che viene passato tra parentesi, in questo caso HELLO WORLD

  app.get('/example', (req,res)=>{//logicamente sarà raggiungibile al sito localhost:3000.example, express gestisce comunque ogni tipo di richiesta (parte 3 min 1.30)
    res.send('Hello example');
})

app.get('/matteo', (req,res)=>{//logicamente sarà raggiungibile al sito localhost:3000.example, express gestisce comunque ogni tipo di richiesta 
  res.send('Ciao Matteo');
})




  //dopo aver costruito tutte le promise e callback, il server può avviarsi

//modo alternatico per far partire il server (uguale ma + semplice)
app.listen(port, ()=>{//qui in pratica parte un while(true) simil arduino, è UNA PROMISE (quando riuscirò ad aprire correttamente la connessione, prometto che seguirò la CALLBACK)
    console.log('Il server è partito alla porta '+port+' al sito http://localhost\n(http://localhost:'+port+')')//indice del mio server web--->CALLBACK
})

/*
 //Starting server using listen function 
app.listen(port, function (err) { //qui faccio partire il server (in questo momento parte)
   if(err){ 
       console.log("Error while starting server"); 
   } 
   else{ 
       console.log("Server has been started at "+port);//CALLBACK
   } 
})
*/