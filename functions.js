    function pulaLinha () {
        document.write("<br />");
    }

    function exibeTexto ( texto ) {
        document.write ( texto );
    }

    function calculaIMC ( peso, altura) {
        let resultado = peso / ( altura * altura );
        
        resultado = Math.round(resultado);

        if ( resultado < 18.6 ) { return "Abaixo do peso: " + resultado; }
        if ( resultado > 24.9 ) { return "SobrePeso " + resultado; }
        return "Peso normal: " + resultado;

    }


    function permissaoParaDirigir (CNH, idade) {
        if ( CNH == false ) {
            return "Não é permitido dirigir sem CNH";
        }
        
        if ( idade < 18 ) {
            return "Permissão para dirigir reprovada";
        }
        return "Permissão para dirigir aprovada";

    }

    function sorteio (aposta) {
        let numeroSorteado = Math.round(Math.random() * 10);
        
        if( aposta > numeroSorteado ) {
            return "Numero apostado é maior que o sorteado";
        }

        if( aposta < numeroSorteado ) {
            return "Numero apostado é menor que o numero sorteado";
        }

        return "Você acertou!";
    }

    function imprimePares (valorFinal) {
        let it = 0;
        while( it <= valorFinal ) {            
            document.write( (it) + "<br />");
            it += 2;
        }
        document.write("FIM");
    }

    function imprimeEntre30A40 () {
        let it = 30;
        while ( it <= 40) {
            if( it != 33 && it != 37) {
                document.write(it + "<br />");
            }
            it++;
        }
        document.write("FIM");
    }

    function imprimeEmOrdemDecrescente( valor ) {
        while ( valor >= 0) {
            document.write(valor + "<br />");            
            valor--;
        }
        document.write("FIM");
    }

    function tabuadaComRecursivo (tabuada, inicioFinal) {        
        if(tabuada == 0) {
            document.write(tabuada * inicioFinal);
            return 0;
        }            
            document.write( tabuada * inicioFinal);
            pulaLinha ();
        return tabuada * tabuadaComRecursivo(tabuada - 1, inicioFinal);
    }