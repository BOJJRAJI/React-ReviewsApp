import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeList: 0}

  onBeforeList = () => {
    const {activeList} = this.state
    if (activeList > 0) {
      this.setState(prevState => ({activeList: prevState.activeList - 1}))
    }
  }

  onAfterList = () => {
    const {activeList} = this.state
    if (activeList < 3) {
      this.setState(prevState => ({activeList: prevState.activeList + 1}))
    }
  }

  render() {
    const {activeList} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, description, companyName} = reviewsList[activeList]
    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="card">
          <button
            type="button"
            className="image-button"
            onClick={this.onBeforeList}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-icon"
            />
          </button>

          <ul className="data-container">
            <li>
              <img src={imgUrl} alt={username} className="profile" />
              <p className="name">{username}</p>
              <p className="company">{companyName}</p>
              <p className="description">{description}</p>
            </li>
          </ul>
          <button
            type="button"
            className="image-button"
            onClick={this.onAfterList}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-icon"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
