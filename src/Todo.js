import React from 'react'
import PropTypes from 'prop-types'

const Todo = ({id, text, done}) => {
  return (
    <div className="flex mb-4 items-center">
      <p className="w-full text-grey-darkest">{text}</p>
      {done ? (
        <button
          className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-grey border-grey hover:bg-grey"
          onClick={() => console.log(id)}
        >
          Not Done
        </button>
      ) : (
        <button
          className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green"
          onClick={() => console.log(id)}
        >
          Done
        </button>
      )}

    </div>
  )
}

Todo.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool.isRequired,
}

export default Todo
