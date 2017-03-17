import deepFreeze from 'deep-freeze';
import expect, { createSpy, spyOn, isSpy } from 'expect';

export default (todo) => {
    let action;
    let stateBefore;
    let stateAfter;

    // ADD_TODO
    action = {
        id: 0,
        text: 'woi',
        type: 'ADD_TODO'
    };
    stateBefore = [];
    stateAfter = [{
        id: 0,
        text: 'woi',
        completed: false
    }];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todo(stateBefore, action)
    ).toEqual(stateAfter);

    // TOGGLE_TODO
    action = {
        id: 1,
        type: 'TOGGLE_TODO'
    };
    stateBefore = [
        {
            id: 0,
            text: 'woi',
            completed: false
        },
        {
            id: 1,
            text: 'wei',
            completed: false
        }
    ];
    stateAfter = [
        {
            id: 0,
            text: 'woi',
            completed: false
        },
        {
            id: 1,
            text: 'wei',
            completed: true
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todo(stateBefore, action)
    ).toEqual(stateAfter);
    expect(
        todo(stateBefore, {type: 'SDSDAJSDFKSJD'})
    ).toEqual(stateBefore);

    // MAKE_IT_PASS
    action = {
        section: 'Syarat-syarat Pensijilan Halal Malaysia',
        id: '2rad_C103_00000000',
        type: 'MAKE_IT_PASS'
    };
    stateBefore = [
        {
            "section": "Syarat-syarat Pensijilan Halal Malaysia",
            "items": [
                {
                    "id": "2rad_C103_00000000",
                    "text_ms": "Berdaftar dengan SSM",
                    "info": [
                        {
                            "text": "MPPHM 2014, (ms. 16) 4.1 - bla blabla"
                        }
                    ],
                    "severity": "besar",
                    "value": "failed"
                }
            ]
        }
    ];
    stateAfter = [
        {
            "section": "Syarat-syarat Pensijilan Halal Malaysia",
            "items": [
                {
                    "id": "2rad_C103_00000000",
                    "text_ms": "Berdaftar dengan SSM",
                    "info": [
                        {
                            "text": "MPPHM 2014, (ms. 16) 4.1 - bla blabla"
                        }
                    ],
                    "severity": "besar",
                    "value": "passed"
                }
            ]
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todo(stateBefore, action)
    ).toEqual(stateAfter);

    // MAKE_IT_FAIL
    action = {
        section: 'Syarat-syarat Pensijilan Halal Malaysia',
        id: '2rad_C103_00000000',
        type: 'MAKE_IT_FAIL'
    };
    stateBefore = [
        {
            "section": "Syarat-syarat Pensijilan Halal Malaysia",
            "items": [
                {
                    "id": "2rad_C103_00000000",
                    "text_ms": "Berdaftar dengan SSM",
                    "info": [
                        {
                            "text": "MPPHM 2014, (ms. 16) 4.1 - bla blabla"
                        }
                    ],
                    "severity": "besar",
                    "value": "passed"
                }
            ]
        }
    ];
    stateAfter = [
        {
            "section": "Syarat-syarat Pensijilan Halal Malaysia",
            "items": [
                {
                    "id": "2rad_C103_00000000",
                    "text_ms": "Berdaftar dengan SSM",
                    "info": [
                        {
                            "text": "MPPHM 2014, (ms. 16) 4.1 - bla blabla"
                        }
                    ],
                    "severity": "besar",
                    "value": "failed"
                }
            ]
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todo(stateBefore, action)
    ).toEqual(stateAfter);

    console.log('test passed');
}