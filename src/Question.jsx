import { useRef, useState } from 'react'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { AiFillMinusCircle } from 'react-icons/ai'

export const Question = ({ title, info }) => {
  const article = useRef(null)
  const paragraph = useRef(null)
  const [value, setValue] = useState(true)

  const editHeight = () => {
    const heightParagraph = paragraph.current.getBoundingClientRect().height
    const heightArticle = article.current.getBoundingClientRect().height

    article.current.style.height = value
      ? `${heightArticle + heightParagraph}px`
      : 'calc(23px + 2rem)'

    setValue(!value)
  }

  return (
    <article ref={article} className="question">
      <div className="title">
        <h3>{title}</h3>
        {value ? (
          <BsFillPlusCircleFill onClick={editHeight} className="expand" />
        ) : (
          <AiFillMinusCircle onClick={editHeight} className="retract" />
        )}
      </div>
      <p ref={paragraph}>{info}</p>
    </article>
  )
}
