import React from 'react';
import axios from 'axios';
import './styles/app.scss';
import QuestionsPage from './components/QuestionsPage/QuestionsPage'
import PageHeader from './components/PageHeader/PageHeader'
import PageResults from './components/PageResults/PageResults'

class App extends React.Component {

  state = {
    questions: [],
    points: 0,
    answeredQuestions: 0,
  }

  componentDidMount(){
    axios
    .get('/questions')
    .then (res=>{
      this.setState({questions: res.data})
      console.log(res.data)
    })

    .catch(err=> {console.log(err)})
  }

  processAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        points: this.state.points + 1
      });
    }
    this.setState({
      answeredQuestions: this.state.answeredQuestions <10 ? this.state.answeredQuestions + 1 : 10
    })
  }

  try_again = () => {
    axios
    .get('/questions')
    .then (res=>{
      this.setState({
      questions: res.data,
      points: 0,
      answeredQuestions:0})
    })

    .catch(err=> {console.log(err)})
  }

  render() {
    return (
      <div>
        <PageHeader/>
        <main>
          {this.state.answeredQuestions <10 &&
          this.state.questions.map (question => {
            return <QuestionsPage
            id={question.id}
            key={question.id}
            question={question.question}
            answer = {question.correct_answer}
            options = {question.answers}
            finalAnswer={answer => this.processAnswer(answer, question.correct_answer)}/>
            }
          )}
          {this.state.answeredQuestions === 10 ? (<PageResults final_score={this.state.points} try_again ={this.try_again}/>) : null}
          </main>
      </div>
    )
  }
}

export default App;
