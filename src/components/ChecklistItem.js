import { addItem } from '../actions'
import React from 'react'
import { connect } from 'react-redux'
import AddInfo from '../containers/AddInfo'

let ChecklistItem = ({ sectionname, item }) => (
    <div>
        {item.text_ms}
        <span className="severity">{item.severity}</span>
        <AddInfo
            sectionname={sectionname}
            itemid={item.id}
        />
        <ol>
            {item.info.map((inf, i) => 
                <li key={i}>{inf.text}</li>
            )}
        </ol>
    </div>
)

export default ChecklistItem