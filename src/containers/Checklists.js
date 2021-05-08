import { connect } from 'react-redux'
import SectionList from '../components/SectionList'

const mapStateToProps = (state) => ({
    sections: state.checklist
})

const Checklists = connect(
  mapStateToProps
)(SectionList)

export default Checklists