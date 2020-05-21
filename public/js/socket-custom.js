
    var socket = io();

    socket.on('connect', function(){
        console.log('Conectado al servidor');
    });

    // (on) Escuchar
    socket.on('disconnect', function(){

        console.log('Se perdió la conexión con el servidor');

    });

    //Enviar información
    socket.emit('enviarMensaje', {
        usuario: 'Irving',
        mensaje: 'Hola mundo'
    }, function(resp){
        console.log('Respuesta server: ', resp);
    });

    //Escuchar información
    socket.on('enviarMensaje', function(mensaje){
        console.log('Servidor', mensaje);
    });

