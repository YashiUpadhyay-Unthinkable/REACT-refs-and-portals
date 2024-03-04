import { useRef, useState } from 'react';

export default function TimerChallenge({ title, targetTime }) {
  let [timeStarted, setTimeStarted] = useState();
  let [timeExpired, setTimeExpired] = useState();
  let timerRef = useRef();

  function handleStart() {
    timerRef.current = setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);
    setTimeStarted(true);
  }

  function handleStop() {
    clearTimeout(timerRef.current);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timeExpired && <p>You Lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timeStarted ? handleStop : handleStart}>
          {timeStarted ? 'Stop' : 'Start'} challenge
        </button>
      </p>
      <p className={timeStarted ? 'active' : undefined}>
        {' '}
        {timeStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  );
}
