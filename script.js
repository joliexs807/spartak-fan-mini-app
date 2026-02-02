let score = 0;
const scoreBox = document.getElementById("score");

/* ===== НОВОСТИ ===== */
const news = [
  "Спартак одержал победу 2:1",
  "Следующий матч — против Зенита",
  "Объявлен стартовый состав"
];

const newsBlock = document.getElementById("news");

news.forEach(text => {
  const p = document.createElement("p");
  p.textContent = text;
  newsBlock.appendChild(p);
});

/* ===== ПРОГНОЗЫ ===== */
const matches = [
  "Спартак vs Локомотив",
  "Спартак vs Зенит",
  "Спартак vs ЦСКА"
];

const predictions = document.getElementById("predictions");

matches.forEach(match => {
  const card = document.createElement("div");
  card.className = "match-card";

  card.innerHTML = `
    <strong>${match}</strong><br>
    <button>Победа Спартака</button>
    <button>Ничья</button>
    <button>Поражение</button>
  `;

  card.querySelectorAll("button").forEach(btn => {
    btn.onclick = () => {
      card.querySelectorAll("button").forEach(b => b.classList.remove("selected"));
      btn.classList.add("selected");

      if (btn.textContent === "Победа Спартака") score++;
      scoreBox.innerHTML = "Очки: <strong>" + score + "</strong>";
    };
  });

  predictions.appendChild(card);
});

/* ===== MVP ===== */
const mvp = ["Промес", "Соболев", "Зиньковский"];
const mvpBlock = document.getElementById("mvp");

mvp.forEach(player => {
  const btn = document.createElement("button");
  btn.textContent = player;
  btn.onclick = () => alert("Вы выбрали MVP: " + player);
  mvpBlock.appendChild(btn);
});

/* ===== УГАДАЙ СЧЁТ ===== */
function submitGuess() {
  const value = document.getElementById("scoreInput").value;
  if (!value) return alert("Введите счёт");
  alert("Ваш прогноз: " + value);
}
