//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=30; timeIni=30; timeBon=5;
var successes=0; successesMax=10; attempts=0; attemptsMax=5;
var score=0; scoreMax=10; scoreInc=1; scoreDec=1
var typeGame=0;
var tiTime=false;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Inizia";
var tiSuccesses=true;
var tiAttempts=false;
var tiScore=true;
var startTime;
var colorBack="#FFFDFD"; colorButton="#91962F"; colorText="#000000"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";var messageNext="Bene, adesso la prossima...";
var timeOnMessage=2; messageOk="Ottimo lavoro!!"; messageTime="Peccato, il tempo a disposizione è scaduto."; messageError="Purtroppo la risposta non è corretta."; messageErrorG="Purtroppo la risposta non è corretta."; messageAttempts="Hai esaurito i tentativi disponibili."; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var tiAudio=false;var wordsGame="T3JhMg=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var d=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];var indexE=0;var rad=450;var c=[0,0,0,0,0,0,0,0,0,0];var a=["E' l'una","Sono le due","Sono le tre","Sono le quattro","Sono le cinque","Sono le sei","Sono le sette","Sono le otto","Sono le nove","Sono le dieci"];var b=[1,2,3,4,5,6,7,8,9,10];
var canvasRB; var canvasR; var contextRB; var contextR;var canvasDB; var canvasD; var contextDB; var contextD;
var posM=0;var posH=0;var posMD=0;var posHD=0;
var colorM="#008000";var colorH="#FF0000";var rad=450;
var mp3S=["","","","","","","","","",""];var ogg3S=["","","","","","","","","",""];
