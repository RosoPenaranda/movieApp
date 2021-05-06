import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./movieForm.scss"
const MovieForm = ({ addMovie }) => {


  const [state, setValues] = useState({
    form: {
      title: "",
      release: "",
      img: "",
      description: ""
    },
    hasError: {
      title: false,
      release: false,
      image: false,
    },
    image: React.createRef(),
    redirect: false
  })

  const getClass = (id) => {
    return (state.hasError[id]) ? 'form-control  is-invalid' : 'form-control'
  }

  const handelInput = (event) => {
    const form = state.form
    const hasError = state.hasError
    form[event.target.name] = event.target.value
    hasError[event.target.name] = event.target.value.trim().length < 1
    setValues({
      ...state,
      form,
      hasError
    });
  };

  const handleForm = (event) => {
    event.preventDefault()
    const hasError = state.hasError

    let allOk = true
    if (state.form.title.trim().length < 1) {
      allOk = false
      hasError.title = true
    }
    if (state.form.release.trim().length < 1 || (state.form.release === '')) {
      allOk = false
      hasError.release = true
    }
    const files = state.image.current.files || []
    if (files.length === 0 || !['image/png', 'image/jpeg'].includes(files[0].type)) {
      allOk = false
      hasError.image = true
    }


    if (allOk) {
      const formData = state.form

      function getBase64FromFile(img, callback) {
        let fileReader = new FileReader();
        fileReader.addEventListener('load', function () {
          callback(fileReader.result);
        });
        fileReader.readAsDataURL(img);
      }

      /* Seria usada de la siguiente manera */
      getBase64FromFile(files[0], function (base64) {
        formData.img = base64
        addMovie(formData);
        setValues({
          ...state,
          redirect: true
        })
      });

    } else {
      setValues({
        ...state,
        hasError
      })
    }
  }

  if (state.redirect)
    return <Redirect to="/" />

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form className="add_movie-form border rounder">
            <div className="form-row">
              <div className="col-12 col-lg-4">
                <label htmlFor="title">Movie Title:</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  className={getClass('title')}
                  placeholder="Movie title"
                  onChange={handelInput}
                />
                <div className="invalid-feedback">
                  Please provide a valid title.
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <label htmlFor="date">Relase date:</label>
                <input
                  type="date"
                  name="release"
                  id="release"
                  className={getClass('release')}
                  placeholder="Relase Date"
                  onChange={handelInput}
                />
                <div className="invalid-feedback">
                  Please provide a valid date.
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <label htmlFor="image">Image:</label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  className={getClass('image')}
                  ref={state.image}
                  placeholder="Choose File" />
                <div className="invalid-feedback">
                  Please provide a valid image, png, jpg, jpeg.
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="description">Description:</label>
              <textarea
                className="form-control"
                row="10"
                id="description"
                name="description"
                placeholder="Description..."
                onChange={handelInput}
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="btn btn-red"
                onClick={handleForm}
              >Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default MovieForm;
