import { 
  BsFillEmojiHeartEyesFill, 
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
 } from 'react-icons/bs'
import './Thanks.css'

const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />,
}

const Thanks = ({ data }) => {
  return (
    <div className='thanks-container'>
        <h2>Falta pouco...</h2>
        <p>
          A sua opinião é muito importante para nós, em breve você receberá um cupom
          de 10% de desconto para a sua próxima compra conosco.
        </p>
        <h3>{data.name}, aqui está o resumo da sua avaliação: </h3>
        <p className='review-data'>
          <span>Satisfação com o produto:</span>
          {emojiData[data.review]}
        </p>
        <p className="comment">
          <span>Comentário: </span>
            {data.comment}
        </p>
        <p>Para concluir a avaliação, passe o mouse sobre a imagem e 
          clique no botão Enviar logo abaixo.</p>
        <img className='img' src='obrigado.jpeg' alt='agradecimento'/>
    </div>
  )
}

export default Thanks