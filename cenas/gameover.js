class GameOver extends Phaser.Scene {
    constructor() {
        super({
            key: 'GameOver',
            backgroundColor: '#000'
        });
    }

    // Carregamento de recursos
    preload() {
        this.load.image('bg4', 'assets/fundo.jpg');
        this.load.image('perdeu','assets/derrota.png');
        this.load.image('botaoTryAgain', 'assets/tryagain.png');
    }

    // Criação de elementos
    create() {
        // Adiciona a imagem de fundo
        this.add.image(400, 450, 'bg4').setScale(0.6);

        // Adiciona a imagem de "perdeu"
        this.add.image(400, 250, 'perdeu').setScale(2);

        // Adiciona o botão "Try Again"
        this.botaoTryAgain = this.add.image(400, 480, 'botaoTryAgain').setScale(1.3);
        this.botaoTryAgain.setInteractive({ cursor: 'pointer' });

        // Define o evento de clique para reiniciar o jogo ao clicar no botão "Try Again"
        this.botaoTryAgain.on('pointerup', () => {
            this.scene.start('Cena1'); // Reinicia a cena do jogo
        });
    }
}
