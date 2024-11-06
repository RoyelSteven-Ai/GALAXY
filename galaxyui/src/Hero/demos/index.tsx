import { Hero, HeroProps } from 'galaxyui';

const actions: HeroProps['actions'] = [
  {
    icon: 'Github',
    link: 'https://github.com/RoyelSteven-Ai',
    text: 'Github',
  },
  {
    link: '/components/action-icon',
    text: 'Get Started',
    type: 'primary',
  },
];

export default () => {
  return (
    <Hero
      actions={actions}
      description="GALAXY UI is an open-source UI component library for <br/>building chatbot web apps"
      title="GALAXY <b>UI</b>"
    />
  );
};
