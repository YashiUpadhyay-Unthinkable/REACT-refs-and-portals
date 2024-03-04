import { useRef, useState } from 'react';
import ResultModal from './ResultModal';

export default function TimerChallenge({ title, targetTime }) {
  let [timeStarted, setTimeStarted] = useState();
  let [timeExpired, setTimeExpired] = useState();
  let timerRef = useRef();
  let dialog = useRef();

  function handleStart() {
    timerRef.current = setTimeout(() => {
      setTimeExpired(true);
      console.log(dialog);
      dialog.current.showModal();
    }, targetTime * 1000);
    setTimeStarted(true);
  }

  function handleStop() {
    clearTimeout(timerRef.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="Lost" />
      <section className="challenge">
        <h2>{title}</h2>
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
    </>
  );
}
