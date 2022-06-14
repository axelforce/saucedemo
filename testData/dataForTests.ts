export interface Member {
  username: string;
  password: string;
}

export const userForLogin: Member = {
  username: 'standard_user',
  password: 'secret_sauce',
};
