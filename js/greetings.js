const loginForm = document.querySelector("#login-form"); // 로그인 폼 선택
const loginInput = loginForm.querySelector("input"); // 로그인 폼의 인풋 선택(하나뿐)
const greeting = document.querySelector("#greeting"); // h1 태그 선택
const HIDDEN_CLASSNAME = "hidden"; // 클래스명 반복
const USERNAME_KEY = "username"; // 사용자명 반복

function onLoginSubmit(event) {
  event.preventDefault(); // 이벤트 발생 시 기본 동작(새로고침) 방지
  loginForm.classList.add(HIDDEN_CLASSNAME); // submit 이벤트 발생 시 hidden 클래스 추가
  const username = loginInput.value; // username 변수에 인풋 값 대입
  localStorage.setItem(USERNAME_KEY, username); // 로컬스토리지에 저장
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`; // h1에 innerText 넣어주기
  greeting.classList.remove(HIDDEN_CLASSNAME); // hidden 클래스 제거
}

const savedUsername = localStorage.getItem(USERNAME_KEY); // 로컬 스토리지에서 username 가져오기

if (savedUsername === null) {
  // 로컬스토리지에 username이 없으면
  loginForm.classList.remove(HIDDEN_CLASSNAME); // 폼에서 hidden 클래스 제거
  loginForm.addEventListener("submit", onLoginSubmit); // submit 이벤트 발생 시 함수 실행
} else {
  // 로컬스토리지에 username이 있으면
  paintGreeting(savedUsername); // 저장되어 있던 username으로 함수 실행
}
