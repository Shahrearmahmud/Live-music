/* eslint-disable react/no-children-prop */
"use client";

import { useEffect, useState } from "react";

import AuthModal from "@/components/AuthModal";
import UploadModal from "@/components/UploadModal";
// import SubscribeModal from "@/components/SubscribeModal";
// import UploadModal from "@/components/UploadModal";
// import { ProductWithPrice } from "@/types";

// interface ModalProviderProps {
//   products: ProductWithPrice[];
// }

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      {/* <AuthModal />
      <SubscribeModal products={products} />
      <UploadModal />
      models! */}

      {/* <Modal
        title="Test Modal"
        description="Test Description"
        isOpen
        onChange={() => {}}
      >
        Test Children
      </Modal> */}
      <AuthModal />
      <UploadModal />
    </>
  );
};

export default ModalProvider;
