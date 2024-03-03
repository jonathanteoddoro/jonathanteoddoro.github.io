class Cena1 extends Phaser.Scene {
    constructor() {
        super({
            key: 'Cena1',
            
        });
    }

    // Carregamento de recursos
    preload() {
        this.load.image('bg2', 'assets/fundo2.png');
        this.load.spritesheet('astronauta', 'assets/astronauta.png', { frameWidth: 64, frameHeight: 64 });
        this.load.image('ground', 'assets/plataforma.png');
        this.load.image('planeta', 'assets/planeta.png');
        this.load.image('estrela', 'assets/estrela.png');
    }

    // Criação de elementos
    create() {
        // Criação de animações
        this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('astronauta', { start: 8, end: 11 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('astronauta', { start: 12, end: 15 }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'turnRight',
            frames: [{ key: 'astronauta', frame: 0 }],
            frameRate: 20
        });

        this.anims.create({
            key: 'turnLeft',
            frames: [{ key: 'astronauta', frame: 4 }],
            frameRate: 20
        });

        // Adição de elementos de imagem e física
        this.add.image(400, 190, 'bg2').setScale(3);
        player = this.physics.add.sprite(100, 780, 'player').setScale(1.3);
        player.setCollideWorldBounds(true);
        player.setOrigin(0.5, 0.5);
        player.setSize(45, 60);
        player.body.setOffset(10, 3);
        player.direita = true;

        plataforma = this.physics.add.staticGroup();

        // Criação de plataformas estáticas
        plataforma.create(400, 900, 'ground').setScale(3, 1).refreshBody();
        plataforma.create(300, 800, 'ground').setScale(0.3).refreshBody();
        plataforma.create(500, 730, 'ground').setScale(0.3).refreshBody();
        plataforma.create(720, 620, 'ground').setScale(0.3).refreshBody();
        plataforma.create(450, 570, 'ground').setScale(0.3).refreshBody();
        plataforma.create(210, 630, 'ground').setScale(0.3).refreshBody();
        plataforma.create(60, 500, 'ground').setScale(0.3).refreshBody();
        plataforma.create(300, 390, 'ground').setScale(0.3).refreshBody();
        plataforma.create(170, 270, 'ground').setScale(0.3).refreshBody();
        plataforma.create(450, 200, 'ground').setScale(0.3).refreshBody();

        estrelas = this.physics.add.staticGroup();

        // Criação de estrelas
        estrelas.create(60, 600, 'estrela').refreshBody();
        estrelas.create(720, 700, 'estrela').refreshBody();
        estrelas.create(585, 350, 'estrela').refreshBody();
        estrelas.create(60, 100, 'estrela').refreshBody();
        estrelas.create(690, 40, 'estrela').refreshBody();

        lua = this.physics.add.staticImage(700, 200, 'planeta');
        this.physics.add.collider(plataforma, player);

        teclado = this.input.keyboard.createCursorKeys();

        // Verificação de colisão entre jogador e estrelas
        this.physics.add.overlap(player, estrelas, (player, estrela) => {
            estrela.destroy();
            pontuacao += 1;
            placar.setText(`ESTRELAS COLETADAS: ${pontuacao}`);
        });

        placar = this.add.text(50, 25, `ESTRELAS COLETADAS: ${pontuacao}`, { fontSize: '45px', fill: '#fff' });

        // Verificação de colisão entre jogador e lua
        this.physics.add.overlap(player, lua, () => {
            player.setVisible(false);
            setTimeout(() => {
                this.scene.start('Resultados');
            }, 500);
        });

        tempo = this.add.text(700, 800, segundos, { fontSize: '45px', fill: '#fff' });

        // Contagem regressiva do tempo
        for (let i = 1; i <= segundos; i++) {
            this.time.addEvent({
                delay: i * 1000,
                callback: function () {
                    tempo.setText(segundos - i);
                    if (segundos === i) {
                        this.scene.start('GameOver');
                    }
                },
                callbackScope: this // Define o escopo da função de callback
            });
        }
    }

    // Atualização do jogo
    update() {
        // Atualização das ações do jogador
        if (teclado.right.isDown) {
            player.setVelocityX(+160);
            player.anims.play('right', true);
            player.direita = true;
        } else if (teclado.left.isDown) {
            player.setVelocityX(-160);
            player.anims.play('left', true);
            player.direita = false;
        } else {
            player.setVelocityX(0);
        }

        if (!teclado.right.isDown && !teclado.left.isDown && player.direita === true) {
            player.anims.play('turnRight');
        } else if (!teclado.right.isDown && !teclado.left.isDown && player.direita === false) {
            player.anims.play('turnLeft');
        }

        if (teclado.up.isDown && player.body.touching.down) {
            player.setVelocityY(-230);
        }
    }
}

// Declaração de variáveis globais
var gameThings = ['plataformas','estrelas','lua'];
var player;
var plataforma;
var teclado;
var estrelas;
var placar;
var pontuacao = 0;
var lua;
var segundos = 50;
var tempo;
var i;
