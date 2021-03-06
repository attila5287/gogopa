import axios from "axios";

export default {
  // Gets all posts
  getFinancials: function() {
    return axios.get("/api/financials");
  },
  // Gets all posts
  getPosts: function() {
    return axios.get("/api/posts");
  },
  // Gets the post with the given id
  getFinancial: function(id) {
    return axios.get('/api/financials/' + id);
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a post to the database
  savePost: function(postData) {
    return axios.post("/api/posts", postData);
  },
  saveFinancial: function(finData) {
    return axios.post("/api/financials", finData);
  },
};
