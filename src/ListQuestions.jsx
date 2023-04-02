import questions from './data'
import { Question } from './Question'

export const ListQuestions = () => {
  return (
    <section>
      {questions.map((question) => {
        return <Question {...question} key={question.id} />
      })}
    </section>
  )
}
