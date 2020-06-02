import axios from 'axios';

// This action creator. It has three actions, including fetching data, adding item to mylist and removing the same item form Recommendations list

export const removeItem = item => ({
  type: 'REMOVE_FROM_MYLIST',
  payload: item
})

export const addItem = item => ({
  type: 'ADD_TO_MYLIST',
  payload: item
})

export const fetchData = data => ({
  type: 'FETCH_DATA',
  data
});


// because we do not have the URL for HTTP request, just mock a fetch HTTP data
export const getFirstRender = () => {
  return dispatch => {
    axios.get('mvidata.json')
    .then(response =>{
      const data = response.data
      dispatch(fetchData(data))
    })
    .catch(() => {
          alert('there is an error when fetching the data!!');
    });
  }
};
