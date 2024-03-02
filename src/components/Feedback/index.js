import {Component} from 'react'
import ForEachEmojiItem from '../ForEachEmojiItem/index'
import './index.css'

class Feedback extends Component {
  state = {isClicked: false}

  onClickEmoji = () => {
    this.setState({isClicked: true})
  }

  render() {
    const {isClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources

    return (
      <div className="mainContainer">
        <div className="card">
          {isClicked ? (
            <>
              <img src={loveEmojiUrl} alt="love emoji" className="loveImage" />
              <h1 className="thanksEl">Thank You!</h1>
              <p className="feedbackPara">
                We will use your feedback to improve our customer support
                performance.
              </p>
            </>
          ) : (
            <div>
              <h1>
                How satisfied are you with our customer support performance
              </h1>
              <ul className="emojisContainer">
                {emojis.map(each => (
                  <ForEachEmojiItem
                    key={each.id}
                    obj={each}
                    onClickEmoji={this.onClickEmoji}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
