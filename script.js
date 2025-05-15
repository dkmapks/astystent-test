function answer() {
  const input = document.getElementById("question").value.toLowerCase();
  const responseText = document.getElementById("responseText");

  const responses = {
    "ile to 2+2": {
      audio: "2plus2.m4a",
      text: "4"
    },
    "jak masz na imię": {
      audio: "imie.m4a",
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
