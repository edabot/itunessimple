import axios from 'axios'

export default {

  submitEntry(term, success) {
  axios.get('https://itunes.apple.com/search?term=' + term)
    .then(response => { success(response.data.results) })
    .catch(function (error) {
      console.log(error);
    });
  }
}
