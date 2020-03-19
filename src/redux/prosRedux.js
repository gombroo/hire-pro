import Axios from 'axios';

/* selectors */
export const getAllPros = ({pros}) => pros;

export const getFeatured = ({ pros }) =>
  pros.filter(pro => pro.featured === true);

export const getSingleProById = ({pros},  id) =>
  pros.filter(pro => pro.id === id);

export const getInstrument = ({pros}, instrument) =>
  pros.filter(pro => pro.instrument === instrument);

// export const getProsByCategory = ({ pros }, categoryId) =>
//   categoryId ? pros.filter(pro => pro.category === categoryId) : pros;

// export const getAllInstruments =({pros}) => pros.instrument;
// export const getAllMusicians = ({pros}) => pros.filter(pro => pro.category = 'musician');

/* action name creator */
const reducerName = 'pros';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

/* thunk creators */
export const fetchAllPros = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get('http://localhost:8000/api/pros')
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

export const fetchSinglePro = ( id ) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get(`http://localhost:8000/api/pros/${id}`)
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};


/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    default:
      return statePart;
  }
};
