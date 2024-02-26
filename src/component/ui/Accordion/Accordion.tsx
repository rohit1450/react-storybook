import React, { useEffect, useState } from "react";
import "@storybook/addon-console";

export interface accordionProps {
  accordionTitle: string;
  headingColor: string;
  gap: boolean;
  faqs: {
    id: number;
    header: string;
    content: {
      heading: string;
      description: string;
    };
  }[];
  opened?: {
    require: boolean;
    id: number;
  };
  icons: React.ReactNode;
}

type faq = {
  id: number;
  header: string;
  content: {
    heading: string;
    description: string;
  };
};

const Accordion = ({
  accordionTitle,
  faqs,
  icons,
  opened,
  gap,
  headingColor,
}: accordionProps) => {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (opened?.require) {
      setActive(opened?.id);
    }
  }, []);

  const contentActive = "border-b-2 border-l-2 border-r-2 rounded-b-md";
  const headerRadius = "rounded-t-md";

  const handleToggle = (faq: faq) => {
    if (active === faq.id) {
      setActive(null);
    } else {
      setActive(faq.id);
    }
  };

  return (
    <div className="w-full md:w-4/5 mx-auto">
      <h1
        className={`uppercase font-bold text-center text-sm lg:text-3xl text-${headingColor}`}
      >
        {accordionTitle}
      </h1>
      <div className="mt-5">
        {faqs.map((faq, i) => (
          <div key={i}>
            <div
              className={`flex justify-between items-center cursor-pointer border-2 ${active === faq.id ? headerRadius : "rounded-md"} px-4 py-2 ${gap && "mt-1"}`}
              onClick={() => handleToggle(faq)}
            >
              <h5 className={`text-sm md:text-base`}>{faq.header}</h5>
              <div>
                {active === faq.id ? (
                  <span className="inline-block h-6 w-6 -rotate-180 transition-all duration-500">
                    {icons}
                  </span>
                ) : (
                  <span className="inline-block h-6 w-6 transition-all duration-500">
                    {icons}
                  </span>
                )}
              </div>
            </div>
            <div
              className={`${active === faq.id ? " max-h-40" : "max-h-0"} overflow-hidden transition-[max-height] duration-500 ease-in`}
            >
              <div className={`${contentActive} px-4 py-2`}>
                <h5 className="text-base md:text-md">{faq?.content.heading}</h5>
                <p className={`text-xs md:text-sm`}>
                  {faq.content?.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
