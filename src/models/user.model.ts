import { UserProfile } from "./userProfile.model";

export interface User {
  id: number;
  username: string;
  password: string;
  profile: UserProfile;
}

