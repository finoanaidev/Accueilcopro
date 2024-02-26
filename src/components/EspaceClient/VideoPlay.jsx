import React from 'react'
import ReactPlayer from 'react-player'

function VideoPlay() {
  return (
    <div>
        <h3>Demonstration</h3>
        <div>
        <ReactPlayer url='https://youtu.be/SMcztSqSQ18' />
        </div>
    </div>
  )
}

export default VideoPlay



Reproduire le style du bouton dans l'image :
1. Positionnement absolu:

Pour placer le bouton au centre bas du navbar, utilisez la propriété position: absolute et les propriétés bottom et left :

CSS
.button {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
Utilisez ce code avec précaution.
2. Flexbox:

Pour centrer le bouton horizontalement et verticalement à l'intérieur du navbar, utilisez le layout Flexbox :

CSS
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
}
Utilisez ce code avec précaution.
3. Propriétés supplémentaires:

Définissez la largeur et la hauteur du bouton.
Ajoutez des styles de bordure, d'arrière-plan et de police.
Ajustez les marges et les paddings si nécessaire.
Exemple de code CSS complet:

CSS
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.button {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 150px;
  height: 40px;
  border: 1px solid #ccc;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}
Utilisez ce code avec précaution.
Remarques:

Assurez-vous de définir les styles du navbar et du bouton dans le même fichier CSS.
Ajustez les valeurs des propriétés en fonction de vos besoins et de la mise en page de votre application.
Conseils:

Utilisez des outils de développement web comme Chrome DevTools pour inspecter et modifier les styles CSS en direct.
Testez et affinez le positionnement du bouton en fonction de la taille de l'écran et de la résolution.
En suivant ces instructions, vous pourrez reproduire le style du bouton dans l'image et le placer au centre bas du navbar. N'hésitez pas à me contacter si vous avez besoin d'aide pour l'implémentation ou si vous avez d'autres questions.