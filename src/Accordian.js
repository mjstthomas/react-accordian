import React from 'react'
import './Accordian.css'

class Accordian extends React.Component {
	static defaultProps = {
    sections: []
  };

  state = {
    sectionIndex: null,
  }

  handleSection = (index) => {
    this.setState({ sectionIndex: index })
  }

  renderItem(section, index, sectionIndex) {
    return (
      <li key={index}>
        <button
          type='button'
          onClick={() => this.handleSection(index)}
        >
          {section.title}
        </button>
        {(sectionIndex === index) && <p>{section.content}</p>}
      </li>
    )
  }

  render() {
    const { sectionIndex } = this.state
    const { sections } = this.props
    return (
      <ul>
        {sections.map((section, idx) =>
          this.renderItem(section, idx, sectionIndex)
        )}
      </ul>
    )
  }
}

export default Accordian