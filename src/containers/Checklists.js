import { connect } from 'react-redux'
import { addSection, addItem } from '../actions'
import Section from '../components/Section';

const mapStateToProps = (state) => ({
    items: state
})

const mapDispatchToProps = {
  onChecklistSubmit: addSection,
  onSectionSubmit: addItem
}

const Checklists = connect(
  mapStateToProps,
  mapDispatchToProps
)(Section)

export default Checklists