import {DefineMethods} from 'aspida';

export type Methods = DefineMethods<{
  get: {
    resBody: {
      hello: string;
    };
  };
}>;
