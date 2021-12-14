import { createState } from './index';

export const signInStatusAtom = createState({ initialValue: false });

export const userAtom = createState({ initialValue: null });
export const redirectAtom = createState({ initialValue: "/join" });

export const selectedEventsAtom = createState({ initialValue: [] });