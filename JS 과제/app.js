const password = prompt("새로운 비밀번호를 입력하세요");
if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    alert("비밀번호 변경 완료!");
  } else {
    alert("공백이 있어요!");
  }
} else {
  alert("더 길게 써주세요!");
}
