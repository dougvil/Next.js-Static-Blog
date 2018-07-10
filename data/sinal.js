const assets = "/static/images/sinal/"
export default (
<div>
    <h1>
        Sinal digital x analógico
    </h1>
    <hr />
    <p>
        <i>Atualizado em 02 de Maio de 2018</i>
    </p>
    <p>Em outubro de 1925, John Logie Baird foi responsável pela primeira transmissão de imagens em movimento e, em janeiro
        de 1926, pela construção do primeiro sistema de televisão viável. A televisão demorou algum tempo para se tornar
        o principal meio de entretenimento das pessoas, sendo só em 1960, após a Segunda Guerra Mundial, que o aparelho se
        popularizou e se consolidou como um dos eletrodomésticos mais importantes nas casas da população mundial.</p>
    
    <figure>
        <img src={`${assets}fig1.jpg`}/>
    </figure>

    <p>No Brasil, a ascensão da TV se efetivou com a inauguração da primeira emissora do país: a “TV Tupi”. A partir de então,
        as telenovelas, as coberturas jornalísticas e a exibição de jogos de futebol passaram a fazer parte da vida dos brasileiros
        - inicialmente em preto e branco e hoje, em cores.</p>

    <p>Atualmente, a televisão é a principal opção de lazer das famílias brasileiras. Sabemos que é em frente aos televisores
        que a população passa grande parte do seu tempo, seja assistindo a filmes, desenhos animados, notícias seja uma partida
        de futebol após um longo dia de trabalho. Devido ao fato de ser tão significativa em nossas vidas, preparamos um
        guia para te ajudar a saber tudo sobre qualquer tipo de TV!</p>

    <h4>Sinal Analógico x Sinal Digital</h4>

    <p>Em grande parte do Brasil o sinal digital e analógico estão passando por uma grande mudança: o sinal digital vem assumindo
        o papel do analógico e tem mostrado uma eficiência ímpar para toda a população, que passa a ter sinais mais precisos
        e imagens com uma qualidade muito superior.</p>

    <p>O sinal digital possui um formato menos complexo que o analógico. Isso significa, em linguagem técnica, uma diferença
        no uso de valores discretos diante do tempo e na amplitude. Podemos caracterizar o sinal digital como um formato
        que assume apenas valores inteiros, os quais podem influenciar de uma forma direta na qualidade do sinal e claro,
        consequentemente a sua imagem, que é apresentada com mais qualidade e sem oscilações.</p>

    <p>Com uma diferença notável não só no visual de cada sinal mas, principalmente, no processo de “busca” e transmissão do
        mesmo, torna-se importante compreender a diferença entre o sinal analógico e o sinal digital.</p>

    <p>&nbsp;</p>

    <h4>FREQUÊNCIA: </h4>

    <p>A começar pelo sinal analógico, que é caracterizado por ter um sinal contínuo que varia em função do tempo e é representado
        por uma curva. Apresenta os seus intervalos com valores que variam entre 0 e 10 - não sendo valores inteiros e sim
        intermediários. Assim, é natural que sua faixa de frequência seja bem maior, definindo o sinal analógico como não
        confiável, já que a sua qualidade é inferior – por conta da sua oscilação.</p>

    <p>Em contraste, o sinal digital é representado por valores inteiros, tendo, assim, valores mais discretos. Esse sinal trabalha
        com números descontínuos no tempo e na amplitude, com a eficiência de arredondar para cima ou para baixo os
        valores quebrados que possam ser encontrados em uma frequência, o que, tecnicamente, garante um sinal mais limpo
        e eficiente.</p>

    <p>Em vista disso, a diferença entre ambos os sinais pode ser notada principalmente em suas frequências, já que um sinal
        prioriza valores intermediários e o outro trabalha apenas com números inteiros. Por conseguinte, as frequências com
        números inteiros são responsáveis por um sinal de maior qualidade, com menor chance dos sinais serem transmitidos
        com oscilações.</p>

    <h4>TRANSMISSÃO:</h4>

    <p>Uma diferença bem notável entre os dois sinais é referente a transmissão. Enquanto que o sistema analógico funciona com
        a transmissão de pixel de imagens (ao invés de ondas de rádio), a TV digital possui uma transmissão semelhante ao
        tráfego de dados de um computador – muito mais eficiente.</p>

    <h4>RESOLUÇÃO:</h4>

    <p>Quanto a resolução, temos que o sinal analógico trabalha com 480 linhas horizontais. Em contrapartida, o sinal digital
        consegue alcançar 1.080 linhas. Isso significa que cada imagem produzida pelo sinal digital terá mais pontos compondo-a,
        produzindo uma imagem muito melhor - semelhante às de monitores de computador, por exemplo.</p>

    <figure>
        <img src={`${assets}fig2.jpg`}/>
    </figure>

</div>

)