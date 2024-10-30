import SocialMedia from "./SocialMedia";

const SocialMediaContainer = () => {
  return (
    <div className="absolute z-30 bottom-[72px] flex gap-8 left-1/2 -translate-x-1/2">
      <SocialMedia media="facebook" />
      <SocialMedia media="pinterest" />
      <SocialMedia media="instagram" />
    </div>
  );
};

export default SocialMediaContainer;
