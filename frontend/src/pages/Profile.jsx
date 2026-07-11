import React, { useState } from "react";
import Title from "../components/Title";
import AddressForm from "../components/AddressForm";
import { useProfileContext } from "../context/profile/ProfileContext";
import { useToastContext } from "../context/toast/ToastContext";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Profile = () => {
  const { profile, setProfile } = useProfileContext();
  const { showToast } = useToastContext();

  // Local draft so typing doesn't write to localStorage on every
  // keystroke — only committed to ProfileContext on Save.
  const [draft, setDraft] = useState(profile);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setDraft((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();

    if (draft.email && !EMAIL_REGEX.test(draft.email)) {
      showToast("Please enter a valid email address.", "error");
      return;
    }

    setProfile(draft);
    showToast("Profile updated.", "success");
  };

  return (
    <section className="max-w-8xl mx-auto px-5 sm:px-6 lg:px-8 py-14">
      {/* Heading */}
      <div className="text-center mb-12">
        <Title text1="MY" text2="PROFILE" />

        <p className="mt-4 text-gray-500">
          Save your details once, and we'll pre-fill them at checkout.
        </p>
      </div>

      <form onSubmit={handleSave} className="flex flex-col gap-6">
        <AddressForm shippingInfo={draft} handleInputChange={handleInputChange} />

        <div className="flex justify-center">
          <button
            type="submit"
            className="rounded-lg bg-stone-900 px-8 py-3 font-medium text-white hover:bg-stone-800 transition"
          >
            Save Changes
          </button>
        </div>
      </form>
    </section>
  );
};

export default Profile;
