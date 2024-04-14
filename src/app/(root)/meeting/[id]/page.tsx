import React from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const MeetingPage = ({ params }: PageProps) => {
  return <div>Meeting: #{params.id}</div>;
};

export default MeetingPage;
