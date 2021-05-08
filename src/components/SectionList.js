import React from 'react'
import { connect } from 'react-redux'
import Section from './Section'

let SectionList = ({ sections, dispatch }) => (
    <div className="sectionlist">
        {sections.map((section, i) =>
            <Section
                key={section.section}
                section={section}
                className="section"
            />
        )}
    </div>
)

SectionList = connect()(SectionList)

export default SectionList