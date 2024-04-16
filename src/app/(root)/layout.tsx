import React, { PropsWithChildren } from "react";
import StreamVideoProvider from "../../../providers/StreamClientProvider";

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;
