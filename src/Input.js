import React, {useState} from 'react'
import PropTypes from 'prop-types'

const Input = ({create}) => {
  const [text, setText] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (text.length > 0) {
      create(text)
      setText('')
    }
  }

  return (
    <form
      className="flex mt-4"
      onSubmit={handleSubmit}
    >
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker"
        placeholder="Add Todo"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        type="submit"
        className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-white hover:bg-teal"
      >
        Add
      </button>
    </form>
  )
}

Input.propTypes = {
  create: PropTypes.func.isRequired,
}

export default Input
