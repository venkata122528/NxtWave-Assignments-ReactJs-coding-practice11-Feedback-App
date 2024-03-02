import './index.css'

const ForEachEmojiItem = props => {
  const {obj, onClickEmoji} = props
  const {name, imageUrl} = obj

  const onClickEmojiLogo = () => {
    onClickEmoji()
  }

  return (
    <li className="emojiContainer">
      <img
        src={imageUrl}
        alt={name}
        className="emoji"
        onClick={onClickEmojiLogo}
      />
    </li>
  )
}

export default ForEachEmojiItem
