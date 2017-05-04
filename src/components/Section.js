import React from 'react'
import { connect } from 'react-redux'
import AddItem from '../containers/AddItem'
import ChecklistItem from './ChecklistItem'

let Section = ({ section, dispatch }) => (
    <div className="section">
        <h3>{section.section}</h3>
        {section.items.map((item, i) => 
            <ChecklistItem key={i} item={item} sectionname={section.section}/>
        )}
        <AddItem section={section.section} />
    </div>
)

Section = connect()(Section)

export default Section