import { FaXTwitter } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const FollowOn = () => {
  return (
    <div
      className="faded-text pt-2" //custom - faded-text
    >
      <span>Follow on:</span>
      <div className="flex gap-4 pt-3">
        <a href="https://www.linkedin.com/in/avik-nayak">
          <FaLinkedin size={20} />
        </a>
        <a href="https://github.com/AvikNayak22">
          <FaGithub size={20} />
        </a>
        <a href="https://twitter.com/__AvikNayak__">
          <FaXTwitter size={20} />
        </a>
      </div>
    </div>
  );
};

export default FollowOn;
