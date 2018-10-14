$(function(){
    $('#name').keyup(function(){
        //$('#greet').text('Hello ' + $('#name').val())
    })

    $("#HPoo").click(function(){

      const Http = new XMLHttpRequest();
      const url='https://insa-rennes.fr';

      Http.open("GET", url);
      Http.send();
      Http.onreadystatechange=(e)=>{
        console.log(Http.responseText)
        $('#HPooo').text('HP OO : ' +  Http.status)
        document.getElementById("HPooo").style.color = "#AA0000";
        if(Http.status!=404 && Http.status!=401){
          document.getElementById("HPooo").style.color = "#00BB00";
          $('#HPooo').text('INSA Rennes : OK ' +  Http.status)
        }
      }
      const Http2 = new XMLHttpRequest();
      const url2='http://www.groupe-insa.fr/';
      Http2.open("GET", url2);
      Http2.send();
      Http2.onreadystatechange=(e)=>{
        document.getElementById("portal").style.color = "#AA0000";
        $('#portal').text('Portail : ' +  Http2.status)
        if(Http2.status!=404 && Http2.status!=401){
          document.getElementById("portal").style.color = "#00BB00";
          $('#portal').text('Groupe INSA : OK ' +  Http2.status)
        }
      }
      const Http3 = new XMLHttpRequest();
      const url3='https://www.insa-rouen.fr/';
      Http3.open("GET", url3);
      Http3.send();
      Http3.onreadystatechange=(e)=>{
        $('#HPcsa').text('HP CSA : ' +  Http3.status)
        document.getElementById("HPcsa").style.color = "#AA0000";
        if(Http3.status!=404 && Http3.status!=401){
          document.getElementById("HPcsa").style.color = "#00BB00";
          $('#HPcsa').text('INSA Rouen : OK ' +  Http3.status)
        }
      }


      });
    });
