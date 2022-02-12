
import FeedbackOptions from "./Components/FeedbackOptions";
import { useState } from 'react';
import { Container } from "./App.styled";
import Statistics from "./Components/Statistics";
import Section from "./Components/Section";
import Notification from "./Components/Notification";

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // метод по клику фидбека

  const onLeaveFeedback = event => {
    switch (event.target.name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        return;
    }
  };

  // метод для подсчёта полож-х отзывов

  const countTotalFeedback = ({ good, neutral, bad }) => {
    return good + neutral + bad;
  };

  // метод для подсчёта % полож-х отзывов
  const countPositiveFeedbackPercentage = ({ good, neutral, bad}) => {
    return Math.trunc((good / (good + neutral + bad)) * 100);
  };

  
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={{good, neutral, bad}}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback({good, neutral, bad}) === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback({good, neutral, bad})}
              positivePercentage={countPositiveFeedbackPercentage(
                {good, neutral, bad}
              )}
            />
          )}
        </Section>
      </Container>
    );
  }


export default App;
