import React from "react";
import { pk1Subjects } from "../../constants/pk1Data";
import { pk2Subjects } from "../../constants/pk2Data";
import { pk3Subjects } from "../../constants/pk3Data";
import { pk4Subjects } from "../../constants/pk4Data";
import CurriculumOverviewMblComman from "../../components/common/CurriculumOverviewMblComman";

const gradesDataPK = {
  "PK 1": pk1Subjects,
  "PK 2": pk2Subjects,
  "PK 3": pk3Subjects,
  "PK 4": pk4Subjects,
};

const tagsPK = ["All", "PK 1", "PK 2", "PK 3", "PK 4"];

export default function PKCurriculumMbl() {
  return <CurriculumOverviewMblComman tags={tagsPK} gradesData={gradesDataPK} />;
}
