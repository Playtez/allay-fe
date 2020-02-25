import React from 'react';
// import { Redirect } from 'react-router';
import {
  TextField,
  Button,
  TextareaAutosize,
  ButtonGroup,
  Typography
} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { connect } from "react-redux";
import { postReview } from "../../state/actions/reviewActions";

const useStyles = makeStyles(theme => ({
  center: {
    display: 'flex',
    justifyContent: 'center',
    width: '0 auto'
  },
  container: {
    display: 'flex',
    border: '2px solid grey',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    maxWidth: '600px'
  },
  heading: {
    backgroundColor: 'lightgrey',
    maxWidth: '700px'
  }
}));


const ReviewForm = props => {
  
  const classes = useStyles();
  const [newReviewPost, setNewReviewPost] = React.useState({
    company_name: '',
    job_title: '',
    job_location: '',
    salary: '',
    interview_review: '',
    interview_rating: '',
    job_review: '',
    job_rating: '',
    reviewer: 'matt'
  });
  const changeHandler = e => {
    setNewReviewPost({
      ...newReviewPost,
      [e.target.name]: e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
      
    });
    // console.log(newReviewPost)
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.postReview(newReviewPost)
    // console.log("handleSubmit", newReviewPost)
    // props.history.push('/dashboard')
  };
  return (
    <div className={classes.center}>
      
      <div>
        <Typography className={classes.heading}> Add a Review</Typography>
        <form onSubmit={handleSubmit} className={classes.container}>
          <TextField
            className={classes.company}
            type="text"
            name="company_name"
            placeholder="Name of Company"
            value={newReviewPost.company_name}
            onChange={changeHandler}
          />
          <TextField
            className={classes.job_title}
            type="text"
            name="job_title"
            placeholder="Job Title"
            value={newReviewPost.job_title}
            onChange={changeHandler}
          />
          <TextField
            className={classes.job_location}
            type="text"
            name="job_location"
            placeholder="Job Location"
            value={newReviewPost.job_location}
            onChange={changeHandler}
          />
          <TextField
            className={classes.salary}
            type="number"
            name="salary"
            placeholder="Salary"
            value={newReviewPost.salary}
            onChange={changeHandler}
          />
          <TextField
            className={classes.interview_rating}
            type="number"
            name="interview_rating"
            placeholder="Interview rating"
            value={newReviewPost.interview_rating}
            onChange={changeHandler}
          />
          <TextareaAutosize
            rowsMax={4}
            className={classes.interview_review}
            type="text"
            name="interview_review"
            placeholder="Describe the interview process"
            value={newReviewPost.interview_review}
            onChange={changeHandler}
          />
          <TextField
            className={classes.job_rating}
            type="number"
            name="job_rating"
            placeholder="Job rating 0-5"
            value={newReviewPost.job_rating}
            onChange={changeHandler}
          />
          <TextareaAutosize
            rowsMax={6}
            className={classes.job_review}
            type="text"
            name="job_review"
            placeholder="Write a Review"
            value={newReviewPost.job_review}
            onChange={changeHandler}
          />
          <TextField
            // className={classes.r}
            type="text"
            name="reviewer"
            placeholder="Posted by"
            value={newReviewPost.reviewer}
            onChange={changeHandler}
          />
          <ButtonGroup>
            <Button type="submit">Add Your Review</Button>
            <Button 
            // onClick={} 
            color="secondary">
              Cancel
            </Button>
          </ButtonGroup>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, { postReview })(ReviewForm);