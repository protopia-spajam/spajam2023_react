import React, { ReactNode } from "react";
import { X } from "react-feather";

import "./index.scss";

import { Container } from "ui/atoms/container";
import { Center } from "ui/atoms/center";
import classNames from "classnames";

export const Modal = ({
  children,
  isOpen,
  setIsOpen,
  className,
  isDialog = false,
}: {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (value: React.SetStateAction<boolean>) => void;
  className?: string;
  isDialog?: boolean;
}) => {
  const classes = classNames([
    "Modal",
    className && className,
    isDialog && "dialog",
  ]);
  const classesContainer = classNames([
    "modal-container",
    isDialog && "dialog",
  ]);
  return (
    <>
      {isOpen && (
        <div className={classes}>
          <div className="overlay" onClick={() => setIsOpen(false)}></div>
          <Container className={classesContainer}>
            {isDialog || (
              <X className="close-button" onClick={() => setIsOpen(false)} />
            )}
            <Center>{children}</Center>
          </Container>
        </div>
      )}
    </>
  );
};
