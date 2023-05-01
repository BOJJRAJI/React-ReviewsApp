import {Component} from 'react'

import './index.css'

const Review = props => {
  const {reviewDetails} = props
  const {imgUrl, username, companyName, description} = reviewDetails

  return (
    <div className="review-container">
      <img src={imgUrl} alt={username} className="user-image" />
      <p className="user-name">{username}</p>
      <p className="company-name">{companyName}</p>
      <p className="description">{description}</p>
    </div>
  )
}

class ReviewsCarousel extends Component {
  state = {index: 0}

  gotoPreviousReview = () => {
    console.log('raji')
    const {index} = this.state
    console.log(index)
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  gotoNextReview = () => {
    console.log('raji')
    const {index} = this.state
    console.log(index)
    const {reviewsList} = this.props
    if (index < reviewsList.length - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props

    return (
      <div className="bg-container">
        <h1 className="heading">Reviews</h1>
        <div className="card">
          <button
            className="button"
            type="button"
            data-testid="leftArrow"
            onClick={this.gotoPreviousReview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="icon"
            />
          </button>

          <Review
            reviewDetails={reviewsList[index]}
            onClick={this.gotoNextReview}
          />
          <button
            className="button"
            type="button"
            onClick={this.gotoNextReview}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png "
              alt="right arrow"
              className="icon"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
