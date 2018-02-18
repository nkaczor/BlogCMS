import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PhotoGallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchImages } from '../../actions/images';
import { ImageShape } from '../../utils/propTypes';
import { getImages } from '../../selectors/imagesSelectors';

class Gallery extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }

  fetchData() {
    this.props.fetchImages();
  }

  render() {
    const { images } = this.props;

    const photos = images.map(({ image, height, width }) => ({
      src: image,
      width,
      height
    }));

    return (
      <div>
        <h3>Gallery</h3>
        <PhotoGallery photos={photos} onClick={this.openLightbox} />
        <Lightbox
          images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.arrayOf(ImageShape),
  fetchImages: PropTypes.func.isRequired
};

Gallery.defaultProps = {
  images: []
};

function mapStateToProps(state) {
  return {
    images: getImages(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators({ fetchImages }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
