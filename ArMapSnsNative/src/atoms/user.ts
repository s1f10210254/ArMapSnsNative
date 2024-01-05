import {atom} from 'jotai';

type UserModel = {
  id: string;
};
export const userAtom = atom<string | null>(null);
