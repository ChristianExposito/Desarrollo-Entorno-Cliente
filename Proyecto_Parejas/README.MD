# Funcion configurarPartida#
Hacemos comprobaciones del dato
Hemos creado la constante CONFIG donde contenga un numero de parejas predefinido y en caso de que haya un problema a la hora de hacer el prompt pueda coger ese valor
# generarCartas #
Creamos un array donde introducir parejas en el array
# Fisher_yates #
Se encargara de randomizar el barajado de las cartas
# mostrarCartas #
Se crean los divs que crearan los huecos para las cartas
# iniciarJuego #
Es la función principal que arranca el juego. Primero comprueba el localStorage para ver si hay una partida guardada con CLAVE_MEMORIA:
Si existe: la recupera directamente para que el usuario pueda seguir jugando por donde iba.
Si no existe: arranca una partida nueva llamando a configurarPartida() para elegir el número de parejas, genera las cartas, las mezcla con el algoritmo de Fisher-Yates y las guarda. Al final, llama a mostrarCartas() para pintarlas en pantalla.
# La funcion fin #
Borra la clave para resetar la partida