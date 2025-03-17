function Santa() {
    context = santagame.getContext('2d');
    const santa = new Image();
    santa.src = "https://pngfile.net/download/SohUt5aOrd4T3k8tCd1Z7xEkAStBAqz8176CY5Xg9zlFJcEkFqMPz4USHbDo0A1wDaxi93yMWq7E4JdKAdCykpc6m34mkuzDLTn1gxfwCs8rR5DpWRxQDq154K7mr8ziFNcKdjbDvBYIcenQXD62kf2OZMiy3DGoSkXsAMlcUJpn1SqpDRfJf6ieEmD3us0s0ErXJutM/large"
    santaX = 10;
    santaDY = score = bestScore = 0;
    santaSize = 100;
    pipeWidth = topPipeBottomY = 70;
    interval = 19;
    santaY = 300;
    pipeGap = 200;
    canvasSize = pipeX = 750;
    santagame.onclick = () => { santaDY = 8}
    setInterval(() => {
        context.fillStyle = "#b2ebf2";
        context.fillRect(0, 0, canvasSize, canvasSize); //Background
        santaY -= santaDY -= 0.5; //Gravity
        context.drawImage(santa, santaX, santaY, santaSize, santaSize); //Draw santa
        context.fillStyle = "brown"; //color pipe
        pipeX -= 10; //Move pipe
        pipeX < -pipeWidth && ((pipeX = canvasSize), (topPipeBottomY = pipeGap * Math.random()))
        // reset pipe and random pipe gap
        context.fillRect(pipeX, 0, pipeWidth, topPipeBottomY); //Draw top pipe
        context.fillRect(pipeX, topPipeBottomY + pipeGap, pipeWidth, canvasSize); //Draw bottom pipe
        context.fillStyle = "brown";
        context.fillText(score++, 10, 15); //Increase and draw score
        bestScore = bestScore < score ? score : bestScore; //New best score
        context.fillText(`Best: ${bestScore}`, 10, 25); // Draw best score
        (((santaY < topPipeBottomY || santaY > topPipeBottomY + pipeGap) && pipeX < santaSize) //santa hit pipe
        || santaY > screenSize) && //santa falls of screen
        ((santaDY = 0), (santaY = 200), (pipeX = canvasSize), (score = 0)); // santa died
    }, interval)
}