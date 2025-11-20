

// ===============================
// 1. Tên 40 học sinh
// ===============================
const students = [
  "Trần Văn Hoàng",
  "Mai Hoàng Huy",
  "Ng Thị Thiên Kim",
  "Đặng Thị Ngọc Lam",
  "Ng Thị Quỳnh Lê",
  "Nguyễn Bảo Long",
  "Trần Thị Kim Luyến",
  "Phạm Ng Phương Nghi",
  "Đinh Minh Ngọc",
  "Trần Huy Nhân",
  "Huỳnh Thị Diễm Ngọc",
  "Trương Định An",
  "Châu Duy Anh",
  "Ng Thị Trúc Đào",
  "Huỳnh Phong Đạt",
  "Lê Long Đỉnh",
  "Nguyễn Trung Hiếu",
  "Nguyễn Thị Như Ý",
  "Mai Thị Thảo Vy",
  "Dương Thái Việt",
  "Võ Thúy Vân",
  "Hồ Văn Vàng",
  "Thạch Vĩ Tường",
  "Huỳnh Lê Minh Trí",
  "Lê Ng Nhã Trân",
  "Dương Thủy Tiên",
  "Nguyễn Quốc Thuận",
  "Bùi Ng Hồng Thơm",
  "Ng Thị Hồng Thắm",
  "Nguyễn Minh Thảo",
  "Phan Võ Hoàng Tân",
  "Lê Hoàng Tân",
  "Phan Hữu Tài",
  "Hồ Văn Sơn",
  "Ng Hà Hoàng Phú",
  "Đặng Thị Hồng Nhung",
  "Lê Phạm Yến Nhi"
];


// ===============================
// 2. Danh sách câu hỏi random
// ===============================
const questions = [
  {
    q: "Câu 1: Dạng năng lượng nào sau đây là năng lượng tái tạo?",
    a: [
      "Năng lượng từ than đá",  // A
      "Năng lượng từ xăng",      // B
      "Năng lượng từ mặt trời",  // C → đáp án đúng
      "Năng lượng từ khí gas"    // D
    ],
    correct: 2
  },
  {
    q: "Câu 2: Dạng năng lượng nào không phải là năng lượng tái tạo?",
    a: [
      "Năng lượng thủy triều",  // A
      "Năng lượng gió",         // B
      "Năng lượng mặt trời",    // C
      "Năng lượng khí đốt"      // D → đáp án đúng
    ],
    correct: 3
  },
  {
    q: "Câu 3: Cho các nguồn năng lượng: khí tự nhiên, địa nhiệt, năng lượng Mặt Trời, sóng, thủy điện, dầu mỏ, gió, than đá. Có bao nhiêu trong số các nguồn năng lượng này là nguồn năng lượng tái tạo?",
    a: [
      "5", // A → đáp án đúng
      "4", // B
      "3", // C
      "2"  // D
    ],
    correct: 0
  },
  {
    q: "Câu 4: Năng lượng tái tạo là năng lượng từ những nguồn có đặc điểm gì?",
    a: [
      "Năng lượng tái tạo là năng lượng từ những nguồn liên tục được coi là vô hạn", // A → đúng
      "Năng lượng tái tạo là năng lượng từ những nguồn không liên tục được coi là vô hạn", // B
      "Năng lượng tái tạo là năng lượng từ nguồn nhiên liệu.", // C
      "Năng lượng tái tạo là năng lượng từ những nguồn có thể tái chế" // D
    ],
    correct: 0
  },
  {
    q: "Câu 5: Nội dung nào sau đây không phải là ưu điểm của năng lượng mặt trời?",
    a: [
      "Nguồn năng lượng luôn sẵn trong thiên nhiên", // A
      "Không phát thải các chất gây ô nhiễm",       // B
      "Không gây hiệu ứng nhà kính",                 // C
      "Giá thành sản xuất pin mặt trời rẻ"           // D → đúng
    ],
    correct: 3
  },
  {
    q: "Câu 6: Điểm nào sau đây không phải là ưu điểm của năng lượng từ gió?",
    a: [
      "Không gây ô nhiễm môi trường", // A
      "Không tốn nhiên liệu",          // B
      "Thiết bị gọn nhẹ",             // C → đúng
      "Có công suất rất lớn"           // D
    ],
    correct: 2
  }
];



// ===============================
// Vẽ vòng quay
// ===============================
const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const spinBtn = document.getElementById("spin-btn");
const winnerNameBox = document.getElementById("winner-name");

let startAngle = 0;
let arc = Math.PI * 2 / students.length;

// Vẽ vòng tròn
function drawWheel() {
  const radius = canvas.width / 2;
  for (let i = 0; i < students.length; i++) {
    let angle = startAngle + i * arc;

    ctx.beginPath();
    ctx.fillStyle = i % 2 === 0 ? "#ffcc00" : "#ff9900";
    ctx.moveTo(radius, radius);
    ctx.arc(radius, radius, radius, angle, angle + arc);
    ctx.fill();

    // Vẽ tên học sinh
    ctx.save();
    ctx.translate(radius, radius);
    ctx.rotate(angle + arc / 2);
    ctx.fillStyle = "black";
    ctx.font = "16px Arial";
    ctx.textAlign = "right";  // để tên dài nằm trong vòng
    ctx.fillText(students[i], radius - 10, 5);
    ctx.restore();
  }
}

drawWheel();

// ===============================
// Xử lý quay
// ===============================
spinBtn.addEventListener("click", () => {
  let spins = Math.floor(Math.random() * 5) + 5; // số vòng quay ngẫu nhiên
  let spinAngle = spins * 2 * Math.PI + Math.random() * 2 * Math.PI;
  let duration = 4000; // 4 giây

  let start = null;

  function animate(time) {
    if (!start) start = time;
    let elapsed = time - start;
    if (elapsed < duration) {
      startAngle = easeOut(elapsed, 0, spinAngle, duration);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawWheel();
      requestAnimationFrame(animate);
    } else {
      startAngle += spinAngle % (2 * Math.PI);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawWheel();
      stopWheel();
    }
  }

  requestAnimationFrame(animate);
});
// Hàm easing (mềm dần khi dừng)
function easeOut(t, b, c, d) {
  t /= d;
  t--;
  return c * (t * t * t + 1) + b;
}

// ===============================
// Khi dừng vòng quay
// ===============================
let currentQuestion = null; // biến toàn cục lưu câu hỏi hiện tại

// Mảng phụ để tránh lặp tên học sinh
let remainingStudents = [...students];

// Mảng phụ để tránh lặp câu hỏi (tùy chọn)
let remainingQuestions = [...questions];

function getRandomStudent() {
  if (remainingStudents.length === 0) {
    remainingStudents = [...students]; // reset nếu hết
  }
  const randIndex = Math.floor(Math.random() * remainingStudents.length);
  const winner = remainingStudents[randIndex];
  remainingStudents.splice(randIndex, 1); // loại khỏi mảng để không lặp
  return winner;
}

function getRandomQuestion() {
  if (remainingQuestions.length === 0) {
    remainingQuestions = [...questions]; // reset nếu hết
  }
  const randIndex = Math.floor(Math.random() * remainingQuestions.length);
  const q = remainingQuestions[randIndex];
  remainingQuestions.splice(randIndex, 1); // loại để không lặp
  return q;
}

function stopWheel() {
  const radius = canvas.width / 2;
  let degrees = startAngle * 180 / Math.PI;
  degrees = (360 - (degrees % 360)) % 360;
  const index = Math.floor(degrees / (360 / students.length));

  // Lấy tên học sinh ngẫu nhiên mà không lặp
  const winner = getRandomStudent();
  winnerNameBox.innerText = winner;
  winnerNameBox.style.display = "block";

  // Random câu hỏi ngay khi dừng, đồng bộ với tên học sinh
  currentQuestion = getRandomQuestion();
  showQuestion(currentQuestion);

  // Ẩn tên học sinh sau 10 giây
  setTimeout(() => {
    winnerNameBox.style.display = "none";
  }, 10000);
}

// ===============================
// Hiển thị câu hỏi
// ===============================
function showQuestion(q) {
  const qBox = document.getElementById("question-text");
  const answersDiv = document.getElementById("answers");
  const result = document.getElementById("result");

  qBox.innerText = q.q;
  answersDiv.innerHTML = "";
  result.innerText = "";

  q.a.forEach((ans, index) => {
    let btn = document.createElement("button");
    btn.innerText = `${String.fromCharCode(65 + index)}. ${ans}`;

    btn.onclick = () => {
      if (index === q.correct) {
        result.innerText = "ĐÚNG!";
        result.style.color = "lightgreen";
      } else {
        result.innerText = "SAI!";
        result.style.color = "yellow";
      }
    };

    answersDiv.appendChild(btn);
  });
}
