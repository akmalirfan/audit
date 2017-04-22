import { connect } from 'react-redux'
import { addSection, addItem } from '../actions'
import SectionList from '../components/SectionList';

const mapStateToProps = (state) => ({
    sections: state
})

const Checklists = connect(
  mapStateToProps
)(SectionList)

export default Checklists