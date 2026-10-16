import React from "react";

import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { Pricing } from "@/components/blocks/pricing";

const Page = () => {
  return (
    <Background>
      <Pricing className="py-28 text-center lg:pt-44 lg:pb-32" />
      <FAQ className="pb-28 lg:pb-32" className2="max-w-xl lg:grid-cols-1" />
    </Background>
  );
};

export default Page;
