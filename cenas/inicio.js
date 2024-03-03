class Inicio extends Phaser.Scene {
    constructor() {
        super({
            key: 'Inicio',
            backgroundColor: '#000'
        })
    }
    
    preload() {
        this.load.image('bg', 'assets/fundo.jpg');
        this.load.image('botao', 'assets/botao.png');
        this.load.image('nome', 'assets/nome.png');
        this.load.image('comojogar','assets/comojogar.png');
        this.load.image('howto', 'assets/howto.png');
        this.load.image('sair','assets/botaoSair.png');
    }

    create() {
        this.add.image(400,450,'bg').setScale(0.6);
        this.add.image(400, 900-600, 'nome').setScale(1.5);
         
        this.botoes = ['botao1','botao2','botao3']; // Criando uma lista para os botões
        this.botoes[0] = this.add.image(400, 600, 'botao').setScale(0.8);
        this.botoes[0].setInteractive({ cursor: 'pointer'});
        this.botoes[0].on('pointerup', () => {
            this.botoes[0].setScale(1.05);
            setTimeout(() => {
                this.scene.start('Cena1');
            }, 500);
        });
        
        tutorial = this.add.image(400, 450, 'comojogar');
        tutorial.setVisible(false);
        
       
        
        this.botoes[1] = this.add.image(700, 100, 'sair');
        this.botoes[1].setVisible(false);
        this.botoes[1].setInteractive({ cursor: 'pointer'});
        this.botoes[1].on('pointerup', () => {
            tutorial.setVisible(false);
            this.botoes[1].setVisible(false);
            this.botoes[2].setVisible(true);
        });

        this.botoes[2] = this.add.image(700, 100, 'howto');
        this.botoes[2].setInteractive({ cursor: 'pointer'});
        this.botoes[2].on('pointerup', () => {
            tutorial.setVisible(true);
            this.botoes[2].setVisible(false);
            this.botoes[1].setVisible(true);
        });
    }

    update() {
       
    }
}

let botao;

let tutorial;

