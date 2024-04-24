import { Formik, Form, Field, ErrorMessage } from "formik";
import PropTypes from "prop-types";
import './CreateBook.css';

const CreateBook = ({addBook}) => {
  const initialValues = {
    title: "",
    isbn: "",
    publishedDate: "",
    about: "",
    authorName: "",
    authorDOB: "",
    biography: ""
  };

  const onSubmit = (values, actions) => {
    addBook(values); 
    actions.setSubmitting(false);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.title) {
      errors.title = "Required";
    }

    return errors;
  };

  return (
    <div className="create-book">
      <h2>Create Book</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
      >
        {({ isSubmitting }) => (
          <Form>
            <h3>Book Details</h3>
            <div className="form-group">
              <label htmlFor="title">Title:</label>
              <Field type="text" name="title" id="title" />
              <ErrorMessage name="title" component="div" />
            </div>
            <div className="form-group">
              <label htmlFor="isbn">ISBN:</label>
              <Field type="text" name="isbn" id="isbn" />
              <ErrorMessage name="isbn" component="div" />
            </div>
            <div className="form-group">
              <label htmlFor="publishedDate">Published Date:</label>
              <Field type="date" name="publishedDate" id="publishedDate" />
              <ErrorMessage name="publishedDate" component="div" />
            </div>
            <div className="form-group">
              <label htmlFor="about">About:</label>
              <Field as="textarea" name="about" id="about" />
              <ErrorMessage name="about" component="div" />
            </div>
            <h3>Author Details</h3>
            <div className="form-group">
              <label htmlFor="authorName">Author Name:</label>
              <Field type="text" name="authorName" id="authorName" />
              <ErrorMessage name="authorName" component="div" />
            </div>
            <div className="form-group">
              <label htmlFor="authorDOB">Author Date of Birth:</label>
              <Field type="date" name="authorDOB" id="authorDOB" />
              <ErrorMessage name="authorDOB" component="div" />
            </div>
            <div className="form-group">
              <label htmlFor="biography">Biography:</label>
              <Field as="textarea" name="biography" id="biography" />
              <ErrorMessage name="biography" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Create
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
CreateBook.propTypes = {
  addBook: PropTypes.func.isRequired
};
export default CreateBook;
