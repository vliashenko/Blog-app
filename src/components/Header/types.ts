import { BsGithub, BsFacebook, BsLinkedin } from 'react-icons/bs';

export const icons = {
    BsGithub,
    BsFacebook,
    BsLinkedin,
};

export interface IIcon {
    icon: keyof typeof icons,
    path: string
};