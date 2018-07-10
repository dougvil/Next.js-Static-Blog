const assets = "/static/images/novidades/"
export default (
<div>
    <h1>
        Novidades TV OLED e TV Portátil
    </h1>
    <hr />
    <p>
        <i>Atualizado em 02 de Maio de 2018</i>
    </p>
    <h4>TV OLED</h4>
    <p>
        Essa nova tecnologia de “OLED” promete revolucionar o mercado e substituir, num futuro próximo, o “LED” e o Plasma.
    </p>

    <figure>
        <img src={`${assets}fig1.jpg`}/>
    </figure>

    <p>Ao contrário da TV de “LED”, nesse modelo, cada ponto que compõe a imagem produz sua própria luz – eliminando a necessidade
        de um “backlight” e possibilitando uma tela mais fina, com cores mais fortes, contrastes mais marcantes e com menor
        consumo de energia. Um ônus desse modelo é o seu ótimo ângulo de visão de 180°.</p>
    <p>Por possui um painel flexível composto de materiais orgânicos e que, quando estimulados por uma corrente elétrica, possuem
        a capacidade de exibir quaisquer cores primárias usadas para formar as imagens televisivas. Por não possuírem a necessidade
        da instalação de lâmpadas ou microtubos na parte traseira, os modelos de “OLED” são mais finos e gastam menos energia.</p>
    <p>Contudo, essa nova tecnologia, ainda adotada por poucos fabricantes até o momento, é cara. No final de 2013, um dos primeiros
        modelos de TVs de “OLED” com tela curva chegou ao Brasil com preço próximo a 40.000 reais. Já no início de 2014,
        a mesma fabricante anunciou seu primeiro modelo flexível – podendo escolher tela curva ou plana somente acionando
        um botão.</p>
    <p>Apenas o tempo dirá se o uso do “OLED” vai conseguir trazer os benefícios esperados, bem como uma boa aceitação pelos
        usuários. Para alguns especialistas, os modelos com tela de “OLED” se popularizarão cada vez mais, mas é imprescindível
        que a produção dos painéis amadureça, já que grande parte de sua produção são perdidas ao longo do processo, aumentando
        significativamente o custo da tecnologia.</p>

    <h4>TV Portátil</h4>
    <p>Com uma TV portátil é possível assistir sua novela preferida ou um jogo de futebol no metrô ou no ônibus. Esse tipo de
        TV funciona com uma bateria que oferece ampla mobilidade e capaz de receber o sinal digital – também são Full HD.
        Além disso, a depender do modelo, a TV portátil ainda pode ser acoplada no painel de seu automóveis. </p>
    <figure>
        <img src={`${assets}fig2.jpg`}/>
    </figure>

</div>

)