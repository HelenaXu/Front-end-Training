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


// because we do not have the URL for HTTP request, so I use a mocked API with the given data
export const getFirstRender = () => {
  return dispatch => {
    axios.get('https://1acf7de0-7572-4158-b0f2-cceab84e6977.mock.pstmn.io/demo')
    .then(response =>{
      const data = response.data
      dispatch(fetchData(data))
    })
    .catch(() => {
          alert('there is an error when fetching the data!!');
    });
  }
};
