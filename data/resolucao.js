const assets = "/static/images/resolucao/"
export default (
<div>
    <h1>Resolução</h1>
    <hr />
    <p>
        <i>Atualizado em 02 de Maio de 2018</i>
    </p>
    <p>
        Para descomplicar você, simplificaremos: a resolução nada mais é que qualidade de imagem. E para você conseguir entender
        aqueles números que são referentes à quantidade de pixels é só lembrar que quanto maior for o número, mais qualidade
        a imagem terá. Mas além dessas dicas, vamos exemplificar os tipos de resoluções que já existem hoje.
    </p>

    <figure>
        <img src={`${assets}fig1.jpg`}/>
    </figure>

    <p>
        <strong>HD (1280x720):</strong> as cores são mais vivas e o contraste intenso quando comparada com uma TV de tubo. Mas atenção:
        se o seu aparelho for muito grande, a imagem não vai ficar nítida.
    </p>
    <p>
        <strong>Full HD (1920x1080):</strong> é a resolução mais comum hoje em dia. Consegue transmitir imagens com ótima qualidade e
        com mais contraste que a HD, sem apresentar problemas quanto ao tamanho do aparelho e a qualidade da imagem.
    </p>
    <p>
        <strong>4K ou Ultra HD (3840x2160):</strong> possui um número bem maior de pixels, garantindo uma qualidade de imagem melhor
        do que as outras. Sua imagem torna-se quatro vezes mais nítida que a Full HD e não possui o efeito de “pixelização” da
        imagem – que é quando a imagem fica desfocada. Desse modo, você consegue ver imagens incríveis mesmo muito próximo da
        TV! Nesse formato existem TVs com até 100 polegadas.
    </p>

    <h4>Outras funções</h4>
    <p>
        <strong>Tela Curva:</strong> a principal diferença da tela curva é o ângulo de visão. Nessas, a curva é bem maior, possibilitando
        que você assista a TV em diversos locais do cômodo sem qualquer alteração na qualidade da imagem. Além disso, esse tipo
        de televisor costuma ter cores mais nítidas e brilhantes.
    </p>
    <p>
        <strong>3D:</strong> você pode aproveitar a tecnologia 3D não apenas no cinema, mas também em sua casa, já que as TVs atuais
        oferecem essa possibilidade. Vale lembrar que alguns canais de TV até já oferecem filmes e shows com terceira dimensão
        e, ainda, também existem modelos de televisores que fazem essa transformação de conteúdo tradicional em 3D. 
    </p>
    <figure>
        <img src={`${assets}fig2.jpg`}/>
    </figure>
    <p>
        <strong>Smart TV:</strong> as “televisões inteligentes” já estão no mercado há alguns anos e seu grande diferencial é oferecer
        ao telespectador acesso à internet e, dessa forma, acaba contando com diversas funções. Esse recurso possibilita baixar
        vários aplicativos, fazer vídeo chamadas, ter acesso a serviços de streaming de música e filmes e até usar como console
        de vídeo games. 
    </p>
</div>
)