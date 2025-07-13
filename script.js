// DOM 요소들을 변수에 할당
const statues = document.querySelectorAll('.statue-object');
const modal = document.getElementById('quiz-modal');
const closeButton = document.querySelector('.close-button');
const questionElement = document.getElementById('quiz-question');
const answerInput = document.getElementById('user-answer');
const submitButton = document.getElementById('submit-answer');
const resultMessage = document.getElementById('result-message');

// 퀴즈 데이터 객체
// 각 석상(key)에 문제와 정답을 저장합니다.
const quizzes = {
    anubis: {
        question: "전주 비빔밥의 반댓 말은?",
        answer: "이번주 비빔밥"
    },
    mummy: {
        question: "여름마다 일어나는 전쟁은?",
        answer: "더워"
    },
    sphinx: {
        question: "이순신 장군이 일본에 선전포고를 했을 때 했던 말은?",
        answer: "왜 로 워"
    },
    pharaoh: {
        question: "수학을 가장 잘했던 조선 시대 임금은?",
        answer: "연산군"
    }
};

// 현재 선택된 퀴즈의 정답을 저장할 변수
let currentAnswer = '';

// 각 석상 오브젝트에 클릭 이벤트 리스너를 추가
statues.forEach(statue => {
    statue.addEventListener('click', () => {
        // 클릭된 석상의 data-quiz 속성 값을 가져옴 (e.g., "anubis")
        const quizId = statue.dataset.quiz;
        // 해당 퀴즈의 문제와 정답을 가져옴
        const quiz = quizzes[quizId];
        
        // 퀴즈 정보 설정
        questionElement.textContent = quiz.question; // 문제 텍스트 설정
        currentAnswer = quiz.answer; // 현재 정답 저장
        
        // 입력 필드와 결과 메시지 초기화
        answerInput.value = '';
        resultMessage.textContent = '';
        
        // 모달 창을 표시
        modal.style.display = 'block';
    });
});

// 정답 확인 버튼에 클릭 이벤트 리스너를 추가
submitButton.addEventListener('click', () => {
    // 사용자가 입력한 답을 가져옴 (앞뒤 공백 제거)
    const userAnswer = answerInput.value.trim();
    
    // 정답 확인
    if (userAnswer === currentAnswer) {
        resultMessage.textContent = "정답입니다! 🎉";
        resultMessage.style.color = "#66ff66"; // 초록색 계열로 변경
    } else {
        resultMessage.textContent = `틀렸어요! 정답은 '${currentAnswer}'입니다.`;
        resultMessage.style.color = "#ff6666"; // 붉은색 계열로 변경
    }
});

// 모달 닫기 버튼에 클릭 이벤트 리스너를 추가
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// 모달 창 바깥 영역을 클릭했을 때 모달을 닫도록 설정
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});