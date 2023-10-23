window.onload = function () {
  // JS에서 페이지가 로드되면 자동으로 실행되는 전역 콜백함수이다.
  // 페이지의 모든 요소들이 로드되어야 호출된다.
  // 한 페이지에서 하나의 window.onload함수만 적용된다.
  let seconds = 00;
  let millisec = 00;
  let appendMillisec = document.getElementById('millisec');
  let appendSeconds = document.getElementById('seconds');
  let buttonStart = document.getElementById('button-start');
  let buttonStop = document.getElementById('button-stop');
  let buttonReset = document.getElementById('button-reset');
  let Interval;
  const timelog = document.querySelector('#timelog');
  let recordCounter = 1; // 기록 번호 카운터
  const timelogList = document.querySelector('#timelogList');

  buttonStart.onclick = function () {
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
    //setInterval(함수, 시간): 시간 간격마다 함수 실행 10/1000 = 0.01초
  };

  buttonStop.onclick = function () {
    clearInterval(Interval);
  };

  buttonReset.onclick = function () {
    clearInterval(Interval);
    millisec = '00';
    seconds = '00';
    appendMillisec.innerHTML = millisec;
    appendSeconds.innerHTML = seconds;
  };

  function startTimer() {
    millisec++;

    if (millisec <= 9) {
      appendMillisec.innerHTML = '0' + millisec;
    }

    if (millisec > 9) {
      appendMillisec.innerHTML = millisec;
    }

    if (millisec > 99) {
      // console.log('seconds');
      seconds++;
      appendSeconds.innerHTML = '0' + seconds;
      millisec = 0;
      appendMillisec.innerHTML = '0' + 0;
    }

    if (seconds > 9) {
      appendSeconds.innerHTML = seconds;
    }
  }

  // 기록체크 기능 넣기

  buttonStop.addEventListener('click', timeLog);

  function timeLog() {
    // 현재 시간 가져오기
    const currentRecordTime = `${seconds}:${millisec}`;
    // 기록을 listItem에 추가
    const listItem = document.createElement('li');
    listItem.textContent = `${recordCounter}:      ${currentRecordTime}`;
    document.querySelector('#timelogList').appendChild(listItem);

    recordCounter++;
  }

  buttonReset.addEventListener('click', resetTimeLog);
  function resetTimeLog() {
    recordCounter = 1; // 기록 번호 초기화
    while (timelogList.firstChild) {
      timelogList.removeChild(timelogList.firstChild);
    }
  }
};

// function timeout(callback) {
//   // callback은 timeout 함수의 매개변수로 콜백함수를 인수로 받아줌
//   setTimeout(() => {
//     console.log('0seo!');
//     callback();
//     // 실행 위치를 보장!
//   }, 3000);
// }

// timeout(() => {
//   console.log('Done!');
// });
