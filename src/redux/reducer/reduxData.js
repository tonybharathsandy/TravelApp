import data from '../../data/data.json'

let initialData = data
function reduxData(state = initialData, action) {
  switch (action.type) {
    case "Adding":
        return (
            state
        )
  
    default:
        return state
  }
}

export default reduxData