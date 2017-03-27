import deepFreeze from 'deep-freeze';
import expect, { createSpy, spyOn, isSpy } from 'expect';

export default (todo) => {
    let action;
    let stateBefore;
    let stateAfter;

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
                },
                {
                    "id": "2rad_C103_00000001",
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
                },
                {
                    "id": "2rad_C103_00000001",
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

    // ADD_SECTION
    action = {
        type: 'ADD_SECTION',
        section: 'Syarat-syarat Pensijilan Halal Malaysia'
    };
    stateBefore = [
        {
            "section": "woi",
            "items": []
        }
    ];
    stateAfter = [
        {
            "section": "woi",
            "items": []
        },
        {
            "section": "Syarat-syarat Pensijilan Halal Malaysia",
            "items": []
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todo(stateBefore, action)
    ).toEqual(stateAfter);

    // REMOVE_SECTION
    action = {
        type: 'REMOVE_SECTION',
        section: 'Syarat-syarat Pensijilan Halal Malaysia'
    };
    stateBefore = [
        {
            "section": "Some random section",
            "items": []
        },
        {
            "section": "Syarat-syarat Pensijilan Halal Malaysia",
            "items": []
        }
    ];
    stateAfter = [
        {
            "section": "Some random section",
            "items": []
        }
    ];

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
        todo(stateBefore, action)
    ).toEqual(stateAfter);

    console.log(
        '%cchecklist passed',
        'color: white; background-color: green;'
    );
}