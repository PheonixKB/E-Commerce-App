import { useState, useEffect } from "react";
import { ProfileContext } from "./ProfileContext";

export const EMPTY_PROFILE = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  country: "",
};

const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState(() => {
    const savedProfile = localStorage.getItem("profile");

    // Merge with EMPTY_PROFILE so any fields added later always exist,
    // even for people who saved a profile before those fields existed.
    return savedProfile
      ? { ...EMPTY_PROFILE, ...JSON.parse(savedProfile) }
      : EMPTY_PROFILE;
  });

  useEffect(() => {
    localStorage.setItem("profile", JSON.stringify(profile));
  }, [profile]);

  const value = {
    profile,
    setProfile,
  };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileProvider;
