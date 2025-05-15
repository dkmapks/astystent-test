function answer() {
  const input = document.getElementById("question").value.toLowerCase();
  const responseText = document.getElementById("responseText");

  const responses = {
    "ile to 2+2": {
      audio: "audio/2plus2.mp3",
      text: "4"
    },
    "jak masz na imię": {
      audio: "audio/imie.mp3",
      text: "Mam na imię Dominik"
    }
    // Dodaj więcej pytań i plików audio tutaj
  };

  if (responses[input]) {
    responseText.textContent = responses[input].text;
    const audio = new Audio(responses[input].audio);
    audio.play();
  } else {
    responseText.textContent = "Nie znam odpowiedzi.";
  }
}
