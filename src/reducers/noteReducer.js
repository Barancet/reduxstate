const initialState = [
  {
    content: 'reducer defines how redux store works',
    important: true,
    id: 3,
  },
  {
    content: 'state of store can contain any data',
    important: false,
    id: 4,
  },
]

const noteReducer = (state = initialState, action) => {
  console.log('ACTION: ', action)
  switch (action.type) {
    case "NEW_NOTE":
      console.log(state, action.data);
      return [...state, action.data];
    case "TOGGLE_IMPORTANCE": {
      const id = action.data.id;
      const noteToChange = state.find((note) => note.id === id);
      const changedNote = {
        ...noteToChange,
        important: !noteToChange.important,
      };
      return state.map((note) => {
        //console.log(note.id, id)
        //console.log(noteToChange);
        return note.id !== id ? note : changedNote
      });
    }
    default:
      return state;
  }
};

const generateId = () => Number((Math.random() * 1000000).toFixed(0))

export const createNote = (content) => {
  return {
    type: 'NEW_NOTE',
      data: {
        content,
        important: false,
        id: generateId()
      }
  }
}

export const toggleImportanceOf = (id) => {
  return {
    type: 'TOGGLE_IMPORTANCE',
    data: { id }
  }
}

export default noteReducer;
