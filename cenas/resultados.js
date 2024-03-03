class Resultados extends Phaser.Scene {

    constructor() {
        super({ 
            key: 'Resultados',
            backgroundColor: '#000'
        });
    }

    // Carregamento de recursos
    preload() {
        this.load.image('bg3', 'assets/fundo.jpg');
        this.load.image('texto', 'assets/texto.png');
        this.load.image('estrelas5', 'assets/estrelas5.png');
        this.load.image('estrelas4', 'assets/estrelas4.png');
        this.load.image('estrelas3', 'assets/estrelas3.png');
        this.load.image('estrelas2', 'assets/estrelas2.png');
        this.load.image('estrelas1', 'assets/estrelas1.png');
        this.load.image('resultado', 'assets/resultado.png');
        this.load.image('estrelas0', 'assets/estrelas0.png');
    }

    // Criação de elementos
    create() {
        // Adiciona a imagem de fundo e escala
        this.add.image(400, 450, 'bg3').setScale(0.6);

        // Adiciona a imagem de texto
        this.add.image(400, 250, 'texto').setScale(1.5);

        // Adiciona o texto das estrelas coletadas
        this.add.text(100, 400, `ESTRELAS COLETADAS:`, { fontSize: '55px', fill: '#fff' });

        // Verifica a pontuação e adiciona a imagem correspondente
        if (pontuacao === 5) {
            this.add.image(400, 525, 'estrelas5').setScale(1.3);
        } else if (pontuacao === 4) {
            this.add.image(400, 525, 'estrelas4').setScale(1.3);
        } else if (pontuacao === 3) {
            this.add.image(400, 525, 'estrelas3').setScale(1.3);
        } else if (pontuacao === 2) {
            this.add.image(400, 525, 'estrelas2').setScale(1.3);
        } else if (pontuacao === 1) {
            this.add.image(400, 525, 'estrelas1').setScale(1.3);
        } else {
            this.add.image(400, 525, 'estrelas0').setScale(1.3);
        }
    }

    // Atualização do jogo
    update() {
        // Função de atualização, se necessário
    }
}
