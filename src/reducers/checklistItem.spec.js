import deepFreeze from 'deep-freeze';
import expect, { createSpy, spyOn, isSpy } from 'expect';

export default (checklistItem) => {
    let action;
    let stateBefore;
    let stateAfter;

    // MAKE_IT_PASS
    action = {
        id: '2rad_C103_00000000',
        type: 'MAKE_IT_PASS'
    };
    stateBefore = {
        "id": "2rad_C103_00000000",
        "text_ms": "Berdaftar dengan SSM",
        "info": [
            {
                "text": "MPPHM 2014, (ms. 16) 4.1 - bla blabla"
            }
        ],
        "severity": "besar",
        "value": "failed"
    };
    stateAfter = {
        "id": "2rad_C103_00000000",
        "text_ms": "Berdaftar dengan SSM",
        "info": [
            {
                "text": "MPPHM 2014, (ms. 16) 4.1 - bla blabla"
            }
        ],
        "severity": "besar",
        "value": "passed"
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        checklistItem(stateBefore, action)
    ).toEqual(stateAfter);

    // MAKE_IT_FAIL
    action = {
        id: '2rad_C103_00000000',
        type: 'MAKE_IT_FAIL'
    };
    stateBefore = {
        "id": "2rad_C103_00000000",
        "text_ms": "Berdaftar dengan SSM",
        "info": [
            {
                "text": "MPPHM 2014, (ms. 16) 4.1 - bla blabla"
            }
        ],
        "severity": "besar",
        "value": "passed"
    };
    stateAfter = {
        "id": "2rad_C103_00000000",
        "text_ms": "Berdaftar dengan SSM",
        "info": [
            {
                "text": "MPPHM 2014, (ms. 16) 4.1 - bla blabla"
            }
        ],
        "severity": "besar",
        "value": "failed"
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        checklistItem(stateBefore, action)
    ).toEqual(stateAfter);
    
    console.log(
        '%cchecklistItem passed',
        'color: white; background-color: green;'
    );
}