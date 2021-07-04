import React from "react";
import axios from "axios";

import ImageGrid from "./ImageGrid";

class ImageSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: null,
      loading: false,
      searchText: "india",
      currentPage: 1,
      totalPages: 0,
    };
  }

  componentDidMount() {
    // Call external API
    this.getImages(this.state.searchText);
  }

  componentDidUpdate() {}

  getImages = (query, page = 1) => {
    const url =
      "https://api.unsplash.com/search/photos?client_id=Qi4KeA-4K9Aw6HV_90xIgfyQMYAJN42SgEzwu2M9arU&page=" +
      page +
      "&query=" +
      query;
    axios
      .get(url)
      .then((res) => {
        this.setState({
          images: res.data.results,
          loading: false,
          totalPages: res.data.total_pages,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  validate = () => this.state.searchText.trim() !== "";

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.validate()) {
      this.setState({ loading: true });
      this.getImages(this.state.searchText);
    }
  };

  handleNext = () => {
    this.setState({ currentPage: this.state.currentPage + 1 }, () => {
      this.getImages(this.state.searchText, this.state.currentPage);
    });
  };

  handlePageClick = (toPage) => {
    this.getImages(this.state.searchText, toPage);
    this.setState({ currentPage: toPage });
  };

  render() {
    return (
      <>
        <h5 className="text-center mt-5">Image Search</h5>
        <div className="col-md-4  offset-md-4">
          <form onSubmit={this.handleSubmit}>
            <div className="input-group mb-3">
              <input
                className="form-control"
                type="text"
                onChange={this.handleSearchChange}
              ></input>

              <input
                className="btn btn-primary"
                type="submit"
                value="Search"
              ></input>
            </div>
          </form>
        </div>

        {this.state.loading ? (
          <p className="text-center">
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </p>
        ) : (
          <>
            {this.state.images !== null && (
              <>
                {this.state.images.length === 0 ? (
                  <p className="text-center">No results found</p>
                ) : (
                  <ImageGrid images={this.state.images}></ImageGrid>
                )}
              </>
            )}
            <div className="text-center">
              <button className="btn btn-primary" onClick={this.handleNext}>
                Next
              </button>
            </div>

            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" ariaLabel="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    {this.state.currentPage}
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    onClick={() =>
                      this.handlePageClick(this.state.currentPage + 1)
                    }
                  >
                    {this.state.currentPage + 1}
                  </a>
                </li>
                <li className="page-item">
                  <a
                    className="page-link"
                    href="#"
                    onClick={() =>
                      this.handlePageClick(this.state.currentPage + 2)
                    }
                  >
                    {this.state.currentPage + 2}
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
          </>
        )}
      </>
    );
  }
}

export default ImageSearch;
