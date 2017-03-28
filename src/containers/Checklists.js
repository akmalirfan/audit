import { connect } from 'react-redux'
import { addSection, addItem } from '../actions'
import Checklist from '../components/Checklist';
import checklistItems from '../reducers/checklistItems';

const getChecklists = (state = [], action) => {
    switch (action.type) {
        case 'MAKE_IT_PASS':
        case 'MAKE_IT_FAIL':
            return state.map(section => {
                return (section.section === action.section) ? {
                    ...section,
                    items: checklistItems(section.items, action)
                } : section;
            });
        case 'ADD_SECTION':
            return [
                ...state,
                {
                    section: action.section,
                    items: []
                }
            ];
        case 'REMOVE_SECTION':
            let i = 0;
            for (let section of state) {
                if (section.section === action.section)
                    return [
                        ...state.slice(0, i),
                        ...state.slice(i + 1)
                    ];
                i++;
            }
        default:
            return state;
    }
}

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
)(Checklist)

export default Checklists