import React from "react";
import Image from "next/image";
import GoBack from "../../public/images/goBack.svg";

type Props = {};

const FormHeader = ({ goBack, title }: any) => {
  return (
    <>
      <div className="flex items-center gap-5">
        <Image
          src={GoBack}
          alt="Logo"
          width={70}
          height={70}
          onClick={goBack}
        />
        <h3 className="headerTitle">{title}</h3>
      </div>
    </>
  );
};

export default FormHeader;
