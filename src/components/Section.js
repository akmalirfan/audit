import React from 'react'
import { connect } from 'react-redux'
import AddItem from '../containers/AddItem'
import ChecklistItem from './ChecklistItem'

let Section = ({ section, dispatch }) => (
    <div className="section">
        <h3>{section.section}</h3>
        <AddItem section={section.section} />
        {section.items.map((item, i) => {
            return (
                <ChecklistItem key={i} item={item} sectionname={section.section}/>
            )
        })}
    </div>
)

Section = connect()(Section)

export default Section