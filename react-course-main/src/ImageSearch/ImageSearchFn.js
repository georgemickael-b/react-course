import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ImageGrid from "./ImageGrid";

function ImageSearchFn() {
  const [searchText, setSearchText] = useState("india"); // return array. first i state variable, 2nd element is setter funtion
  // Above is using array destructuring. First element is stored in a
  // variables called searchText second elemenet which is a functions is
  // stored in a variable called setSearchText
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState(null);
  //const [imagesCount, setImagesCount] = useEffect(0);

  //useEffect(() => {}, []); // Like componentDidMount

  useEffect(() => {}, [searchText, loading, images]); // Like componentDidUpdate

  useEffect(() => {
    // Like componentDidMount
    getImages("india");
  }, []);

  const getImages = (query) => {
    const url =
      "https://api.unsplash.com/search/photos?client_id=Qi4KeA-4K9Aw6HV_90xIgfyQMYAJN42SgEzwu2M9arU&page=1&query=" +
      query;
    axios
      .get(url)
      .then((res) => {
        setImages(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const validate = () => searchText.trim() !== "";

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      setLoading(true);
      getImages(searchText);
    }
  };

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <>
      <h5 className="text-center mt-5">Image Search</h5>
      <div className="col-md-4  offset-md-4">
        <form onSubmit={handleSubmit}>
          <div class="input-group mb-3">
            <input
              className="form-control"
              type="text"
              onChange={handleSearchChange}
            ></input>

            <input
              className="btn btn-primary"
              type="submit"
              value="Search"
            ></input>
          </div>
        </form>
      </div>

      {loading ? (
        <p className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </p>
      ) : (
        <>
          {images !== null && (
            <>
              {images.length === 0 ? (
                <p className="text-center">No results found</p>
              ) : (
                <ImageGrid images={images}></ImageGrid>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}

export default ImageSearchFn;

//Hooks
