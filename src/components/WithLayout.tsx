import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import SignUp from "./signup/SignUp";

const WithLayout = (WrappedComponent: React.FC) => {
  const LayoutComponent = (props: object) => (
    <>
      <Header />
      <main>
        <WrappedComponent {...props} />
      </main>
      <SignUp />
      <Footer />
    </>
  );

  // Set the display name
  LayoutComponent.displayName = `WithLayout(${getDisplayName(
    WrappedComponent
  )})`;

  return LayoutComponent;
};

// Helper function to get the display name of a component
function getDisplayName(WrappedComponent: React.FC) {
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

export default WithLayout;
