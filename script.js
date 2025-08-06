function setSpeed(speed) {
  const fan = document.getElementById('fan');
  switch(speed) {
    case 'start':
        fan.style.animationDuration = '10s';
      break;
    case 'low':
      fan.style.animationDuration = '4s';
      break;
    case 'medium':
      fan.style.animationDuration = '2s';
      break;
    case 'fast':
      fan.style.animationDuration = '0.3s';
      break;
       case 'stop':
        fan.style.animationDuration = '0s';
  break;
    }
}