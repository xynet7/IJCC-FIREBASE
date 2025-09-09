
import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
  <div className="flex justify-center items-center py-12">
    <UserProfile path="/profile" />
  </div>
);

export default UserProfilePage;
