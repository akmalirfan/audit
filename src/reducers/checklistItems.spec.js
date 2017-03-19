import deepFreeze from 'deep-freeze';
import expect, { createSpy, spyOn, isSpy } from 'expect';

export default (checklistItem) => {
    let action;
    let stateBefore;
    let stateAfter;

    // MAKE_IT_PASS
    action = {
        type: 'MAKE_IT_PASS',
        id: '2rad_C103_00000000'
    };
    stateBefore = [{
        id: '2rad_C103_00000000',
        text_ms: 'Berdaftar dengan SSM',
        info: [
            {
                text: 'MPPHM 2014, (ms. 16) 4.1 - bla blabla'
            }
        ],
        severity: 'besar'
    }];
    stateAfter = [{
        id: '2rad_C103_00000000',
        text_ms: 'Berdaftar dengan SSM',
        info: [
            {
                text: 'MPPHM 2014, (ms. 16) 4.1 - bla blabla'
            }
        ],
        severity: 'besar',
        value: 'passed'
    }];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        checklistItem(stateBefore, action)
    ).toEqual(stateAfter);

    // MAKE_IT_FAIL
    action = {
        type: 'MAKE_IT_FAIL',
        id: '2rad_C103_00000000'
    };
    stateBefore = [{
        id: '2rad_C103_00000000',
        text_ms: 'Berdaftar dengan SSM',
        info: [
            {
                text: 'MPPHM 2014, (ms. 16) 4.1 - bla blabla'
            }
        ],
        severity: 'besar'
    }];
    stateAfter = [{
        id: '2rad_C103_00000000',
        text_ms: 'Berdaftar dengan SSM',
        info: [
            {
                text: 'MPPHM 2014, (ms. 16) 4.1 - bla blabla'
            }
        ],
        severity: 'besar',
        value: 'failed'
    }];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        checklistItem(stateBefore, action)
    ).toEqual(stateAfter);

    // ADD_CHECKLISTITEM
    action = {
        type: 'ADD_CHECKLISTITEM',
        id: '2rad_C103_00000000',
        text_ms: 'Berdaftar dengan SSM',
        info: [
            {
                text: 'MPPHM 2014, (ms. 16) 4.1 - bla blabla'
            }
        ],
        severity: 'besar'
    };
    stateBefore = [];
    stateAfter = [{
        id: '2rad_C103_00000000',
        text_ms: 'Berdaftar dengan SSM',
        info: [
            {
                text: 'MPPHM 2014, (ms. 16) 4.1 - bla blabla'
            }
        ],
        severity: 'besar'
    }];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        checklistItem(stateBefore, action)
    ).toEqual(stateAfter);

    // REMOVE_CHECKLISTITEM
    action = {
        type: 'REMOVE_CHECKLISTITEM',
        id: '2rad_C103_00000000'
    };
    stateBefore = [
        {
            id: '2rad_C103_00000001',
            text_ms: 'woi',
            info: [],
            severity: 'besar'
        },
        {
            id: '2rad_C103_00000000',
            text_ms: 'Berdaftar dengan SSM',
            info: [
                {
                    text: 'MPPHM 2014, (ms. 16) 4.1 - bla blabla'
                }
            ],
            severity: 'besar'
        }
    ];
    stateAfter = [
        {
            id: '2rad_C103_00000001',
            text_ms: 'woi',
            info: [],
            severity: 'besar'
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        checklistItem(stateBefore, action)
    ).toEqual(stateAfter);

    console.log(
        '%cchecklistItems passed',
        'color: white; background-color: green;'
    );
}