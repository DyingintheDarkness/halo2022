import { createState } from './index';

export const signInStatusAtom = createState({ initialValue: false });

export const userAtom = createState({ initialValue: null });
export const redirectAtom = createState({ initialValue: "/join" });
export const selectedEventsAtom = createState({ initialValue: [] });
export const registerDataAtom = createState({
    initialValue: {
        coordinator: {
            name: "",
            image: "",
            email: "",
            contact: "",
            fileName: ""
        },
        recoil: [],
        qurious: [],
        encode: []
    }
});

