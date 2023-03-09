import React from 'react';

interface HomeTemplateProps {
  children: React.ReactNode
}

const HomeTemplate = ({ children }: HomeTemplateProps) => (
  <div>
    <div>
      This is Home Template.
    </div>
    <div>
      {children}
    </div>
  </div>
);

export default HomeTemplate;
