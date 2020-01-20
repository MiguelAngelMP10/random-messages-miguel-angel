const messages = [
    "Nunca pierdas las ganas de seguir mejorando y devorando el mundo.",
    "Con una mentalidad negativa jamás podrás disfrutar de las cosas positivas de la vida.",
    "Cumplir todas tus metas es muy sencillo, solo debes comprometerte a lograrlo.",
    "Todos vamos a morir, eso es muy triste, pero es peor saber que no todos llegamos a vivir.",
    "Tener éxito no es cuestión de suerte, es el resultado del esfuerzo más arduo.",
    "El talento solo es una pequeña ayuda para alcanzar el éxito, el resto dependerá del trabajo duro.",
    "Si nunca te rindes, jamás podrás ser derrotado en la vida.",
    "Una de mis frases cortas de motivación favoritas es: No permitas que los pensamientos de los demás dominen los tuyos.",
    "Tú eres el dueño de tu vida, así que toma las riendas y no permitas que nadie más la controle.",
    "Se amable con todo el mundo, pero severo con tu mente, ella puede ser la herramienta del éxito o de tu fracaso.",
    "Nunca encontrarás a tu alma gemela si no te has tomado el gran trabajo de desenterrar la tuya."
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
};

module.exports = {
    randomMsg
};