import React from 'react'
import PropTypes from 'prop-types'
const Modal = ({ children, closeModal, modalState, singleMovie }) => {
  if (!modalState) {
    return null
  }
  return (
    <div className="modal is-active">
      <div className="modal-background" onClick={closeModal} />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{singleMovie.title}</p>
          <button className="delete" onClick={closeModal} />
        </header>
        <section className="modal-card-body">
          <div className="content">{children}</div>
          <figure className="image" id="modalImage">
            <img
              src={`https://image.tmdb.org/t/p/w185/${singleMovie.poster_path}`}
              alt={singleMovie.title}
            />
          </figure>
          <div id="modalOverviewDiv">
            <p id="modalOverview">{singleMovie.overview}</p>
          </div>
          <div>
            <h4 className="modalRating">Ratings</h4>
            <p className="modalStats">Popularity: {singleMovie.popularity}</p>
            <p className="modalStats">Vote Count: {singleMovie.vote_count}</p>
            <p className="modalStats">
              Vote Average: {singleMovie.vote_average}
            </p>
            <p className="modalStats">
              Original Language: {singleMovie.original_language}
            </p>
          </div>
        </section>
        <footer className="modal-card-foot"></footer>
      </div>
    </div>
  )
}
Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  modalState: PropTypes.bool.isRequired,
  title: PropTypes.string,
}
class ShowModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalState: false,
      singleMovie: {},
    }
    this.toggleModal = this.toggleModal.bind(this)
  }
  toggleModal() {
    this.setState(prev => {
      const newState = !prev.modalState
      return { modalState: newState }
    })
    this.setState({ singleMovie: this.props })
  }

  render() {
    console.log(this.props)
    return (
      <span>
        <a data-name="Aarhus" data-slug="aarhus" onClick={this.toggleModal}>
          <i
            className="fas fa-info-circle"
            data-name="Aarhus"
            data-slug="aarhus"
            aria-hidden="true"
          ></i>
        </a>
        <Modal
          closeModal={this.toggleModal}
          modalState={this.state.modalState}
          singleMovie={this.state.singleMovie}
        ></Modal>
      </span>
    )
  }
}
export default ShowModal
