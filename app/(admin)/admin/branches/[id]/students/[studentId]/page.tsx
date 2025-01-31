import React from "react";

const SkillCertificateProviding = ({
  params,
}: {
  params: { studentId: string };
}) => {
  return (
    <div>
      // todo: i will provide skill certificate by studentId. student Id :{" "}
      {params.studentId}
    </div>
  );
};

export default SkillCertificateProviding;
