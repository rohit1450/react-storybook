import { useState } from "react";
import { Meta } from "@storybook/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import { useTranslation } from "react-i18next";
import { MobSidebar } from "./MobSidebar";

export default {
  title: 'Components/ui/MobSidebar',
  component: MobSidebar,
  tags: ["autodocs"],
} as Meta;

export const Default = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <MobSidebar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        toggleMenu={toggleMenu}
        isOverlayOpen={true}
        toggleOverlay={() => { }}
        setIsOverlayOpen={() => { }}
        content1={t('Internationalization (i18n) is crucial for software to adapt to diverse linguistic and cultural contexts. It involves designing applications to support multiple languages and locales. By employing i18n techniques, developers ensure their software can seamlessly switch between languages, catering to a global audience. This enhances user experience and accessibility, making the software more inclusive and user-friendly.')}
        content2={t('Internationalization (i18n) is crucial for software to adapt to diverse linguistic and cultural contexts.')}
        openIcon={leftArrow}
        closeIcon={rightArrow}
        size={10}
        solutions={[
          {
            name: 'Insights',
            description: 'Measure actions your users take',
          },
          {
            name: 'Automations',
            description: 'Create your own targeted content',
          },
          {
            name: 'Reports',
            description: 'Keep track of your growth',
          },
        ]}
        name="Sidebar name"
        description="Sidebar description"
        label="Sidebar label"
        value="Sidebar value"
        switch={{ src: "switch source" }}
        locale="en"
      />

    </>
  );
};

function leftArrow({ size }: { size?: number }) {
  return (
    <ChevronLeftIcon className={`w-${size || 5} h-${size || 5} rounded-full bg-gray/[0.30]`} />
  );
}

function rightArrow({ size }: { size?: number }) {
  return (
    <ChevronRightIcon className={`w-${size || 5} h-${size || 5} rounded-full bg-gray/[0.30]`} />
  );
}
