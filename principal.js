var fondoJuego;
var boton;
var flappy;
var cursores;
var persona;

var juego = new Phaser.Game(370, 550, Phaser.AUTO, 'bloque_juego');

var estadoPrincipal = {
    
    preload: function(){
        //carga todos los recursos
        juego.load.image('fondo','img/bg.jpeg');
        juego.load.spritesheet('pajaros', 'img/pajaro.png', 43, 30);
        juego.load.spritesheet('personas', 'img/persona.png', 64, 64);
    },
    
    create: function(){
        //mostrar en pantalla
        fondoJuego = juego.add.tileSprite(0, 0, 370, 550, 'fondo');
//        flappy = juego.add.sprite(100, 100, 'pajaros');
//        flappy.frame = 1;
//        flappy.animations.add('vuelo', [0,1,2], 10, true);
        persona = juego.add.sprite(juego.width/2, juego.height/2, 'personas');
        persona.anchor.setTo(0.5);
        persona.animations.add('arriba', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);
        persona.animations.add('derecha', [27, 28, 29, 30, 31, 32, 33, 34, 35], 10, true);
        persona.animations.add('izquierda', [9, 10, 11, 12, 13, 14, 15, 16, 17], 10, true);
        persona.animations.add('abajo', [18, 19, 20, 21, 22, 23, 24, 25, 26], 10, true);
        cursores = juego.input.keyboard.createCursorKeys();
        juego.physics.startSystem(Phaser.Physics.ARCADE);
        juego.physics.arcade.enable(persona);
        persona.body.collideWorldBounds = true;
//        juego.physics.arcade.enable(flappy);
//        flappy.body.collideWorldBounds = true;
    },
    
    update: function(){
        //flappy.angle+=1;
        //flappy.animations.play('vuelo');
        if(cursores.right.isDown){
            //flappy.position.x += 1;
            persona.position.x += 2;
            persona.animations.play('derecha');
        }
        if(cursores.left.isDown){
            //flappy.position.x -= 1;
            persona.position.x -= 2;
            persona.animations.play('izquierda');
        }
        if(cursores.up.isDown){
            //flappy.position.y -= 1;
            persona.position.y -= 2;
            persona.animations.play('arriba');
        }
        if(cursores.down.isDown){
            //flappy.position.y += 1;
            persona.position.y += 2;
            persona.animations.play('abajo');
        }
    }
    
};

juego.state.add('principal', estadoPrincipal);
juego.state.start('principal');