import { Component } from "react";
import css from "components/Feedback/Feedback.module.css";
import { Stats } from "components/Stats/Stats";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Section } from "components/Section/Section";

export class Feedback extends Component{
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    
onLeaveFeedback = e => {
    const typeOfBtn = e.target.textContent;
    this.setState(prevState => {
      return {
        [typeOfBtn]: prevState[typeOfBtn] + 1,
      };
    });
  };



    countTotalFeedback = () => {
        const tstate = this.state;
        let totalRev = 0;
        totalRev = tstate.good + tstate.neutral + tstate.bad;
        return totalRev;
    }
    countPositiveFeedbackPercentage = () => {
    const res = ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
    return (res > 0 ? res : 0) + ' %';
  };
    
    render() {
        const tstate = this.state;
        const feedbackOptions = Object.keys(this.state);
        return (
            <div className={css.mainBox}>
                <Section title="Leave Feedback">
                    <FeedbackOptions options={feedbackOptions}
                        onLeaveFeedback={this.onLeaveFeedback}
                    />
                </Section>
                
                <Section title="Statistics">
                    <Stats
                    good={tstate.good}
                    neutral={tstate.neutral}
                    bad={tstate.bad}
                    total={this.countTotalFeedback()}
                    positiveProc={this.countPositiveFeedbackPercentage()}
                    />
                </Section>
                
            </div>

        )
    }
}